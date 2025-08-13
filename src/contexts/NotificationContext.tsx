"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faHeart, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';

interface Notification {
  id: string;
  type: 'cart' | 'wishlist';
  message: string;
  productName: string;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (type: 'cart' | 'wishlist', message: string, productName: string) => void;
  removeNotification: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (type: 'cart' | 'wishlist', message: string, productName: string) => {
    const id = Date.now().toString();
    const newNotification: Notification = { id, type, message, productName };
    
    setNotifications(prev => [...prev, newNotification]);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 3000);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
      <NotificationContainer notifications={notifications} onRemove={removeNotification} />
    </NotificationContext.Provider>
  );
}

function NotificationContainer({ notifications, onRemove }: { notifications: Notification[], onRemove: (id: string) => void }) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-[1.5rem] shadow-lg p-4 flex items-center space-x-3 min-w-[300px] animate-in slide-in-from-right duration-300"
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            notification.type === 'cart' ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'
          }`}>
            <FontAwesomeIcon 
              icon={notification.type === 'cart' ? faShoppingCart : faHeart} 
              className="w-4 h-4" 
            />
          </div>
          
          <div className="flex-1">
            <p className="text-sm font-nauryz text-gray-900">{notification.message}</p>
            <p className="text-xs text-gray-500 font-extralight">{notification.productName}</p>
          </div>
          
          <button
            onClick={() => onRemove(notification.id)}
            className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <FontAwesomeIcon icon={faTimes} className="w-3 h-3 text-gray-500" />
          </button>
        </div>
      ))}
    </div>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
}
