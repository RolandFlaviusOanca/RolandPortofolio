import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-6 text-l h-20  flex items-center justify-center relative">
      <div className="relative z-10 flex text-white items-center space-x-2">
        <p>Made with</p>
        <Heart className="h-6 w-6 text-red-500" />
        <p><b>Oanca Roland</b>&nbsp; &copy; {year}</p>
      </div>
    </footer>
  );
}
