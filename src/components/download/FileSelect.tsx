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
import { cn } from '@/lib/utils';

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
    <div className="space-y-4 text-center">
      <label className="block text-xl font-bold text-gradient-indigo">
        Krok 2: Wybierz wersję
      </label>
      
      <div className="max-w-md mx-auto">
        <DropdownMenu onOpenChange={() => setSearchQuery('')}>
          <DropdownMenuTrigger asChild disabled={disabled}>
            <Button
              variant="outline"
              className="w-full justify-between bg-gray-900/50 border-gray-800 text-gray-200 hover:bg-gray-800 hover:text-white h-auto py-4 px-6 rounded-2xl transition-all hover:border-indigo-500/50"
              aria-label="Wybierz wersję paczki"
            >
              <span className="flex items-center truncate">
                <FileArchive className="w-5 h-5 mr-3 flex-shrink-0 text-indigo-400" aria-hidden="true" />
                <span className="truncate font-medium">
                  {selectedFile ? stripColorCodes(selectedFile.display) : 'Wybierz wersję...'}
                </span>
              </span>
              <ChevronDown className="w-5 h-5 flex-shrink-0 ml-3 text-gray-500" aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent 
            className="w-[min(calc(100vw-2rem),28rem)] bg-gray-900 border-gray-800 text-gray-200 max-h-[50vh] overflow-y-auto rounded-xl p-2 shadow-2xl backdrop-blur-xl"
            align="center"
          >
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm p-2 mb-2 border-b border-gray-800 z-10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" aria-hidden="true" />
                <Input
                  placeholder="Szukaj wersji..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-gray-950 border-gray-800 text-gray-200 placeholder:text-gray-500 rounded-lg h-10"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <AnimatePresence>
                {filteredFiles.length === 0 ? (
                  <div className="p-8 text-center text-gray-500 text-sm">
                    Nie znaleziono wersji spełniającej kryteria
                  </div>
                ) : (
                  filteredFiles.map((file, index) => (
                    <motion.div
                      key={file.file}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.02 }}
                    >
                      <DropdownMenuItem
                        onClick={() => onChange(file.file)}
                        className={cn(
                          'cursor-pointer rounded-lg px-3 py-2.5 transition-colors focus:bg-blue-600 focus:text-white mb-1',
                          value === file.file && 'bg-blue-600/20 text-blue-400 border border-blue-500/20'
                        )}
                      >
                        <span className="truncate font-medium">{stripColorCodes(file.display)}</span>
                      </DropdownMenuItem>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}