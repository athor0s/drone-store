'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope 
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              <span className="text-blue-600">Drone</span>Store
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Профессиональные дроны и технологии будущего. Качество, надежность и инновации в каждом продукте.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-xl flex items-center justify-center transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-xl flex items-center justify-center transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-xl flex items-center justify-center transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-xl flex items-center justify-center transition-colors">
                <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Категории</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Профессиональные дроны
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Любительские дроны
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Камеры и гимбалы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Аксессуары
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <p className="text-gray-600">г. Москва</p>
                  <p className="text-gray-600">ул. Тверская, 1</p>
                </div>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-blue-600 mr-3" />
                <a href="tel:+74951234567" className="text-gray-600 hover:text-gray-900 transition-colors">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-blue-600 mr-3" />
                <a href="mailto:info@dronestore.ru" className="text-gray-600 hover:text-gray-900 transition-colors">
                  info@dronestore.ru
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-100 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 DroneStore. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Условия использования
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Возврат и обмен
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}