'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingCart, 
  faUser, 
  faSearch, 
  faBars,
  faTimes 
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-semibold text-gray-900">
              <span className="text-blue-600">Drone</span>Store
            </Link>
          </div>

          {/* Navigation (desktop) */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Главная
            </Link>
            <Link href="/catalog" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Каталог
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              О нас
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Контакты
            </Link>
          </nav>

          {/* Search bar */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Поиск дронов..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute left-3.5 top-3.5 text-gray-400 w-4 h-4"
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search icon (mobile) */}
            <button className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors">
              <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
            </button>
            
            {/* User icon */}
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors">
              <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
            </button>
            
            {/* Cart icon */}
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors relative">
              <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FontAwesomeIcon 
                icon={isMenuOpen ? faTimes : faBars} 
                className="w-5 h-5" 
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors">
                Главная
              </Link>
              <Link href="/catalog" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors">
                Каталог
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors">
                О нас
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors">
                Контакты
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
