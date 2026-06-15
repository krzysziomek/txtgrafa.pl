import { useMemo, useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, FileArchive } from 'lucide-react';
import { FileItem } from '../../types';
import { stripColorCodes, parseMinecraftText } from '../../lib/utils';
import { cn } from '../../lib/utils';

interface FileSelectProps {
  files: FileItem[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function FileSelect({ files, value, onChange, disabled }: FileSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedFile = useMemo(() =>
    files.find(f => f.file === value),
    [files, value]
  );

  const filteredFiles = useMemo(() =>
    files.filter(f =>
      stripColorCodes(f.display).toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [files, searchQuery]
  );

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const [dropdownMaxHeight, setDropdownMaxHeight] = useState('35vh');

  useEffect(() => {
    function updateMaxHeight() {
      if (isOpen && dropdownRef.current) {
        const rect = dropdownRef.current.getBoundingClientRect();
        const dropdownTop = rect.bottom + 8;
        const footer = document.querySelector('footer');
        let footerTop = window.innerHeight;
        if (footer) {
          footerTop = footer.getBoundingClientRect().top;
        }
        const availableHeight = footerTop - dropdownTop - 12;
        setDropdownMaxHeight(`${Math.max(150, availableHeight)}px`);
      }
    }

    updateMaxHeight();
    if (isOpen) {
      window.addEventListener('resize', updateMaxHeight);
    }
    return () => {
      window.removeEventListener('resize', updateMaxHeight);
    };
  }, [isOpen, files]);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(prev => !prev);
      setSearchQuery('');
    }
  };

  const handleSelect = (fileCode: string) => {
    onChange(fileCode);
    setIsOpen(false);
  };

  const renderMinecraftText = (text: string) => {
    const segments = parseMinecraftText(text);
    return (
      <>
        {segments.map((seg, idx) => (
          <span
            key={idx}
            style={seg.color ? { color: seg.color } : undefined}
            className={cn(
              seg.bold && 'font-bold',
              seg.italic && 'italic',
              seg.underline && 'underline',
              seg.strikethrough && 'line-through'
            )}
          >
            {seg.text}
          </span>
        ))}
      </>
    );
  };

  const getDisplayText = (item: FileItem) => {
    if (item.file.endsWith('.zip')) {
      return renderMinecraftText(item.file.replace(/\.zip$/i, ''));
    }
    return item.display;
  };

  return (
    <div className="space-y-4 text-center select-none" ref={dropdownRef}>
      <label className="block font-pixel text-2xl tracking-wider text-blue-400">
        Krok 2: Wybierz wersję
      </label>

      <div className={cn("max-w-md mx-auto relative", isOpen && "z-[99]")}>
        <button
          type="button"
          disabled={disabled}
          onClick={toggleDropdown}
          className="w-full flex items-center justify-between bg-obsidian-900 border-2 border-t-white/10 border-l-white/10 border-r-black/40 border-b-black/60 text-gray-200 hover:text-white h-auto py-4 px-6 rounded-md shadow-[0_4px_0_rgba(0,0,0,0.55)] active:translate-y-[2px] transition-all duration-75"
          aria-label="Wybierz wersję paczki"
        >
          <span className="flex items-center truncate">
            <FileArchive className="w-5 h-5 mr-3 flex-shrink-0 text-blue-400" aria-hidden="true" />
            <span className="truncate font-pixel text-xl tracking-wider">
              {selectedFile ? getDisplayText(selectedFile) : 'Wybierz wersję...'}
            </span>
          </span>
          <ChevronDown className="w-5 h-5 flex-shrink-0 ml-3 text-gray-500" aria-hidden="true" />
        </button>

        {/* Custom Dropdown Content */}
        {isOpen && (
          <div
            className="absolute left-0 right-0 mt-2 z-[9999] bg-[#161618] border-2 border-t-white/10 border-l-white/10 border-r-black/50 border-b-black/60 rounded-md shadow-2xl overflow-hidden flex flex-col slide-up"
            style={{ maxHeight: dropdownMaxHeight, contentVisibility: 'auto' }}
          >
            {/* Search Input Container */}
            <div className="p-3 border-b border-obsidian-800 bg-[#0e0e10] sticky top-0 z-[99]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Szukaj wersji..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-obsidian-950 border border-obsidian-700 text-gray-200 placeholder:text-gray-500 rounded-md focus:outline-none focus:border-blue-500 text-sm font-sans"
                  autoFocus
                />
              </div>
            </div>

            {/* Options List */}
            <div className="overflow-y-auto p-1 divide-y divide-obsidian-850 flex-grow">
              {filteredFiles.length === 0 ? (
                <div className="p-8 text-center text-gray-500 text-sm font-sans">
                  Nie znaleziono wersji spełniającej kryteria
                </div>
              ) : (
                filteredFiles.map((file) => {
                  const isSelected = value === file.file;
                  return (
                    <button
                      key={file.file}
                      type="button"
                      onClick={() => handleSelect(file.file)}
                      className={cn(
                        'w-full text-left font-pixel text-lg tracking-wide rounded-md px-4 py-2.5 transition-colors focus:outline-none mb-1 block truncate',
                        isSelected
                          ? 'bg-green-700 text-white font-bold'
                          : 'text-gray-300 hover:bg-obsidian-800 hover:text-white'
                      )}
                    >
                      {getDisplayText(file)}
                    </button>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}