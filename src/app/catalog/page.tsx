"use client";import React, { useState } from "react";import Header from "@/components/Header";import Footer from "@/components/Footer";import Link from "next/link";import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';import {   faHeart,   faEye,  faShoppingCart,  faStar,  faFilter,  faSort,  faList,  faTh,  faChevronLeft,  faChevronRight,  faSearch,  faSliders,  faFire,  faExclamationTriangle,  faCrown,  faBolt} from '@fortawesome/free-solid-svg-icons';export default function CatalogPage() {  const [selectedSort, setSelectedSort] = useState("популярности");  const [selectedCategory, setSelectedCategory] = useState('all');  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);  const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);  const [inStockOnly, setInStockOnly] = useState(true);  const products = [    {      id: 1,      name: "mavic 3 pro",      price: 279990,      originalPrice: 319990,      image: "https://www-cdn.djiits.com/cms/uploads/ae5d8b9987be8d5ecdeb5d502a1e887c@374*374.png",      rating: 4.9,      reviews: 127,      category: "professional",      brand: "dji",      flightTime: 46,      cameraResolution: "4k",      weight: 895,      inStock: true,      badge: "хит продаж"    },    {      id: 2,      name: "mini 4 pro",      price: 89990,      originalPrice: null,      image: "https://optim.tildacdn.com/tild3763-3863-4965-b364-323136366538/-/format/webp/eng_pl_DJI-Mini-4-Pr.png.webp",      rating: 4.8,      reviews: 89,      category: "hobby",      brand: "dji",      flightTime: 34,      cameraResolution: "4k",      weight: 249,      inStock: true,      badge: null    },    {      id: 3,      name: "air 3",      price: 129990,      originalPrice: 149990,      image: "https://static.tildacdn.com/tild3333-3231-4963-b131-633832336465/dji_mavic_3_pro.png",      rating: 4.7,      reviews: 156,      category: "professional",      brand: "dji",      flightTime: 46,      cameraResolution: "4k",      weight: 720,      inStock: true,      badge: "новинка"    },    {      id: 4,      name: "evo lite+",      price: 119990,      originalPrice: null,      image: "https://auteldronesbaltic.com/wp-content/uploads/2022/04/Lite_9_1080x.png",      rating: 4.6,      reviews: 43,      category: "professional",      brand: "autel",      flightTime: 40,      cameraResolution: "6k",      weight: 835,      inStock: true,      badge: null    },    {      id: 5,      name: "fpv",      price: 159990,      originalPrice: null,      image: "https://drones-russia.ru/upload/iblock/9b1/lggtc31z13sml4bpu8b3srwj7seqby0s.jpg",      rating: 4.5,      reviews: 72,      category: "fpv",      brand: "dji",      flightTime: 20,      cameraResolution: "4k",      weight: 795,      inStock: false,      badge: "скорость"    },    {
      id: 6,
      name: "inspire 3",
      price: 899990,
      originalPrice: null,
      image: "https://drones-russia.ru/upload/iblock/acd/hlnjht33njerh5y0cae27d6pu4drvmgr.jpg",
      rating: 4.9,
      reviews: 23,
      category: "cinema",
      brand: "dji",
      flightTime: 28,
      cameraResolution: "8k",
      weight: 4200,
      inStock: true,
      badge: "профи"
    },
    {
      id: 7,
      name: "mini 3",
      price: 59990,
      originalPrice: 69990,
      image: "https://www-cdn.djiits.com/cms/uploads/0e65b98eaee5cad6f74196e9594b99cd@374*374.png",
      rating: 4.5,
      reviews: 234,
      category: "hobby",
      brand: "dji",
      flightTime: 38,
      cameraResolution: "4k",
      weight: 249,
      inStock: true,
      badge: null
    },
    {
      id: 8,
      name: "anafi ai",
      price: 189990,
      originalPrice: null,
      image: "https://www.dronepilotacademy.co.uk/app/uploads/2022/06/Parrot-Anafi-AI-2.png",
      rating: 4.3,
      reviews: 67,
      category: "professional",
      brand: "parrot",
      flightTime: 32,
      cameraResolution: "4k",
      weight: 900,
      inStock: true,
      badge: null
    }
  ];

  const categories = [
    { key: 'all', label: 'все дроны', count: 8 },
    { key: 'hobby', label: 'любительские', count: 2 },
    { key: 'professional', label: 'профессиональные', count: 5 },
    { key: 'fpv', label: 'fpv/гонки', count: 1 },
    { key: 'cinema', label: 'кинематограф', count: 1 }
  ];

  const brands = [
    { key: 'dji', label: 'dji', count: 6 },
    { key: 'autel', label: 'autel', count: 1 },
    { key: 'parrot', label: 'parrot', count: 1 }
  ];

  const priceRanges = [];

  const sortOptions = [
    { value: 'популярности', label: 'по популярности' },
    { value: 'price-asc', label: 'по цене (по возрастанию)' },
    { value: 'price-desc', label: 'по цене (по убыванию)' },
    { value: 'рейтингу', label: 'по рейтингу' },
    { value: 'новинки', label: 'новинки' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Разделяем товары на доступные и недоступные
  const availableProducts = filteredProducts.filter(product => product.inStock);
  const outOfStockProducts = filteredProducts.filter(product => !product.inStock);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <div className="w-full px-8 lg:px-16 pb-20">
        {/* Breadcrumb */}
        <div className="py-4 pl-2">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 font-extralight tracking-wide">
            <Link href="/" className="hover:text-blue-600 transition-colors">главная</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-extralight">каталог</span>
          </nav>
        </div>

  {/* Page Title removed as requested */}

        <div className="flex flex-col lg:flex-row lg:gap-8">
          
          {/* Sidebar Filters */}
          <div className="lg:w-80 mb-8 lg:mb-0 flex-shrink-0">
            <div className="space-y-4">
              {/* Header */}
              <div className="bg-white/60 backdrop-blur-sm border border-gray-100 rounded-[2rem] px-8 py-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-nauryz text-gray-900 tracking-wide">
                    фильтры
                  </h2>
                  <button 
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedBrands([]);
                      setSelectedPriceRange([]);
                      setInStockOnly(true);
                    }}
                    className="text-gray-500 hover:text-gray-700 font-extralight text-sm px-4 py-2 hover:bg-white rounded-full border border-gray-200 transition-all duration-300 hover:border-gray-300"
                  >
                    сбросить
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white/60 backdrop-blur-sm border border-gray-100 rounded-[2rem] px-8 py-6">
                <h3 className="text-lg font-extralight text-gray-900 mb-4 tracking-wide">категории</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label key={category.key} className="cursor-pointer group block">
                      <input 
                        type="radio"
                        name="category"
                        checked={selectedCategory === category.key}
                        onChange={() => setSelectedCategory(category.key)}
                        className="hidden" 
                      />
                      <div className={`flex items-center justify-between px-4 py-3 rounded-[1.5rem] border transition-all duration-300 ${
                        selectedCategory === category.key
                          ? 'border-blue-400 bg-blue-50 text-blue-700'
                          : 'border-gray-200 bg-gray-50/50 hover:border-gray-300 hover:bg-gray-100'
                      }`}>
                        <div className="flex items-center">
                          <div className={`w-4 h-4 rounded-full border-2 mr-3 transition-all duration-300 ${
                            selectedCategory === category.key
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-300 group-hover:border-gray-400'
                          }`}>
                            {selectedCategory === category.key && (
                              <div className="w-full h-full rounded-full bg-white scale-[0.4]"></div>
                            )}
                          </div>
                          <span className={`font-extralight text-base tracking-wider ${
                            selectedCategory === category.key ? 'text-blue-700' : 'text-gray-600'
                          }`}>
                            {category.label}
                          </span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          selectedCategory === category.key 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {category.count}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="bg-white/60 backdrop-blur-sm border border-gray-100 rounded-[2rem] px-8 py-6">
                <h3 className="text-lg font-nauryz text-gray-900 mb-4 tracking-wide">цена</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <input 
                      type="number" 
                      placeholder="от"
                      className="w-full px-4 py-3 border border-gray-200 rounded-[1.5rem] text-sm focus:outline-none focus:border-blue-400 focus:bg-white bg-gray-50/50 font-extralight placeholder:text-gray-400 transition-all duration-300"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">₽</span>
                  </div>
                  <div className="relative">
                    <input 
                      type="number" 
                      placeholder="до"
                      className="w-full px-4 py-3 border border-gray-200 rounded-[1.5rem] text-sm focus:outline-none focus:border-blue-400 focus:bg-white bg-gray-50/50 font-extralight placeholder:text-gray-400 transition-all duration-300"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">₽</span>
                  </div>
                </div>
              </div>

              {/* Brands */}
              <div className="bg-white/60 backdrop-blur-sm border border-gray-100 rounded-[2rem] px-8 py-6">
                <h3 className="text-lg font-nauryz text-gray-900 mb-4 tracking-wide">бренды</h3>
                <div className="space-y-3">
                  {brands.map((brand) => (
                    <label key={brand.key} className="cursor-pointer group block">
                      <input 
                        type="checkbox" 
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBrands([...selectedBrands, brand.key]);
                          } else {
                            setSelectedBrands(selectedBrands.filter(b => b !== brand.key));
                          }
                        }}
                        className="hidden" 
                      />
                      <div className={`flex items-center justify-between px-4 py-3 rounded-[1.5rem] border transition-all duration-300 ${
                        selectedBrands.includes(brand.key)
                          ? 'border-blue-400 bg-blue-50'
                          : 'border-gray-200 bg-gray-50/50 hover:border-gray-300 hover:bg-gray-100'
                      }`}>
                        <div className="flex items-center">
                          <div className={`w-4 h-4 rounded-full border-2 mr-3 transition-all duration-300 ${
                            selectedBrands.includes(brand.key)
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-300 group-hover:border-gray-400'
                          }`}>
                            {selectedBrands.includes(brand.key) && (
                              <div className="w-full h-full rounded-full bg-white scale-[0.4]"></div>
                            )}
                          </div>
                          <span className={`font-extralight text-base uppercase tracking-wider ${
                            selectedBrands.includes(brand.key) ? 'text-blue-700' : 'text-gray-600'
                          }`}>
                            {brand.label}
                          </span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          selectedBrands.includes(brand.key) 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {brand.count}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Technical Specs */}
              <div className="bg-white/60 backdrop-blur-sm border border-gray-100 rounded-[2rem] px-8 py-6">
                <h3 className="text-lg font-nauryz text-gray-900 mb-4 tracking-wide">характеристики</h3>
                
                {/* Flight Time */}
                <div className="mb-6">
                  <label className="block text-sm font-nauryz text-gray-700 mb-3 tracking-wide">время полета (мин)</label>
                  <div className="grid grid-cols-2 gap-3">
                    <input 
                      type="number" 
                      placeholder="от"
                      className="px-3 py-2 border border-gray-200 rounded-[1.5rem] text-sm focus:outline-none focus:border-blue-400 focus:bg-white bg-gray-50/50 font-extralight placeholder:text-gray-400 transition-all duration-300"
                    />
                    <input 
                      type="number" 
                      placeholder="до"
                      className="px-3 py-2 border border-gray-200 rounded-[1.5rem] text-sm focus:outline-none focus:border-blue-400 focus:bg-white bg-gray-50/50 font-extralight placeholder:text-gray-400 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Camera Resolution */}
                <div className="mb-6">
                  <label className="block text-sm font-nauryz text-gray-700 mb-3 tracking-wide">камера</label>
                  <div className="flex gap-2">
                    {['4K', '6K', '8K'].map((resolution) => (
                      <label key={resolution} className="cursor-pointer flex-1">
                        <input type="checkbox" className="hidden" />
                        <div className="px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-[1.5rem] text-xs text-gray-600 hover:bg-gray-100 hover:border-gray-300 hover:text-blue-600 transition-all duration-300 font-extralight text-center tracking-wide">
                          {resolution}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Weight */}
                <div className="mb-4">
                  <label className="block text-sm font-nauryz text-gray-700 mb-3 tracking-wide">вес</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: '< 250г', value: 'under-250' },
                      { label: '250-500г', value: '250-500' },
                      { label: '500г-1кг', value: '500-1000' },
                      { label: '> 1кг', value: 'over-1000' }
                    ].map((weight) => (
                      <label key={weight.value} className="cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-[1.5rem] text-xs text-gray-600 hover:bg-gray-100 hover:border-gray-300 hover:text-blue-600 transition-all duration-300 font-extralight text-center tracking-wide">
                          {weight.label}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Filters */}
              <div className="bg-white/60 backdrop-blur-sm border border-gray-100 rounded-[2rem] px-8 py-6">
                <h3 className="text-lg font-nauryz text-gray-900 mb-4 tracking-wide">дополнительно</h3>
                <div className="space-y-3">
                  <label className="cursor-pointer group block">
                    <input 
                      type="checkbox" 
                      checked={inStockOnly}
                      onChange={(e) => setInStockOnly(e.target.checked)}
                      className="hidden"
                    />
                    <div className={`flex items-center px-4 py-3 rounded-[1.5rem] border transition-all duration-300 ${
                      inStockOnly
                        ? 'border-blue-400 bg-blue-50'
                        : 'border-gray-200 bg-gray-50/50 hover:border-gray-300 hover:bg-gray-100'
                    }`}>
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 transition-all duration-300 ${
                        inStockOnly
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300 group-hover:border-gray-400'
                      }`}>
                        {inStockOnly && (
                          <div className="w-full h-full rounded-full bg-white scale-[0.4]"></div>
                        )}
                      </div>
                      <span className={`font-extralight text-sm tracking-wide ${
                        inStockOnly ? 'text-blue-700' : 'text-gray-600'
                      }`}>
                        только в наличии
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-[2rem] px-8 py-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <span className="text-base font-extralight text-gray-600 tracking-wide">
                  найдено: <span className="text-gray-900 font-nauryz">{filteredProducts.length} товаров</span>
                </span>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 rounded-[1.5rem] transition-all duration-300 flex items-center space-x-2 border ${
                      viewMode === 'grid' 
                        ? 'bg-white text-blue-600 border-blue-600' 
                        : 'bg-white text-gray-600 hover:text-blue-600 border-gray-200 hover:border-blue-600'
                    }`}
                  >
                    <FontAwesomeIcon icon={faTh} className="w-3 h-3" />
                    <span className="text-xs font-extralight tracking-wide">сетка</span>
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 rounded-[1.5rem] transition-all duration-300 flex items-center space-x-2 border ${
                      viewMode === 'list' 
                        ? 'bg-white text-blue-600 border-blue-600' 
                        : 'bg-white text-gray-600 hover:text-blue-600 border-gray-200 hover:border-blue-600'
                    }`}
                  >
                    <FontAwesomeIcon icon={faList} className="w-3 h-3" />
                    <span className="text-xs font-extralight tracking-wide">список</span>
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-sm font-extralight text-gray-500 tracking-wide">сортировка:</span>
                <select 
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="px-4 py-2 bg-gray-50/50 border border-gray-200 rounded-[1.5rem] font-extralight text-sm tracking-wide text-gray-700 focus:outline-none focus:border-blue-400 focus:bg-white hover:border-gray-300 transition-all duration-300"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products Grid/List */}
            {viewMode === 'grid' ? (
              <div className="space-y-8">
                {/* Available Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-6">
                  {availableProducts.map((product) => (
                    <div key={product.id} className="group bg-white/80 backdrop-blur-sm border border-gray-100 rounded-[2rem] p-6 transition-all duration-300">
                      <div className="relative">
                        <Link href={`/product/${product.id}`} className="block">
                          <div className="aspect-square bg-white/60 rounded-[1.5rem] p-4 mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </Link>
                        {/* Remove from wishlist button (icon only, no action here) */}
                        <button
                          className="absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-[1rem] flex items-center justify-center text-red-400 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
                          tabIndex={-1}
                        >
                          <FontAwesomeIcon icon={faHeart} className="w-4 h-4" />
                        </button>
                        {product.badge && (
                          <div className={`absolute top-3 left-3 px-2 py-1 bg-white text-xs font-nauryz rounded-full flex items-center space-x-1 border ${
                            product.badge === 'хит продаж' ? 'text-blue-600 border-blue-600' :
                            product.badge === 'новинка' ? 'text-green-600 border-green-600' :
                            product.badge === 'профи' ? 'text-purple-600 border-purple-600' :
                            product.badge === 'скорость' ? 'text-orange-600 border-orange-600' :
                            'text-blue-600 border-blue-600'
                          }`}>
                            <FontAwesomeIcon icon={
                              product.badge === 'хит продаж' ? faFire :
                              product.badge === 'новинка' ? faStar :
                              product.badge === 'профи' ? faCrown :
                              product.badge === 'скорость' ? faBolt :
                              faStar
                            } className="w-3 h-3" />
                            <span>{product.badge}</span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-3 mt-2">
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-[1rem] text-xs font-nauryz tracking-wider uppercase">{product.brand}</span>
                          <div className="flex items-center space-x-1">
                            <FontAwesomeIcon icon={faStar} className="w-3 h-3 text-yellow-400" />
                            <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                          </div>
                        </div>
                        <Link href={`/product/${product.id}`}>
                          <h3 className="text-lg font-nauryz text-gray-900 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                            {product.name}
                          </h3>
                        </Link>
                        <div className="flex items-center justify-between text-xs text-gray-500 font-extralight mb-4">
                          <span className="font-nauryz">{product.flightTime}мин</span>
                          <span className="font-nauryz">{product.cameraResolution}</span>
                          <span className="font-nauryz">{product.weight}г</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-nauryz text-gray-900">
                            {product.price.toLocaleString()} ₽
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through font-extralight">
                              {product.originalPrice.toLocaleString()} ₽
                            </span>
                          )}
                        </div>
                        <button
                          className="w-full py-3 rounded-[1.5rem] font-nauryz text-base transition-all duration-300 flex items-center justify-center space-x-2 bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 hover:scale-[1.02]"
                        >
                          <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4 mr-2" />
                          <span>в корзину</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Separator for Out of Stock Products */}
                {outOfStockProducts.length > 0 && (
                  <>
                    <div className="flex items-center justify-center py-8">
                      <div className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-[2rem] px-8 py-4">
                        <div className="w-16 h-px bg-gray-300"></div>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4" />
                          <span className="text-sm font-extralight tracking-wide">нет в наличии</span>
                        </div>
                        <div className="w-16 h-px bg-gray-300"></div>
                      </div>
                    </div>

                    {/* Out of Stock Products */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-6 opacity-60">
                      {outOfStockProducts.map((product) => (
                        <Link key={product.id} href={`/product/${product.id}`} className="group bg-white/40 backdrop-blur-sm border border-gray-100 rounded-[2rem] overflow-hidden block">
                          <div className="relative overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-48 object-cover grayscale"
                            />
                            
                            {/* Out of Stock Badge */}
                            <div className="absolute top-3 left-3 px-2 py-1 bg-white text-red-600 border border-red-600 text-xs font-extralight rounded-full flex items-center space-x-1">
                              <FontAwesomeIcon icon={faExclamationTriangle} className="w-2.5 h-2.5" />
                              <span>нет в наличии</span>
                            </div>
                            
                            {product.badge && (
                              <div className={`absolute top-3 right-3 px-2 py-1 bg-white text-xs font-extralight rounded-full flex items-center space-x-1 border opacity-50 ${
                                product.badge === 'хит продаж' ? 'text-blue-600 border-blue-600' :
                                product.badge === 'новинка' ? 'text-green-600 border-green-600' :
                                product.badge === 'профи' ? 'text-purple-600 border-purple-600' :
                                product.badge === 'скорость' ? 'text-orange-600 border-orange-600' :
                                'text-blue-600 border-blue-600'
                              }`}>
                                <FontAwesomeIcon icon={
                                  product.badge === 'хит продаж' ? faFire :
                                  product.badge === 'новинка' ? faStar :
                                  product.badge === 'профи' ? faCrown :
                                  product.badge === 'скорость' ? faBolt :
                                  faStar
                                } className="w-2.5 h-2.5" />
                                <span>{product.badge}</span>
                              </div>
                            )}
                          </div>

                          <div className="p-5">
                            {/* Brand and Rating */}
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs text-gray-400 font-extralight tracking-wider uppercase">{product.brand}</span>
                              <div className="flex items-center space-x-1">
                                <FontAwesomeIcon icon={faStar} className="w-3 h-3 text-gray-300" />
                                <span className="text-xs text-gray-400 font-extralight">{product.rating}</span>
                              </div>
                            </div>

                            {/* Product Name */}
                            <h3 className="text-base font-nauryz text-gray-500 mb-4 tracking-wide leading-tight line-clamp-2">
                              {product.name}
                            </h3>

                            {/* Key Specs */}
                            <div className="flex justify-between text-xs text-gray-400 font-extralight mb-4">
                              <span>{product.flightTime}мин</span>
                              <span>{product.cameraResolution}</span>
                              <span>{product.weight}г</span>
                            </div>

                            {/* Price */}
                            <div className="mb-4">
                              <div className="flex items-center space-x-2">
                                <span className="text-lg font-nauryz text-gray-500 tracking-wide">
                                  {product.price.toLocaleString()} ₽
                                </span>
                                {product.originalPrice && (
                                  <span className="text-sm text-gray-400 line-through font-extralight">
                                    {product.originalPrice.toLocaleString()} ₽
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            <button 
                              className="w-full py-2.5 rounded-[1.5rem] font-extralight text-sm tracking-wide transition-all duration-300 border bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                              disabled
                            >
                              <FontAwesomeIcon icon={faExclamationTriangle} className="w-3 h-3 mr-2" />
                              нет в наличии
                            </button>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              /* List View */
              <div className="space-y-8">
                {/* Available Products */}
                <div className="space-y-6">
                  {availableProducts.map((product) => (
                    <Link key={product.id} href={`/product/${product.id}`} className="group bg-white/60 backdrop-blur-sm border border-gray-100 rounded-[2rem] overflow-hidden hover:bg-white hover:shadow-xl hover:shadow-gray-200/30 transition-all duration-300 block">
                      <div className="flex flex-col lg:flex-row">
                        {/* Product Image */}
                        <div className="relative w-full lg:w-72 h-48 lg:h-auto flex-shrink-0 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          
                          {product.badge && (
                            <div className={`absolute top-3 right-3 px-2 py-1 bg-white text-xs font-extralight rounded-full flex items-center space-x-1 border ${
                              product.badge === 'хит продаж' ? 'text-blue-600 border-blue-600' :
                              product.badge === 'новинка' ? 'text-green-600 border-green-600' :
                              product.badge === 'профи' ? 'text-purple-600 border-purple-600' :
                              product.badge === 'скорость' ? 'text-orange-600 border-orange-600' :
                              'text-blue-600 border-blue-600'
                            }`}>
                              <FontAwesomeIcon icon={
                                product.badge === 'хит продаж' ? faFire :
                                product.badge === 'новинка' ? faStar :
                                product.badge === 'профи' ? faCrown :
                                product.badge === 'скорость' ? faBolt :
                                faStar
                              } className="w-2.5 h-2.5" />
                              <span>{product.badge}</span>
                            </div>
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 p-6">
                          <div className="flex flex-col lg:flex-row lg:justify-between h-full">
                            <div className="flex-1 mb-6 lg:mb-0 lg:pr-6">
                              {/* Brand and Rating */}
                              <div className="flex items-center space-x-6 mb-3">
                                <span className="text-xs text-gray-500 font-extralight tracking-wider uppercase">{product.brand}</span>
                                <div className="flex items-center space-x-1">
                                  <FontAwesomeIcon icon={faStar} className="w-3 h-3 text-yellow-400" />
                                  <span className="text-xs text-gray-600 font-extralight">{product.rating}</span>
                                  <span className="text-xs text-gray-400 font-extralight">({product.reviews} отзывов)</span>
                                </div>
                              </div>

                              {/* Product Name */}
                              <h3 className="text-xl font-nauryz text-gray-900 mb-4 tracking-wide group-hover:text-blue-600 transition-colors duration-300">
                                {product.name}
                              </h3>

                              {/* Specifications */}
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600 font-extralight">
                                <div className="flex items-center space-x-2">
                                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                  <span>время полета: <span className="text-gray-900 font-light">{product.flightTime} мин</span></span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                  <span>камера: <span className="text-gray-900 font-light">{product.cameraResolution}</span></span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                                  <span>вес: <span className="text-gray-900 font-light">{product.weight} г</span></span>
                                </div>
                              </div>
                            </div>

                            {/* Price and Actions */}
                            <div className="flex flex-col justify-between items-start lg:items-end">
                              <div className="text-left lg:text-right mb-4">
                                <div className="flex items-center space-x-2 lg:justify-end mb-1">
                                  <span className="text-2xl font-nauryz text-gray-900 tracking-wide">
                                    {product.price.toLocaleString()} ₽
                                  </span>
                                  {product.originalPrice && (
                                    <span className="text-lg text-gray-400 line-through font-extralight">
                                      {product.originalPrice.toLocaleString()} ₽
                                    </span>
                                  )}
                                </div>
                                {product.originalPrice && (
                                  <div className="text-sm text-green-600 font-extralight">
                                    экономия {(product.originalPrice - product.price).toLocaleString()} ₽
                                  </div>
                                )}
                              </div>
                              
                              <div className="flex space-x-3 w-full lg:w-auto">
                                <button className="p-3 border border-gray-200 rounded-[1.5rem] hover:bg-gray-50 hover:scale-110 transition-all duration-300">
                                  <FontAwesomeIcon icon={faHeart} className="w-4 h-4 text-gray-600" />
                                </button>
                                <button className="p-3 border border-gray-200 rounded-[1.5rem] hover:bg-gray-50 hover:scale-110 transition-all duration-300">
                                  <FontAwesomeIcon icon={faEye} className="w-4 h-4 text-gray-600" />
                                </button>
                                <button className="flex-1 lg:flex-none px-6 py-3 rounded-[1.5rem] font-nauryz text-sm tracking-wide transition-all duration-300 border bg-white text-blue-600 border-blue-600 hover:bg-blue-50 hover:scale-[1.02]">
                                  <FontAwesomeIcon icon={faShoppingCart} className="w-3 h-3 mr-2" />
                                  в корзину
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Separator for Out of Stock Products */}
                {outOfStockProducts.length > 0 && (
                  <>
                    <div className="flex items-center justify-center py-8">
                      <div className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-[2rem] px-8 py-4">
                        <div className="w-16 h-px bg-gray-300"></div>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4" />
                          <span className="text-sm font-extralight tracking-wide">нет в наличии</span>
                        </div>
                        <div className="w-16 h-px bg-gray-300"></div>
                      </div>
                    </div>

                    {/* Out of Stock Products */}
                    <div className="space-y-6 opacity-60">
                      {outOfStockProducts.map((product) => (
                        <Link key={product.id} href={`/product/${product.id}`} className="group bg-white/40 backdrop-blur-sm border border-gray-100 rounded-[2rem] overflow-hidden block">
                          <div className="flex flex-col lg:flex-row">
                            {/* Product Image */}
                            <div className="relative w-full lg:w-72 h-48 lg:h-auto flex-shrink-0 overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover grayscale"
                              />
                              
                              {/* Out of Stock Badge */}
                              <div className="absolute top-3 left-3 px-2 py-1 bg-white text-red-600 border border-red-600 text-xs font-extralight rounded-full flex items-center space-x-1">
                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-2.5 h-2.5" />
                                <span>нет в наличии</span>
                              </div>
                              
                              {product.badge && (
                                <div className={`absolute top-3 right-3 px-2 py-1 bg-white text-xs font-extralight rounded-full flex items-center space-x-1 border opacity-50 ${
                                  product.badge === 'хит продаж' ? 'text-blue-600 border-blue-600' :
                                  product.badge === 'новинка' ? 'text-green-600 border-green-600' :
                                  product.badge === 'профи' ? 'text-purple-600 border-purple-600' :
                                  product.badge === 'скорость' ? 'text-orange-600 border-orange-600' :
                                  'text-blue-600 border-blue-600'
                                }`}>
                                  <FontAwesomeIcon icon={
                                    product.badge === 'хит продаж' ? faFire :
                                    product.badge === 'новинка' ? faStar :
                                    product.badge === 'профи' ? faCrown :
                                    product.badge === 'скорость' ? faBolt :
                                    faStar
                                  } className="w-2.5 h-2.5" />
                                  <span>{product.badge}</span>
                                </div>
                              )}
                            </div>

                            {/* Product Info */}
                            <div className="flex-1 p-6">
                              <div className="flex flex-col lg:flex-row lg:justify-between h-full">
                                <div className="flex-1 mb-6 lg:mb-0 lg:pr-6">
                                  {/* Brand and Rating */}
                                  <div className="flex items-center space-x-6 mb-3">
                                    <span className="text-xs text-gray-400 font-extralight tracking-wider uppercase">{product.brand}</span>
                                    <div className="flex items-center space-x-1">
                                      <FontAwesomeIcon icon={faStar} className="w-3 h-3 text-gray-300" />
                                      <span className="text-xs text-gray-400 font-extralight">{product.rating}</span>
                                      <span className="text-xs text-gray-400 font-extralight">({product.reviews} отзывов)</span>
                                    </div>
                                  </div>

                                  {/* Product Name */}
                                  <h3 className="text-xl font-nauryz text-gray-500 mb-4 tracking-wide">
                                    {product.name}
                                  </h3>

                                  {/* Specifications */}
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-400 font-extralight">
                                    <div className="flex items-center space-x-2">
                                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                      <span>время полета: <span className="text-gray-500 font-light">{product.flightTime} мин</span></span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                      <span>камера: <span className="text-gray-500 font-light">{product.cameraResolution}</span></span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                      <span>вес: <span className="text-gray-500 font-light">{product.weight} г</span></span>
                                    </div>
                                  </div>
                                </div>

                                {/* Price and Actions */}
                                <div className="flex flex-col justify-between items-start lg:items-end">
                                  <div className="text-left lg:text-right mb-4">
                                    <div className="flex items-center space-x-2 lg:justify-end mb-1">
                                      <span className="text-2xl font-nauryz text-gray-500 tracking-wide">
                                        {product.price.toLocaleString()} ₽
                                      </span>
                                      {product.originalPrice && (
                                        <span className="text-lg text-gray-400 line-through font-extralight">
                                          {product.originalPrice.toLocaleString()} ₽
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  
                                  <div className="flex space-x-3 w-full lg:w-auto">
                                    <button className="p-3 border border-gray-200 rounded-[1.5rem] cursor-not-allowed opacity-50">
                                      <FontAwesomeIcon icon={faHeart} className="w-4 h-4 text-gray-400" />
                                    </button>
                                    <button className="p-3 border border-gray-200 rounded-[1.5rem] cursor-not-allowed opacity-50">
                                      <FontAwesomeIcon icon={faEye} className="w-4 h-4 text-gray-400" />
                                    </button>
                                    <button 
                                      className="flex-1 lg:flex-none px-6 py-3 rounded-[1.5rem] font-nauryz text-sm tracking-wide transition-all duration-300 border bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                                      disabled
                                    >
                                      <FontAwesomeIcon icon={faExclamationTriangle} className="w-3 h-3 mr-2" />
                                      нет в наличии
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-20">
              <nav className="bg-white/60 backdrop-blur-sm border border-gray-100 rounded-[2rem] p-6">
                <div className="flex items-center space-x-3">
                  <button className="p-3 text-gray-400 hover:text-blue-600 disabled:opacity-50 disabled:hover:text-gray-400 rounded-[1.5rem] border border-gray-200 bg-white hover:border-blue-600 hover:scale-105 transition-all duration-300" disabled>
                    <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-3 bg-white text-blue-600 border border-blue-600 rounded-[1.5rem] font-nauryz text-sm tracking-wide hover:bg-blue-50 hover:scale-105 transition-all duration-300 min-w-[3rem]">1</button>
                  <button className="px-4 py-3 text-gray-600 hover:text-blue-600 bg-white border border-gray-200 hover:border-blue-600 rounded-[1.5rem] font-nauryz text-sm tracking-wide hover:scale-105 transition-all duration-300 min-w-[3rem]">2</button>
                  <button className="px-4 py-3 text-gray-600 hover:text-blue-600 bg-white border border-gray-200 hover:border-blue-600 rounded-[1.5rem] font-nauryz text-sm tracking-wide hover:scale-105 transition-all duration-300 min-w-[3rem]">3</button>
                  <span className="px-3 py-3 text-gray-400 font-extralight text-sm">...</span>
                  <button className="px-4 py-3 text-gray-600 hover:text-blue-600 bg-white border border-gray-200 hover:border-blue-600 rounded-[1.5rem] font-nauryz text-sm tracking-wide hover:scale-105 transition-all duration-300 min-w-[3rem]">8</button>
                  <button className="p-3 text-gray-600 hover:text-blue-600 rounded-[1.5rem] border border-gray-200 bg-white hover:border-blue-600 hover:scale-105 transition-all duration-300">
                    <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
