"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function CatalogPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("По популярности");
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState("Любая цена");
  const [isFlightTimeDropdownOpen, setIsFlightTimeDropdownOpen] = useState(false);
  const [selectedFlightTime, setSelectedFlightTime] = useState("Любое время");
  const [isCameraDropdownOpen, setIsCameraDropdownOpen] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState("Любое разрешение");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list'); // Изменил на 'list' по умолчанию
  const products = [
    {
      id: 1,
      name: "DJI Mavic 3 Pro",
      price: 279990,
      originalPrice: 319990,
      image: "https://picsum.photos/400/300?random=1",
      rating: 4.9,
      reviews: 127,
      category: "professional",
      brand: "DJI",
      flightTime: 46,
      cameraResolution: "4K",
      weight: 895,
      inStock: true,
      badge: "Хит продаж"
    },
    {
      id: 2,
      name: "DJI Mini 4 Pro",
      price: 89990,
      originalPrice: null,
      image: "https://picsum.photos/400/300?random=2",
      rating: 4.8,
      reviews: 89,
      category: "hobby",
      brand: "DJI",
      flightTime: 34,
      cameraResolution: "4K",
      weight: 249,
      inStock: true,
      badge: null
    },
    {
      id: 3,
      name: "DJI Air 3",
      price: 129990,
      originalPrice: 149990,
      image: "https://picsum.photos/400/300?random=3",
      rating: 4.7,
      reviews: 156,
      category: "professional",
      brand: "DJI",
      flightTime: 46,
      cameraResolution: "4K",
      weight: 720,
      inStock: true,
      badge: "Новинка"
    },
    {
      id: 4,
      name: "Autel EVO Lite+",
      price: 119990,
      originalPrice: null,
      image: "https://picsum.photos/400/300?random=4",
      rating: 4.6,
      reviews: 43,
      category: "professional",
      brand: "Autel",
      flightTime: 40,
      cameraResolution: "6K",
      weight: 835,
      inStock: true,
      badge: null
    },
    {
      id: 5,
      name: "DJI FPV",
      price: 159990,
      originalPrice: null,
      image: "https://picsum.photos/400/300?random=5",
      rating: 4.5,
      reviews: 72,
      category: "fpv",
      brand: "DJI",
      flightTime: 20,
      cameraResolution: "4K",
      weight: 795,
      inStock: false,
      badge: "Скорость"
    },
    {
      id: 6,
      name: "DJI Inspire 3",
      price: 899990,
      originalPrice: null,
      image: "https://picsum.photos/400/300?random=6",
      rating: 4.9,
      reviews: 23,
      category: "cinema",
      brand: "DJI",
      flightTime: 28,
      cameraResolution: "8K",
      weight: 4200,
      inStock: true,
      badge: "Профи"
    },
    {
      id: 7,
      name: "DJI Mini 3",
      price: 59990,
      originalPrice: 69990,
      image: "https://picsum.photos/400/300?random=7",
      rating: 4.5,
      reviews: 234,
      category: "hobby",
      brand: "DJI",
      flightTime: 38,
      cameraResolution: "4K",
      weight: 249,
      inStock: true,
      badge: null
    },
    {
      id: 8,
      name: "Parrot ANAFI AI",
      price: 189990,
      originalPrice: null,
      image: "https://picsum.photos/400/300?random=8",
      rating: 4.3,
      reviews: 67,
      category: "professional",
      brand: "Parrot",
      flightTime: 32,
      cameraResolution: "4K",
      weight: 900,
      inStock: true,
      badge: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <a href="/" className="hover:text-gray-700">Главная</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Каталог дронов</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Фильтры</h2>
              
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Категории</h3>
                <div className="space-y-3">
                  {[
                    { key: 'all', label: 'Все дроны', count: 8 },
                    { key: 'hobby', label: 'Любительские', count: 2 },
                    { key: 'professional', label: 'Профессиональные', count: 4 },
                    { key: 'fpv', label: 'FPV/Гонки', count: 1 },
                    { key: 'cinema', label: 'Кинематограф', count: 1 }
                  ].map((category) => (
                    <label key={category.key} className="flex items-center group cursor-pointer">
                      <input type="radio" name="category" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" defaultChecked={category.key === 'all'} />
                      <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900">{category.label}</span>
                      <span className="ml-auto text-xs text-gray-400">({category.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Бренды</h3>
                <div className="space-y-3">
                  {[
                    { key: 'dji', label: 'DJI', count: 6 },
                    { key: 'autel', label: 'Autel', count: 1 },
                    { key: 'parrot', label: 'Parrot', count: 1 }
                  ].map((brand) => (
                    <label key={brand.key} className="flex items-center group cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                      <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900">{brand.label}</span>
                      <span className="ml-auto text-xs text-gray-400">({brand.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Цена</h3>
                <div className="relative">
                  <button
                    onClick={() => setIsPriceDropdownOpen(!isPriceDropdownOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <span>{selectedPriceRange}</span>
                    <svg 
                      className={`w-4 h-4 text-gray-400 transition-transform ${isPriceDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Price Dropdown */}
                  {isPriceDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
                      {[
                        { label: "Любая цена", count: null },
                        { label: "До 100 000 ₽", count: 2 },
                        { label: "100 000 - 200 000 ₽", count: 4 },
                        { label: "200 000 - 500 000 ₽", count: 1 },
                        { label: "Свыше 500 000 ₽", count: 1 }
                      ].map((price, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedPriceRange(price.label);
                            setIsPriceDropdownOpen(false);
                          }}
                          className={`w-full px-3 py-2.5 text-left text-sm hover:bg-gray-50 transition-colors ${
                            selectedPriceRange === price.label 
                              ? 'bg-blue-50 text-blue-600 font-medium' 
                              : 'text-gray-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{price.label}</span>
                            {price.count && (
                              <span className="text-xs text-gray-400">({price.count})</span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Overlay */}
                  {isPriceDropdownOpen && (
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsPriceDropdownOpen(false)}
                    ></div>
                  )}
                </div>
              </div>

              {/* Flight Time */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Время полета</h3>
                <div className="relative">
                  <button
                    onClick={() => setIsFlightTimeDropdownOpen(!isFlightTimeDropdownOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <span>{selectedFlightTime}</span>
                    <svg 
                      className={`w-4 h-4 text-gray-400 transition-transform ${isFlightTimeDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Flight Time Dropdown */}
                  {isFlightTimeDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
                      {[
                        { label: "Любое время", count: null },
                        { label: "До 30 минут", count: 3 },
                        { label: "30-40 минут", count: 3 },
                        { label: "Свыше 40 минут", count: 2 }
                      ].map((time, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedFlightTime(time.label);
                            setIsFlightTimeDropdownOpen(false);
                          }}
                          className={`w-full px-3 py-2.5 text-left text-sm hover:bg-gray-50 transition-colors ${
                            selectedFlightTime === time.label 
                              ? 'bg-blue-50 text-blue-600 font-medium' 
                              : 'text-gray-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{time.label}</span>
                            {time.count && (
                              <span className="text-xs text-gray-400">({time.count})</span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Overlay */}
                  {isFlightTimeDropdownOpen && (
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsFlightTimeDropdownOpen(false)}
                    ></div>
                  )}
                </div>
              </div>

              {/* Camera Resolution */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Разрешение камеры</h3>
                <div className="relative">
                  <button
                    onClick={() => setIsCameraDropdownOpen(!isCameraDropdownOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <span>{selectedCamera}</span>
                    <svg 
                      className={`w-4 h-4 text-gray-400 transition-transform ${isCameraDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Camera Dropdown */}
                  {isCameraDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
                      {[
                        { label: "Любое разрешение", count: null },
                        { label: "4K", count: 6 },
                        { label: "6K", count: 1 },
                        { label: "8K", count: 1 }
                      ].map((resolution, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedCamera(resolution.label);
                            setIsCameraDropdownOpen(false);
                          }}
                          className={`w-full px-3 py-2.5 text-left text-sm hover:bg-gray-50 transition-colors ${
                            selectedCamera === resolution.label 
                              ? 'bg-blue-50 text-blue-600 font-medium' 
                              : 'text-gray-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{resolution.label}</span>
                            {resolution.count && (
                              <span className="text-xs text-gray-400">({resolution.count})</span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Overlay */}
                  {isCameraDropdownOpen && (
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsCameraDropdownOpen(false)}
                    ></div>
                  )}
                </div>
              </div>

              {/* Stock Status */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Наличие</h3>
                <label className="flex items-center group cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" defaultChecked />
                  <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-900">Только в наличии</span>
                </label>
              </div>

              {/* Reset Filters */}
              <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                Сбросить фильтры
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3 mt-8 lg:mt-0">
            {/* Toolbar */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">Найдено: <span className="font-medium text-gray-900">8 товаров</span></span>
                  <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'list' 
                          ? 'text-blue-600 bg-blue-100' 
                          : 'text-gray-400 hover:text-gray-600 bg-gray-100'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'grid' 
                          ? 'text-blue-600 bg-blue-100' 
                          : 'text-gray-400 hover:text-gray-600 bg-gray-100'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {/* Custom Sort Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-w-[180px]"
                    >
                      <span className="flex-1 text-left">{selectedSort}</span>
                      <svg 
                        className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute right-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
                        {[
                          "По популярности",
                          "По цене (по возрастанию)",
                          "По цене (по убыванию)",
                          "По рейтингу",
                          "Новинки",
                          "По названию (А-Я)",
                          "По названию (Я-А)"
                        ].map((option) => (
                          <button
                            key={option}
                            onClick={() => {
                              setSelectedSort(option);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors ${
                              selectedSort === option 
                                ? 'bg-blue-50 text-blue-600 font-medium' 
                                : 'text-gray-700'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{option}</span>
                              {selectedSort === option && (
                                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Overlay to close dropdown */}
                    {isDropdownOpen && (
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setIsDropdownOpen(false)}
                      ></div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Stock Badge */}
                      {!product.inStock && (
                        <div className="absolute top-3 left-3 px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-lg">
                          Нет в наличии
                        </div>
                      )}
                      
                      {/* Product Badge */}
                      {product.badge && (
                        <div className="absolute top-3 right-3 px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-lg">
                          {product.badge}
                        </div>
                      )}

                      {/* Quick Actions */}
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex gap-2">
                          <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white transition-colors">
                            <span className="text-gray-600 text-sm">♡</span>
                          </button>
                          <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white transition-colors">
                            <span className="text-gray-600 text-sm">👁</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      {/* Brand and Rating */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500 uppercase tracking-wide">{product.brand}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400 text-sm">★</span>
                          <span className="text-sm text-gray-600">{product.rating}</span>
                          <span className="text-xs text-gray-400">({product.reviews})</span>
                        </div>
                      </div>

                      {/* Product Name */}
                      <h3 className="font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>

                      {/* Specifications */}
                      <div className="space-y-1 mb-4 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Время полета:</span>
                          <span className="font-medium">{product.flightTime} мин</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Камера:</span>
                          <span className="font-medium">{product.cameraResolution}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Вес:</span>
                          <span className="font-medium">{product.weight} г</span>
                        </div>
                      </div>

                      {/* Price and Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gray-900">
                              {product.price.toLocaleString()} ₽
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-400 line-through">
                                {product.originalPrice.toLocaleString()} ₽
                              </span>
                            )}
                          </div>
                          {product.originalPrice && (
                            <span className="text-xs text-green-600 font-medium">
                              Экономия {(product.originalPrice - product.price).toLocaleString()} ₽
                            </span>
                          )}
                        </div>
                        
                        <button 
                          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            product.inStock 
                              ? 'bg-slate-900 text-white hover:bg-slate-800' 
                              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          }`}
                          disabled={!product.inStock}
                        >
                          {product.inStock ? 'В корзину' : 'Нет в наличии'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="flex">
                      {/* Product Image */}
                      <div className="relative w-48 h-36 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        {/* Stock Badge */}
                        {!product.inStock && (
                          <div className="absolute top-2 left-2 px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-lg">
                            Нет в наличии
                          </div>
                        )}
                        
                        {/* Product Badge */}
                        {product.badge && (
                          <div className="absolute top-2 right-2 px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-lg">
                            {product.badge}
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 p-5">
                        <div className="flex justify-between h-full">
                          <div className="flex-1">
                            {/* Brand and Rating */}
                            <div className="flex items-center gap-4 mb-2">
                              <span className="text-xs text-gray-500 uppercase tracking-wide">{product.brand}</span>
                              <div className="flex items-center gap-1">
                                <span className="text-yellow-400 text-sm">★</span>
                                <span className="text-sm text-gray-600">{product.rating}</span>
                                <span className="text-xs text-gray-400">({product.reviews} отзывов)</span>
                              </div>
                            </div>

                            {/* Product Name */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                              {product.name}
                            </h3>

                            {/* Specifications */}
                            <div className="flex gap-6 text-sm text-gray-600 mb-4">
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                <span>Время полета: <span className="font-medium">{product.flightTime} мин</span></span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                <span>Камера: <span className="font-medium">{product.cameraResolution}</span></span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                                <span>Вес: <span className="font-medium">{product.weight} г</span></span>
                              </div>
                            </div>
                          </div>

                          {/* Price and Actions */}
                          <div className="flex flex-col justify-between items-end ml-6">
                            <div className="text-right mb-4">
                              <div className="flex items-center gap-2 justify-end mb-1">
                                <span className="text-2xl font-bold text-gray-900">
                                  {product.price.toLocaleString()} ₽
                                </span>
                                {product.originalPrice && (
                                  <span className="text-lg text-gray-400 line-through">
                                    {product.originalPrice.toLocaleString()} ₽
                                  </span>
                                )}
                              </div>
                              {product.originalPrice && (
                                <div className="text-sm text-green-600 font-medium">
                                  Экономия {(product.originalPrice - product.price).toLocaleString()} ₽
                                </div>
                              )}
                            </div>
                            
                            <div className="flex gap-2">
                              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="text-gray-600">♡</span>
                              </button>
                              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <span className="text-gray-600">👁</span>
                              </button>
                              <button 
                                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                                  product.inStock 
                                    ? 'bg-slate-900 text-white hover:bg-slate-800' 
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                                disabled={!product.inStock}
                              >
                                {product.inStock ? 'В корзину' : 'Нет в наличии'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="flex items-center gap-1">
                <button className="px-3 py-2 text-gray-400 hover:text-gray-600 disabled:opacity-50" disabled>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">2</button>
                <button className="px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">3</button>
                <span className="px-3 py-2 text-gray-400">...</span>
                <button className="px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">8</button>
                <button className="px-3 py-2 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}