"use client";

import { useCart } from '@/contexts/CartContext';
import React, { useState, use } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faShoppingCart,
  faStar,
  faStarHalfAlt,
  faCamera,
  faClock,
  faWeight,
  faArrowLeft,
  faShare,
  faPlus,
  faMinus,
  faShield,
  faRotateLeft,
  faTruck,
  faHeadphones,
  faChevronLeft,
  faChevronRight,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

// Данные товаров (в реальном приложении это будет API)
const products = [
  {
    id: 1,
    name: "mavic 3 pro",
    price: 279990,
    originalPrice: 319990,
    images: [
      "https://www-cdn.djiits.com/cms/uploads/ae5d8b9987be8d5ecdeb5d502a1e887c@374*374.png",
      "https://static.tildacdn.com/tild3333-3231-4963-b131-633832336465/dji_mavic_3_pro.png",
      "https://drones-russia.ru/upload/iblock/9b1/lggtc31z13sml4bpu8b3srwj7seqby0s.jpg"
    ],
    rating: 4.9,
    reviews: 127,
    category: "professional",
    brand: "dji",
    flightTime: 46,
    cameraResolution: "4k",
    weight: 895,
    inStock: true,
    badge: "хит продаж",
    description: "Революционный профессиональный дрон с тройной камерой и временем полета до 46 минут. Идеально подходит для съемки в 4K и профессиональной фотографии.",
    features: [
      "Тройная камера с разрешением 4K",
      "Время полета до 46 минут", 
      "Дальность передачи до 15 км",
      "Система избежания препятствий",
      "Профессиональные режимы съемки",
      "Складная конструкция"
    ],
    specifications: {
      "Вес": "895 г",
      "Время полета": "46 мин",
      "Камера": "4K/120fps",
      "Дальность": "15 км",
      "Скорость": "19 м/с",
      "Температура": "-10°C до +40°C"
    }
  }
];

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isSpecsExpanded, setIsSpecsExpanded] = useState(false);
  const [imageTransition, setImageTransition] = useState(false);
  
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  
  const product = products.find(p => p.id === parseInt(resolvedParams.id));
  
  if (!product) {
    return <div>Товар не найден</div>;
  }

  const productInWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleWishlistToggle = () => {
    if (productInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleImageChange = (newIndex: number) => {
    if (newIndex !== selectedImageIndex) {
      setImageTransition(true);
      setTimeout(() => {
        setSelectedImageIndex(newIndex);
        setImageTransition(false);
      }, 150);
    }
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 text-yellow-400" />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon key="half" icon={faStarHalfAlt} className="w-4 h-4 text-yellow-400" />
      );
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="w-4 h-4 text-gray-300" />
      );
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pb-20">
        {/* Breadcrumb */}
        <div className="py-4 pl-2">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 font-extralight tracking-wide">
            <Link href="/" className="hover:text-blue-600 transition-colors">главная</Link>
            <span className="text-gray-300">/</span>
            <Link href="/catalog" className="hover:text-blue-600 transition-colors">каталог</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-extralight">{product.name}</span>
          </nav>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Product Gallery */}
          <div className="lg:col-span-6 lg:pl-2">
            <div className="sticky top-8">
              <div className="flex gap-4">
                {/* Thumbnail Gallery - Left Side */}
                {product.images.length > 1 && (
                  <div className="flex flex-col space-y-3">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onMouseEnter={() => handleImageChange(index)}
                        className={`w-20 h-20 rounded-[1.2rem] overflow-hidden border-2 transition-all duration-500 ease-out flex-shrink-0 ${
                          selectedImageIndex === index 
                            ? 'border-blue-400 scale-110 shadow-lg' 
                            : 'border-gray-200 hover:border-blue-300 hover:scale-110 hover:shadow-md'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain p-1 bg-white transition-transform duration-500 ease-out"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Main Product Image */}
                <div className="relative bg-white/60 backdrop-blur-sm border border-gray-100 rounded-[2rem] p-6 overflow-hidden group flex-1">
                  <div className="aspect-square relative">
                    <Image
                      src={product.images[selectedImageIndex]}
                      alt={product.name}
                      fill
                      className={`object-contain group-hover:scale-105 transition-all duration-500 ${
                        imageTransition ? 'opacity-0' : 'opacity-100'
                      }`}
                      style={{
                        transition: 'opacity 300ms ease-in-out, transform 500ms ease-in-out'
                      }}
                    />
                  </div>
                  
                  {/* Floating Badges */}
                  <div className="absolute top-3 left-3 flex flex-col space-y-2">
                    {product.badge && (
                      <div className="bg-white border border-red-200 text-red-600 px-3 py-1 rounded-full text-xs font-extralight tracking-wide">
                        {product.badge}
                      </div>
                    )}
                    {discount > 0 && (
                      <div className="bg-white border border-green-200 text-green-600 px-3 py-1 rounded-full text-xs font-extralight tracking-wide">
                        -{discount}%
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-6">
            <div className="space-y-6">
              {/* Brand & Wishlist */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-100 text-gray-700 rounded-[1.5rem] text-sm font-extralight tracking-wider uppercase">
                    {product.brand}
                  </span>
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                    <span className="ml-2 text-base font-extralight text-gray-700">{product.rating}</span>
                    <span className="text-gray-400 text-sm font-extralight">({product.reviews})</span>
                  </div>
                </div>
                <button
                  onClick={handleWishlistToggle}
                  className={`w-12 h-12 rounded-[1.5rem] border flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    productInWishlist 
                      ? 'border-red-300 bg-red-50 text-red-500' 
                      : 'border-gray-200 bg-white/60 backdrop-blur-sm text-gray-400 hover:text-red-500'
                  }`}
                >
                  <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                </button>
              </div>
              
              {/* Product Title */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-nauryz text-gray-900 mb-4 tracking-wide leading-tight">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600 font-extralight leading-relaxed tracking-wide">
                  {product.description}
                </p>
              </div>

              {/* Price Section */}
              <div className="bg-white/60 backdrop-blur-sm border border-gray-100 rounded-[2rem] p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl font-nauryz text-gray-900 tracking-wide">
                    {product.price.toLocaleString()} ₽
                  </span>
                  {product.originalPrice && (
                    <div className="flex flex-col">
                      <span className="text-xl text-gray-400 line-through font-extralight">
                        {product.originalPrice.toLocaleString()} ₽
                      </span>
                      <span className="text-sm text-green-600 font-extralight">
                        экономия {(product.originalPrice - product.price).toLocaleString()} ₽
                      </span>
                    </div>
                  )}
                </div>

                {/* Quantity and Stock */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white border border-gray-200 rounded-[1.5rem] p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-extralight text-gray-700 tracking-wide">количество</span>
                      <div className="flex items-center bg-gray-50 rounded-[1rem]">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <FontAwesomeIcon icon={faMinus} className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 font-extralight text-base min-w-[2rem] text-center">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <FontAwesomeIcon icon={faPlus} className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-[1.5rem] p-3 flex items-center justify-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-extralight text-gray-700 tracking-wide">в наличии</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={handleAddToCart}
                  className="w-full py-3 rounded-[1.5rem] font-nauryz text-base tracking-wide transition-all duration-300 border bg-white text-blue-600 border-blue-600 hover:bg-blue-50 hover:scale-[1.02]"
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4 mr-2" />
                  добавить в корзину
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="bg-white/60 backdrop-blur-sm border border-gray-100 rounded-[2rem] p-8 mt-12 relative">
          <div className="flex items-center mb-6">
            <div className="flex items-center">
              <h2 className="text-2xl font-nauryz text-gray-900 tracking-wide">Характеристики</h2>
              <div className="ml-4 text-gray-400">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.5-4.5V7.5h-1v4h1zm0-5.5V5.5h-1V6h1z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Заводские данные */}
          <div className="mb-8">
            <h3 className="text-lg font-nauryz text-gray-800 mb-4">Заводские данные</h3>
            <div className="space-y-0">
              <div className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                <span className="font-extralight text-gray-600 tracking-wide">Гарантия продавца / производителя</span>
                <span className="font-extralight text-gray-900">12 мес.</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                <span className="font-extralight text-gray-600 tracking-wide">Страна-производитель</span>
                <span className="font-extralight text-gray-900">Китай</span>
              </div>
            </div>
          </div>

          {/* Общие параметры */}
          <div className={`mb-8 ${!isSpecsExpanded ? 'relative' : ''}`}>
            <h3 className="text-lg font-nauryz text-gray-800 mb-4">Общие параметры</h3>
            <div className="space-y-0">
              <div className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                <span className="font-extralight text-gray-600 tracking-wide">Тип</span>
                <span className="font-extralight text-gray-900">квадрокоптер</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                <span className="font-extralight text-gray-600 tracking-wide">Модель</span>
                <span className="font-extralight text-gray-900">Mavic 3 Pro</span>
              </div>
              {isSpecsExpanded && (
                <>
                  <div className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-extralight text-gray-600 tracking-wide">Основной цвет</span>
                    <span className="font-extralight text-gray-900">серый</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-extralight text-gray-600 tracking-wide">Входит в реестр российской промышленности</span>
                    <span className="font-extralight text-gray-900">нет</span>
                  </div>
                </>
              )}
            </div>
            
            {/* Градиентная тень и кнопка раскрыть */}
            {!isSpecsExpanded && (
              <>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/60 to-transparent pointer-events-none"></div>
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setIsSpecsExpanded(true)}
                    className="px-6 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 rounded-[1.5rem] text-sm font-extralight tracking-wide hover:bg-white hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    показать все характеристики
                  </button>
                </div>
              </>
            )}
          </div>

          {isSpecsExpanded && (
            <>
              {/* Полет */}
              <div className="mb-8">
                <h3 className="text-lg font-nauryz text-gray-800 mb-4">Полет</h3>
                <div className="space-y-0">
                  <div className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-extralight text-gray-600 tracking-wide">Время полета</span>
                    <span className="font-extralight text-gray-900">46 мин</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-extralight text-gray-600 tracking-wide">Максимальная скорость</span>
                    <span className="font-extralight text-gray-900">19 м/с</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-extralight text-gray-600 tracking-wide">Дальность передачи</span>
                    <span className="font-extralight text-gray-900">15 км</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-extralight text-gray-600 tracking-wide">Рабочая температура</span>
                    <span className="font-extralight text-gray-900">-10°C до +40°C</span>
                  </div>
                </div>
              </div>

              {/* Камера */}
              <div className="mb-8">
                <h3 className="text-lg font-nauryz text-gray-800 mb-4">Камера</h3>
                <div className="space-y-0">
                  <div className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-extralight text-gray-600 tracking-wide">Разрешение видео</span>
                    <span className="font-extralight text-gray-900">4K/120fps</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-extralight text-gray-600 tracking-wide">Тип камеры</span>
                    <span className="font-extralight text-gray-900">тройная</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-extralight text-gray-600 tracking-wide">Стабилизация</span>
                    <span className="font-extralight text-gray-900">3-осевой подвес</span>
                  </div>
                </div>
              </div>

              {/* Конструкция */}
              <div className="mb-6">
                <h3 className="text-lg font-nauryz text-gray-800 mb-4">Конструкция</h3>
                <div className="space-y-0">
                  <div className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-extralight text-gray-600 tracking-wide">Вес</span>
                    <span className="font-extralight text-gray-900">895 г</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-extralight text-gray-600 tracking-wide">Складная конструкция</span>
                    <span className="font-extralight text-gray-900">да</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-extralight text-gray-600 tracking-wide">Система избежания препятствий</span>
                    <span className="font-extralight text-gray-900">да</span>
                  </div>
                </div>
              </div>
              
              {/* Кнопка свернуть */}
              <div className="flex justify-center">
                <button
                  onClick={() => setIsSpecsExpanded(false)}
                  className="px-6 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 rounded-[1.5rem] text-sm font-extralight tracking-wide hover:bg-white hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  свернуть характеристики
                </button>
              </div>
            </>
          )}
        </div>

        {/* Reviews Section */}
        <div className="bg-white/60 backdrop-blur-sm border border-gray-100 rounded-[2rem] p-8 mt-12">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-nauryz text-gray-900 tracking-wide">Отзывы</h2>
            <span className="ml-4 text-lg font-extralight text-gray-500">1</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Side - Rating Summary */}
            <div className="lg:col-span-4">
              <div className="text-center">
                <div className="text-6xl font-nauryz text-gray-900 mb-2">5.0</div>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-sm font-extralight text-gray-600 mb-6">1 отзыв</div>
                
                {/* Rating Bars */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="w-2 font-extralight text-gray-700">5</span>
                    <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 font-extralight text-gray-700">4</span>
                    <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-200 h-2 rounded-full" style={{width: '0%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 font-extralight text-gray-700">3</span>
                    <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-200 h-2 rounded-full" style={{width: '0%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 font-extralight text-gray-700">2</span>
                    <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-200 h-2 rounded-full" style={{width: '0%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 font-extralight text-gray-700">1</span>
                    <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-200 h-2 rounded-full" style={{width: '0%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-sm font-extralight text-gray-700 mb-2">Поделитесь своим мнением о товаре</div>
                  <div className="text-xs font-extralight text-gray-500 mb-6">Ваш отзыв поможет другим сделать выбор</div>
                  <button className="w-full py-3 rounded-[1.5rem] font-nauryz text-base tracking-wide transition-all duration-300 border bg-white text-blue-600 border-blue-600 hover:bg-blue-50 hover:scale-[1.02]">
                    <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4 mr-2" />
                    добавить отзыв
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Reviews List */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-extralight text-gray-900 pb-1">Отзывы</span>
                  <span className="text-sm font-extralight text-gray-400">(1)</span>
                </div>
              </div>

              {/* Filters */}
              <div className="flex items-center space-x-6 mb-6 text-sm">
                <div className="flex items-center space-x-4">
                  <span className="font-extralight text-gray-700">Рейтинг:</span>
                  {[5,4,3,2,1].map(rating => (
                    <label key={rating} className="flex items-center space-x-1 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        defaultChecked={rating === 5}
                        className="appearance-none w-5 h-5 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                      <span className="flex ml-1">
                        {[...Array(rating)].map((_, i) => (
                          <FontAwesomeIcon key={i} icon={faStar} className="w-3 h-3 text-yellow-400" />
                        ))}
                      </span>
                      <span className="text-xs text-gray-400">{rating === 5 ? '1' : '0'}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Review Item */}
              <div className="border-b border-gray-100 pb-6 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-extralight text-xs">К</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-extralight text-gray-900">katerpal</span>
                      <span className="text-xs text-gray-400">23.07.2025</span>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex items-center space-x-4 text-sm flex-wrap gap-2">
                        <div className="flex items-center space-x-1">
                          <span className="font-extralight text-gray-700">Общая:</span>
                          <div className="flex">
                            {renderStars(5)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className="text-sm font-extralight text-gray-700">Срок использования: </span>
                      <span className="text-sm font-extralight text-gray-900">Менее месяца</span>
                    </div>

                    <div className="text-sm font-extralight text-gray-700 leading-relaxed mb-4">
                      Отличный дрон! Качество съемки превосходное, время полета действительно соответствует заявленному. 
                      Система избежания препятствий работает безупречно. Очень доволен покупкой, рекомендую всем любителям аэросъемки.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 space-y-4 sm:space-y-0">
          <Link 
            href="/catalog"
            className="inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-sm border border-gray-100 text-gray-700 rounded-[1.5rem] font-extralight text-base tracking-wide transition-all duration-300 hover:border-gray-300 hover:bg-white"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 mr-3" />
            вернуться в каталог
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
