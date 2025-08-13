"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

export default function WishlistPage() {
  const { state, removeFromWishlist, addToCart, isInCart } = useCart();
  const wishlist = state.wishlist;

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="w-3 h-3 text-yellow-400" />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon key="half" icon={faStarHalfAlt} className="w-3 h-3 text-yellow-400" />
      );
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="w-3 h-3 text-gray-300" />
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
            <span className="text-gray-900 font-extralight">избранное</span>
          </nav>
        </div>

        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <h1 className="text-4xl lg:text-5xl font-nauryz text-gray-900 tracking-wide">
              избранное
            </h1>
            <div className="w-12 h-12 bg-red-50 rounded-[1.5rem] flex items-center justify-center">
              <FontAwesomeIcon icon={faHeart} className="w-5 h-5 text-red-500" />
            </div>
          </div>
          <p className="text-gray-600 font-extralight tracking-wide">
            {wishlist.length === 0 
              ? "ваш список избранного пуст" 
              : `в избранном ${wishlist.length} ${wishlist.length === 1 ? 'товар' : wishlist.length < 5 ? 'товара' : 'товаров'}`
            }
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-24 h-24 bg-gray-50 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
              <FontAwesomeIcon icon={faHeart} className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-nauryz text-gray-900 mb-3">список пуст</h3>
            <p className="text-gray-500 font-extralight text-base mb-8 max-w-md mx-auto">
              добавляйте понравившиеся товары в избранное, чтобы не потерять их
            </p>
            <Link 
              href="/catalog" 
              className="inline-flex items-center space-x-2 px-8 py-3 rounded-[1.5rem] bg-blue-600 text-white font-nauryz text-base hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300"
            >
              <span>перейти в каталог</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map(product => (
              <div key={product.id} className="group bg-white/80 backdrop-blur-sm border border-gray-100 rounded-[2rem] p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                <div className="relative">
                  <Link href={`/product/${product.id}`} className="block">
                    <div className="aspect-square bg-white/60 rounded-[1.5rem] p-4 mb-4 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </Link>
                  
                  {/* Remove from wishlist button */}
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-[1rem] flex items-center justify-center text-red-400 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faHeart} className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  {/* Brand */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-[1rem] text-xs font-extralight tracking-wider uppercase">
                      {product.brand}
                    </span>
                    <div className="flex items-center space-x-1">
                      {renderStars(product.rating)}
                      <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                    </div>
                  </div>

                  {/* Product Name */}
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-lg font-nauryz text-gray-900 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Price */}
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

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(product, 1)}
                    disabled={isInCart(product.id)}
                    className={`w-full py-3 rounded-[1.5rem] font-nauryz text-base transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isInCart(product.id) 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02]'
                    }`}
                  >
                    <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4" />
                    <span>{isInCart(product.id) ? 'уже в корзине' : 'добавить в корзину'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}
