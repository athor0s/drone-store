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

const Header = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const catalogCategories = [
    {
      id: 'drones',
      name: 'Квадрокоптеры',
      icon: faPlane,
      subcategories: [
        { name: 'Профессиональные дроны', count: 45 },
        { name: 'Любительские квадрокоптеры', count: 67 },
        { name: 'Мини-дроны', count: 23 },
        { name: 'Гоночные дроны', count: 34 },
        { name: 'Дроны с 4K камерой', count: 28 },
        { name: 'Промышленные дроны', count: 15 }
      ]
    },
    {
      id: 'accessories',
      name: 'Аксессуары',
      icon: faCog,
      subcategories: [
        { name: 'Пропеллеры', count: 89 },
        { name: 'Защита пропеллеров', count: 34 },
        { name: 'Чехлы и кейсы', count: 45 },
        { name: 'Крепления', count: 67 },
        { name: 'Светодиодная подсветка', count: 23 },
        { name: 'Запчасти', count: 156 }
      ]
    },
    {
      id: 'batteries',
      name: 'Батареи и питание',
      icon: faBattery,
      subcategories: [
        { name: 'LiPo батареи', count: 78 },
        { name: 'Зарядные устройства', count: 34 },
        { name: 'Батарейные банки', count: 23 },
        { name: 'USB кабели', count: 45 },
        { name: 'Адаптеры питания', count: 28 },
        { name: 'Балансировочные зарядки', count: 19 }
      ]
    },
    {
      id: 'cameras',
      name: 'Камеры и подвесы',
      icon: faVideo,
      subcategories: [
        { name: 'Экшн-камеры', count: 45 },
        { name: 'Гимбалы', count: 28 },
        { name: 'FPV камеры', count: 34 },
        { name: 'Стабилизаторы', count: 23 },
        { name: 'Объективы', count: 15 },
        { name: 'Фильтры для камер', count: 37 }
      ]
    },
    {
      id: 'fpv',
      name: 'FPV оборудование',
      icon: faGamepad,
      subcategories: [
        { name: 'FPV очки', count: 23 },
        { name: 'Передатчики видео', count: 34 },
        { name: 'Приемники', count: 45 },
        { name: 'Антенны', count: 67 },
        { name: 'Мониторы', count: 19 },
        { name: 'Симуляторы', count: 12 }
      ]
    },
    {
      id: 'education',
      name: 'Обучение и курсы',
      icon: faGraduationCap,
      subcategories: [
        { name: 'Курсы пилотирования', count: 8 },
        { name: 'Книги и руководства', count: 15 },
        { name: 'Онлайн-курсы', count: 12 },
        { name: 'Сертификация', count: 6 },
        { name: 'Практические занятия', count: 10 },
        { name: 'Групповые курсы', count: 4 }
      ]
    }
  ];

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-light tracking-tight text-gray-900 hover:text-blue-600 transition-colors">
                Drone<span className="font-medium">Store</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              <button
                onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                <FontAwesomeIcon icon={faList} className="w-4 h-4" />
                <span>Каталог</span>
              </button>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                О нас
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Контакты
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faSearch} className="w-4 h-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Найти дрон мечты..."
                  className="w-full pl-12 pr-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-6">
              <button className="relative text-gray-700 hover:text-gray-900 transition-colors p-2">
                <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
              
              <button className="relative text-gray-700 hover:text-gray-900 transition-colors p-2">
                <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </button>
              
              <button className="text-gray-700 hover:text-gray-900 transition-colors p-2">
                <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
              </button>
                            
              {/* Mobile menu button */}
              <button 
                className="lg:hidden text-gray-700 hover:text-gray-900 transition-colors p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="w-4 h-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Найти дрон мечты..."
                className="w-full pl-12 pr-4 py-3 bg-white text-gray-900 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 placeholder-gray-400"
              />
            </div>
            <nav className="space-y-3">
              <button
                onClick={() => {
                  setIsCatalogOpen(!isCatalogOpen);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium py-2"
              >
                <FontAwesomeIcon icon={faList} className="w-4 h-4" />
                <span>Каталог</span>
              </button>
              <Link 
                href="/about" 
                className="block text-gray-700 hover:text-gray-900 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                О нас
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-700 hover:text-gray-900 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Контакты
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Catalog Dropdown */}
      {isCatalogOpen && (
        <div className="fixed inset-0 z-40 bg-black/20" onClick={() => setIsCatalogOpen(false)}>
          <div 
            className="absolute top-20 left-0 right-0 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-6xl mx-auto p-12">
              <div className="mb-8">
                <h2 className="text-2xl font-light text-center text-gray-900">Каталог</h2>
              </div>
              
              <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-16">
                  {catalogCategories.map((category) => (
                    <div key={category.id} className="group">
                      <Link
                        href={`/catalog/${category.id}`}
                        className="block text-center"
                        onClick={() => setIsCatalogOpen(false)}
                      >
                        <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                          <FontAwesomeIcon
                            icon={category.icon}
                            className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors duration-300"
                          />
                        </div>
                        <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          {category.name}
                        </h3>
                      </Link>
                      
                      <div className="mt-4 space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {category.subcategories.slice(0, 4).map((subcategory, index) => (
                          <Link
                            key={index}
                            href={`/catalog/${category.id}/${subcategory.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block text-xs text-gray-500 hover:text-blue-600 transition-colors text-center"
                            onClick={() => setIsCatalogOpen(false)}
                          >
                            {subcategory.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex justify-center space-x-12">
                  <Link
                    href="/services"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsCatalogOpen(false)}
                  >
                    Сервис и ремонт
                  </Link>
                  <Link
                    href="/education"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsCatalogOpen(false)}
                  >
                    Обучение
                  </Link>
                  <Link
                    href="/reviews"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsCatalogOpen(false)}
                  >
                    Обзоры и тесты
                  </Link>
                  <Link
                    href="/support"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsCatalogOpen(false)}
                  >
                    Поддержка 24/7
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;