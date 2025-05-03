import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="w-full max-w-5xl mx-auto py-6 px-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        EscalaMLM
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
