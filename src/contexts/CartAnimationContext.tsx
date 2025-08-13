"use client";

import React, { createContext, useContext, useState, ReactNode, useRef, useEffect } from 'react';

interface CartAnimationContextType {
  showCartPopup: boolean;
  animationOrigin: { x: number; y: number } | null;
  triggerCartAnimation: (buttonElement: HTMLElement) => void;
  hideCartPopup: () => void;
}

const CartAnimationContext = createContext<CartAnimationContextType | undefined>(undefined);

export function CartAnimationProvider({ children }: { children: ReactNode }) {
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [animationOrigin, setAnimationOrigin] = useState<{ x: number; y: number } | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const triggerCartAnimation = (buttonElement: HTMLElement) => {
    // Получаем координаты кнопки
    const rect = buttonElement.getBoundingClientRect();
    setAnimationOrigin({
      x: rect.right - 20, // Правый верхний угол кнопки
      y: rect.top + 10
    });
    
    setShowCartPopup(true);
    
    // Убираем попап через 1.5 секунды
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setShowCartPopup(false);
      setAnimationOrigin(null);
    }, 1500);
  };

  const hideCartPopup = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowCartPopup(false);
    setAnimationOrigin(null);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <CartAnimationContext.Provider value={{
      showCartPopup,
      animationOrigin,
      triggerCartAnimation,
      hideCartPopup
    }}>
      {children}
    </CartAnimationContext.Provider>
  );
}

export function useCartAnimation() {
  const context = useContext(CartAnimationContext);
  if (context === undefined) {
    throw new Error('useCartAnimation must be used within a CartAnimationProvider');
  }
  return context;
}
