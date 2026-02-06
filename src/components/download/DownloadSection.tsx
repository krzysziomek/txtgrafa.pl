import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { CategorySelect } from './CategorySelect';
import { FileSelect } from './FileSelect';
import { ConfettiButton } from '@/components/motion/ConfettiButton';
import { CategoryKey, filesByCategory } from '@/lib/data';
import { getDownloadPath, isValidHtmlRedirect } from '@/lib/utils';
import { AnimatedItem } from '@/components/motion/AnimatedPage';

export function DownloadSection() {
  const [category, setCategory] = useState<CategoryKey>('overlay');
  const [selectedFile, setSelectedFile] = useState<string>(filesByCategory.overlay[0].file);

  const handleCategoryChange = useCallback((newCategory: CategoryKey) => {
    setCategory(newCategory);
    setSelectedFile(filesByCategory[newCategory][0].file);
  }, []);

  const isExternalRedirect = selectedFile === 'new.html';

  const handleDownload = useCallback(() => {
    try {
      if (isExternalRedirect) {
        window.location.href = 'https://modrinth.com/resourcepack/new-glowing-ores';
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
    <div className="w-full max-w-2xl mx-auto space-y-12">
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

      <AnimatedItem className="text-center">
        <div className="pt-6">
          <ConfettiButton
            onClick={handleDownload}
            className="w-full sm:w-auto sm:min-w-[280px] bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-7 text-xl rounded-2xl shadow-[0_10px_40px_-10px_rgba(16,185,129,0.3)] transition-all hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.4)] border-none"
          >
            {isExternalRedirect ? (
              <>
                <ExternalLink className="w-6 h-6 mr-3" aria-hidden="true" />
                Przejdź
              </>
            ) : (
              <>
                <Download className="w-6 h-6 mr-3" aria-hidden="true" />
                Pobierz
              </>
            )}
          </ConfettiButton>
          
          <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            {isExternalRedirect 
              ? 'Przekierowanie do oficjalnej strony Modrinth' 
              : 'Pobieranie bezpośrednie bez reklam i śledzenia'}
          </p>
        </div>
      </AnimatedItem>

      {selectedFile.endsWith('.html') && isValidHtmlRedirect(selectedFile) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-5 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-start space-x-4 max-w-md mx-auto shadow-lg"
          role="alert"
        >
          <div className="p-2 bg-amber-500/20 rounded-full">
            <ExternalLink className="w-5 h-5 text-amber-500 flex-shrink-0" aria-hidden="true" />
          </div>
          <div className="text-sm text-left">
            <p className="font-bold text-amber-200">Przekierowanie zewnętrzne</p>
            <p className="mt-1 text-amber-200/70">Ten plik znajduje się na platformie Modrinth. Zostaniesz tam przekierowany.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}