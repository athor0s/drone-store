'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingCart, 
  faHeart, 
  faUser, 
  faBars, 
  faSearch,
  faList,
  faPlane,
  faBattery,
  faVideo,
  faGamepad,
  faGraduationCap,
  faCog,
  faBook,
  faHeadphones
} from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@/contexts/CartContext';
import CartPopup from './CartPopup';

const Header = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartPopupVisible, setIsCartPopupVisible] = useState(false);
  const { getCartItemsCount, getWishlistItemsCount } = useCart();

  const catalogCategories = [
    {
      id: 'drones',
      name: 'квадрокоптеры',
      icon: faPlane,
      subcategories: [
        { name: 'профессиональные дроны', count: 45 },
        { name: 'любительские квадрокоптеры', count: 67 },
        { name: 'мини-дроны', count: 23 },
        { name: 'гоночные дроны', count: 34 },
        { name: 'дроны с 4K камерой', count: 28 },
        { name: 'промышленные дроны', count: 15 }
      ]
    },
    {
      id: 'accessories',
      name: 'аксессуары',
      icon: faCog,
      subcategories: [
        { name: 'пропеллеры', count: 89 },
        { name: 'защита пропеллеров', count: 34 },
        { name: 'чехлы и кейсы', count: 45 },
        { name: 'крепления', count: 67 },
        { name: 'светодиодная подсветка', count: 23 },
        { name: 'запчасти', count: 156 }
      ]
    },
    {
      id: 'batteries',
      name: 'батареи и питание',
      icon: faBattery,
      subcategories: [
        { name: 'lipo батареи', count: 78 },
        { name: 'зарядные устройства', count: 34 },
        { name: 'батарейные банки', count: 23 },
        { name: 'usb кабели', count: 45 },
        { name: 'адаптеры питания', count: 28 },
        { name: 'балансировочные зарядки', count: 19 }
      ]
    },
    {
      id: 'fpv',
      name: 'fpv оборудование',
      icon: faGamepad,
      subcategories: [
        { name: 'fpv очки', count: 23 },
        { name: 'передатчики видео', count: 34 },
        { name: 'приемники', count: 45 },
        { name: 'антенны', count: 67 },
        { name: 'мониторы', count: 19 },
        { name: 'симуляторы', count: 12 }
      ]
    }
  ];

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
        {/* Main Header */}
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center py-8">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center space-x-16 flex-1">
              {/* Logo */}
              <Link href="/" className="ml-8 text-3xl font-nauryz tracking-wide text-blue-600 transition-all duration-300">
                дрон<span className="font-extralight text-black">стор</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-12">
                <button
                  onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                  className={`px-8 py-3 ${isCatalogOpen ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-700'} hover:bg-gray-100 hover:text-gray-900 font-nauryz text-lg tracking-wide transition-all duration-300 rounded-full border hover:border-gray-300 hover:scale-105 flex items-center space-x-3`}
                >
                  <FontAwesomeIcon icon={faList} className="w-4 h-4" />
                  <span>каталог</span>
                </button>
              </nav>
            </div>

            {/* Center - Search Input */}
            <div className="relative hidden lg:block flex-shrink-0">
              <input
                type="text"
                placeholder="поиск товаров..."
                className="w-96 px-6 py-3 bg-gray-50/80 border border-gray-200 rounded-full font-extralight text-base tracking-wide text-gray-700 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-blue-200 transition-all duration-300"
              />
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" 
              />
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-3 flex-1 justify-end mr-8">
              {/* Wishlist */}
              <Link href="/wishlist" className="relative px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 hover:bg-red-50 hover:border-red-200 hover:text-red-600 font-nauryz text-base tracking-wide transition-all duration-300 rounded-full hover:scale-105 flex items-center space-x-2">
                <FontAwesomeIcon icon={faHeart} className="w-3 h-3" />
                <span>избранное</span>
                {getWishlistItemsCount() > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-extralight">
                    {getWishlistItemsCount()}
                  </span>
                )}
              </Link>
              
              {/* Shopping Cart */}
              <div className="relative">
                <button 
                  className="relative px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 font-nauryz text-base tracking-wide transition-all duration-300 rounded-full hover:scale-105 flex items-center space-x-2"
                  onMouseEnter={() => setIsCartPopupVisible(true)}
                  onMouseLeave={() => setIsCartPopupVisible(false)}
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="w-3 h-3" />
                  <span>корзина</span>
                  {getCartItemsCount() > 0 && (
                    <span className="bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-extralight">
                      {getCartItemsCount()}
                    </span>
                  )}
                </button>
                
                <CartPopup 
                  isVisible={isCartPopupVisible}
                  onClose={() => setIsCartPopupVisible(false)}
                />
              </div>
              
              {/* User Profile */}
              <button className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300 hover:text-gray-900 font-nauryz text-base tracking-wide transition-all duration-300 rounded-full hover:scale-105 flex items-center space-x-2">
                <FontAwesomeIcon icon={faUser} className="w-3 h-3" />
                <span>профиль</span>
              </button>
                            
              {/* Mobile menu button */}
              <button 
                className="lg:hidden text-gray-600 hover:text-gray-900 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Catalog Overlay */}
      {isCatalogOpen && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" onClick={() => setIsCatalogOpen(false)}>
          <div 
            className="absolute top-24 left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl max-h-[80vh] overflow-y-auto rounded-b-[3rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex min-h-full">
              {/* Left Sidebar - Categories */}
              <div className="w-96 bg-gray-50/50 p-8 border-r border-gray-200/50 sticky top-0 h-fit rounded-bl-[3rem]">
                <h3 className="text-2xl font-nauryz text-gray-900 mb-8 tracking-wide ml-12">каталог <span className="font-extralight">товаров</span></h3>
                <div className="space-y-2 ml-8">
                  {catalogCategories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/catalog/${category.id}`}
                      onClick={() => setIsCatalogOpen(false)}
                      className="flex items-center p-4 rounded-2xl hover:bg-white/80 transition-colors duration-200 group"
                    >
                      <FontAwesomeIcon
                        icon={category.icon}
                        className="w-5 h-5 text-blue-600 mr-4"
                      />
                      <span className="text-gray-700 font-extralight tracking-wide text-lg">{category.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Content - Subcategories */}
              <div className="flex-1 p-10 rounded-br-[3rem]">
                <div className="grid grid-cols-3 gap-10">
                  {catalogCategories.map((category) => (
                    <div key={category.id} className="space-y-4">
                      <h4 className="text-xl font-nauryz text-gray-900 mb-6 tracking-wide flex items-center">
                        <FontAwesomeIcon icon={category.icon} className="w-5 h-5 mr-3 text-blue-600" />
                        {category.name}
                      </h4>
                      <div className="space-y-3">
                        {category.subcategories.map((subcategory, index) => (
                          <Link
                            key={index}
                            href={`/catalog/${category.id}/${subcategory.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block text-base text-gray-500 hover:text-blue-600 transition-colors duration-200 font-extralight tracking-wide py-1"
                            onClick={() => setIsCatalogOpen(false)}
                          >
                            {subcategory.name} <span className="text-gray-400 font-extralight">{subcategory.count}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-md">
          <div className="w-full px-6 py-8 space-y-6">
            <nav className="space-y-6">
              <button
                onClick={() => {
                  setIsCatalogOpen(!isCatalogOpen);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 font-nauryz text-xl tracking-wide transition-all duration-300 rounded-full border border-gray-200 hover:scale-105"
              >
                каталог
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;