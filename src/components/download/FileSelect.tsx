import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, FileArchive } from 'lucide-react';
import { FileItem } from '@/types';
import { stripColorCodes } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

interface FileSelectProps {
  files: FileItem[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function FileSelect({ files, value, onChange, disabled }: FileSelectProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
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

  return (
    <div className="space-y-3">
      <label className="block text-lg font-semibold text-gray-200">
        Wybierz wersję:
      </label>
      
      <DropdownMenu onOpenChange={() => setSearchQuery('')}>
        <DropdownMenuTrigger asChild disabled={disabled}>
          <Button
            variant="outline"
            className="w-full justify-between bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700 hover:text-white h-auto py-3 px-4"
            aria-label="Wybierz wersję paczki"
          >
            <span className="flex items-center truncate">
              <FileArchive className="w-4 h-4 mr-2 flex-shrink-0 text-blue-400" aria-hidden="true" />
              <span className="truncate">
                {selectedFile ? stripColorCodes(selectedFile.display) : 'Wybierz...'}
              </span>
            </span>
            <ChevronDown className="w-4 h-4 flex-shrink-0 ml-2 text-gray-500" aria-hidden="true" />
          </Button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent 
          className="w-[min(calc(100vw-2rem),28rem)] bg-gray-800 border-gray-700 text-gray-200 max-h-[60vh] overflow-y-auto"
          align="start"
        >
          <div className="sticky top-0 bg-gray-800 p-2 border-b border-gray-700 z-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" aria-hidden="true" />
              <Input
                placeholder="Szukaj wersji..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-gray-900 border-gray-700 text-gray-200 placeholder:text-gray-500"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
          
          <AnimatePresence>
            {filteredFiles.length === 0 ? (
              <div className="p-4 text-center text-gray-500 text-sm">
                Nie znaleziono wersji
              </div>
            ) : (
              filteredFiles.map((file, index) => (
                <motion.div
                  key={file.file}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <DropdownMenuItem
                    onClick={() => onChange(file.file)}
                    className={cn(
                      'cursor-pointer focus:bg-gray-700 focus:text-white',
                      value === file.file && 'bg-blue-500/20 text-blue-400'
                    )}
                  >
                    <span className="truncate">{stripColorCodes(file.display)}</span>
                  </DropdownMenuItem>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}