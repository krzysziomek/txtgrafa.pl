import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { CategorySelect } from './CategorySelect';
import { FileSelect } from './FileSelect';
import { ConfettiButton } from '@/components/motion/ConfettiButton';
import { CategoryKey, filesByCategory } from '@/lib/data';
import { getDownloadPath } from '@/lib/utils';
import { AnimatedItem } from '@/components/motion/AnimatedPage';

export function DownloadSection() {
  const [category, setCategory] = useState<CategoryKey>('overlay');
  const [selectedFile, setSelectedFile] = useState<string>(filesByCategory.overlay[0].file);

  const handleCategoryChange = useCallback((newCategory: CategoryKey) => {
    setCategory(newCategory);
    setSelectedFile(filesByCategory[newCategory][0].file);
  }, []);

  const handleDownload = useCallback(() => {
    const path = getDownloadPath(category, selectedFile);
    
    if (selectedFile.endsWith('.html')) {
      window.location.href = path;
    } else {
      const link = document.createElement('a');
      link.href = path;
      link.download = selectedFile;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [category, selectedFile]);

  const currentFiles = filesByCategory[category];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <AnimatedItem>
        <CategorySelect value={category} onChange={handleCategoryChange} />
      </AnimatedItem>

      <AnimatedItem>
        <FileSelect
          files={currentFiles}
          value={selectedFile}
          onChange={setSelectedFile}
        />
      </AnimatedItem>

      <AnimatedItem>
        <div className="pt-4">
          <ConfettiButton
            onClick={handleDownload}
            className="w-full sm:w-auto sm:min-w-[200px] bg-green-600 hover:bg-green-700 text-white font-semibold py-6 text-lg"
          >
            <Download className="w-5 h-5 mr-2" aria-hidden="true" />
            Pobierz
          </ConfettiButton>
          
          <p className="mt-4 text-sm text-gray-500">
            Pliki pobierane bezpośrednio z serwera. Brak śledzenia, brak cookies.
          </p>
        </div>
      </AnimatedItem>

      {selectedFile.endsWith('.html') && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-start space-x-3"
          role="alert"
        >
          <ExternalLink className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-sm text-amber-200">
            <p className="font-medium">Przekierowanie zewnętrzne</p>
            <p className="mt-1">Ten plik przekieruje Cię do zewnętrznej strony (Modrinth).</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}