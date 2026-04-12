export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} TxtGrafa. All rights reserved.</p>
      </div>
    </footer>
  );
};