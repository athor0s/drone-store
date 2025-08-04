import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 text-sm">
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhone} className="w-3 h-3" />
              <span>+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3" />
              <span>info@dronestore.ru</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3 h-3" />
              <span>Москва, ул. Тверская, 1</span>
            </div>
          </div>
          <div className="text-gray-600">
            Работаем: Пн-Пт 9:00-18:00
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
