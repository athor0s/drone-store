"use client";

import { useCart } from '@/contexts/CartContext';
import { useCartAnimation } from '@/contexts/CartAnimationContext';
import { Product } from '@/contexts/CartContext';

export function useAnimatedCart() {
  const cart = useCart();
  const animation = useCartAnimation();

  const addToCartWithAnimation = (product: Product, quantity: number, buttonElement: HTMLElement) => {
    cart.addToCart(product, quantity);
    animation.triggerCartAnimation(buttonElement);
  };

  return {
    ...cart,
    addToCartWithAnimation,
    triggerCartAnimation: animation.triggerCartAnimation,
    hideCartPopup: animation.hideCartPopup,
  };
}
