import { useState, useCallback, useRef } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CategorySelect } from './CategorySelect';
import { FileSelect } from './FileSelect';
import { CategoryKey, filesByCategory } from '../../lib/data';
import { getDownloadPath, isValidHtmlRedirect } from '../../lib/utils';

export function DownloadSection() {
  const [category, setCategory] = useState<CategoryKey>('overlay');
  const [selectedFile, setSelectedFile] = useState<string>(filesByCategory.overlay[0].file);
  const downloadBtnRef = useRef<HTMLButtonElement>(null);

  const handleCategoryChange = useCallback((newCategory: CategoryKey) => {
    setCategory(newCategory);
    setSelectedFile(filesByCategory[newCategory][0].file);
  }, []);

  const isExternalRedirect = selectedFile === 'new.html';

  const handleDownload = useCallback(() => {
    try {
      if (downloadBtnRef.current) {
        // Trigger confetti explosion
        const rect = downloadBtnRef.current.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
          particleCount: 140,
          spread: 80,
          origin: { x, y },
          colors: ['#22c55e', '#3b82f6', '#eab308', '#a855f7'],
          disableForReducedMotion: true,
        });
      }

      if (isExternalRedirect) {
        // Redirect to Modrinth in a new tab or same page as requested
        window.location.href = 'https://modrinth.com/resourcepack/glowing-ores!';
        return;
      }

      // Validate the file exists in our data before processing
      const categoryFiles = filesByCategory[category];
      const fileExists = categoryFiles.some(f => f.file === selectedFile);
      
      if (!fileExists) {
        console.error('File not found in category');
        return;
      }
      
      const path = getDownloadPath(category, selectedFile);
      
      if (selectedFile.endsWith('.html')) {
        // Additional validation for HTML redirects
        if (!isValidHtmlRedirect(selectedFile)) {
          console.error('Invalid HTML redirect attempted');
          return;
        }
        window.location.href = path;
      } else {
        const link = document.createElement('a');
        link.href = path;
        link.download = selectedFile;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Download error:', error);
    }
  }, [category, selectedFile, isExternalRedirect]);

  const currentFiles = filesByCategory[category];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div>
        <CategorySelect value={category} onChange={handleCategoryChange} />
      </div>

      <div>
        <FileSelect
          files={currentFiles}
          value={selectedFile}
          onChange={setSelectedFile}
        />
      </div>

      <div className="text-center pt-4">
        <div>
          <button
            ref={downloadBtnRef}
            onClick={handleDownload}
            className={`w-full sm:w-auto sm:min-w-[280px] py-4 px-8 rounded-[4px] text-2xl font-pixel uppercase tracking-widest ${
              isExternalRedirect ? 'btn-3d-blue' : 'btn-3d-green'
            }`}
          >
            {isExternalRedirect ? (
              <>
                <ExternalLink className="w-5 h-5 mr-3 inline-block relative -top-0.5" aria-hidden="true" />
                Przejdź
              </>
            ) : (
              <>
                <Download className="w-5 h-5 mr-3 inline-block relative -top-0.5" aria-hidden="true" />
                Pobierz
              </>
            )}
          </button>
          
          <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {isExternalRedirect 
              ? 'Przekierowanie do oficjalnej strony Modrinth' 
              : 'Pobieranie bezpośrednie bez reklam i śledzenia'}
          </p>
        </div>
      </div>

      {isExternalRedirect && (
        <div
          className="p-5 bg-blue-500/10 border-2 border-blue-500/20 rounded-[4px] flex items-start space-x-4 max-w-md mx-auto shadow-lg slide-up"
          role="alert"
        >
          <div className="p-2 bg-blue-500/20 rounded-full flex-shrink-0">
            <ExternalLink className="w-5 h-5 text-blue-400" aria-hidden="true" />
          </div>
          <div className="text-sm text-left">
            <p className="font-pixel text-lg tracking-wide text-blue-200">Przekierowanie zewnętrzne</p>
            <p className="mt-1 font-sans text-gray-400">Ten plik znajduje się na platformie Modrinth. Zostaniesz tam przekierowany.</p>
          </div>
        </div>
      )}
    </div>
  );
}