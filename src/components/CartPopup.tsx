"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faShoppingCart, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';

interface CartPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function CartPopup({ isVisible, onClose }: CartPopupProps) {
  const { state, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (!isVisible) return null;

  return (
    <div 
      className="absolute top-full right-0 mt-2 w-96 bg-white/95 backdrop-blur-md border border-gray-200 rounded-[2rem] shadow-2xl z-50"
      onMouseEnter={() => {/* Keep popup open */}}
      onMouseLeave={onClose}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-nauryz text-gray-900">Корзина</h3>
          <span className="text-sm text-gray-500">{state.items.length} товар(ов)</span>
        </div>

        {state.items.length === 0 ? (
          <div className="text-center py-8">
            <FontAwesomeIcon icon={faShoppingCart} className="w-8 h-8 text-gray-300 mb-3" />
            <p className="text-gray-500 font-extralight">Корзина пуста</p>
          </div>
        ) : (
          <>
            <div className="max-h-60 overflow-y-auto space-y-3 mb-4">
              {state.items.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-3 bg-gray-50/50 rounded-[1.5rem] p-3">
                  <div className="w-12 h-12 bg-white rounded-[1rem] overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-extralight text-gray-900 text-sm truncate">{item.product.name}</h4>
                    <p className="text-xs text-gray-500 font-extralight">{item.product.brand}</p>
                    <p className="text-sm font-nauryz text-gray-900">{item.product.price.toLocaleString()} ₽</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center bg-white rounded-[1rem] border border-gray-200">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <FontAwesomeIcon icon={faMinus} className="w-2 h-2" />
                      </button>
                      <span className="px-2 py-1 text-xs font-extralight min-w-[1.5rem] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <FontAwesomeIcon icon={faPlus} className="w-2 h-2" />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <FontAwesomeIcon icon={faTrash} className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-nauryz text-lg text-gray-900">Итого:</span>
                <span className="font-nauryz text-xl text-gray-900">{getCartTotal().toLocaleString()} ₽</span>
              </div>
              
              <button className="w-full py-3 rounded-[1.5rem] font-nauryz text-base tracking-wide transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02]">
                Перейти к оплате
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
