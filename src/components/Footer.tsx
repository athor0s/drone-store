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
    <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200/50">
      <div className="w-full px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-nauryz text-blue-600 mb-8 tracking-wide">
              дрон<span className="font-extralight text-black">стор</span>
            </h3>
            <p className="text-gray-600 mb-10 leading-relaxed font-extralight tracking-wide text-base">
              Профессиональные дроны и технологии будущего. Качество, надежность и инновации в каждом продукте.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-12 h-12 bg-gray-50/80 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200/50">
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-50/80 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200/50">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-50/80 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200/50">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-50/80 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200/50">
                <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-extralight text-gray-900 mb-8 tracking-wide">навигация</h4>
            <ul className="space-y-5">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-extralight tracking-wide text-base hover:scale-105 inline-block">
                  главная
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-extralight tracking-wide text-base hover:scale-105 inline-block">
                  каталог
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-extralight tracking-wide text-base hover:scale-105 inline-block">
                  о нас
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-extralight tracking-wide text-base hover:scale-105 inline-block">
                  контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xl font-extralight text-gray-900 mb-8 tracking-wide">категории</h4>
            <ul className="space-y-5">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-extralight tracking-wide text-base hover:scale-105 inline-block">
                  профессиональные дроны
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-extralight tracking-wide text-base hover:scale-105 inline-block">
                  любительские дроны
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-extralight tracking-wide text-base hover:scale-105 inline-block">
                  камеры и гимбалы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-extralight tracking-wide text-base hover:scale-105 inline-block">
                  аксессуары
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-extralight text-gray-900 mb-8 tracking-wide">контакты</h4>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-50/80 rounded-full flex items-center justify-center mr-4 flex-shrink-0 border border-gray-200/50">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 text-blue-600" />
                </div>
                <div className="pt-2">
                  <p className="text-gray-600 font-extralight tracking-wide text-base">г. москва</p>
                  <p className="text-gray-600 font-extralight tracking-wide text-base">ул. тверская, 1</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-50/80 rounded-full flex items-center justify-center mr-4 flex-shrink-0 border border-gray-200/50">
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-blue-600" />
                </div>
                <a href="tel:+74951234567" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-extralight tracking-wide text-base hover:scale-105">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-50/80 rounded-full flex items-center justify-center mr-4 flex-shrink-0 border border-gray-200/50">
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-blue-600" />
                </div>
                <a href="mailto:info@dronestore.ru" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-extralight tracking-wide text-base hover:scale-105">
                  info@dronestore.ru
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200/50 mt-20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-base font-extralight tracking-wide">
              © 2024 дронстор. все права защищены.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="#" className="text-gray-600 hover:text-blue-600 text-base transition-all duration-300 font-extralight tracking-wide hover:scale-105">
                политика конфиденциальности
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 text-base transition-all duration-300 font-extralight tracking-wide hover:scale-105">
                условия использования
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 text-base transition-all duration-300 font-extralight tracking-wide hover:scale-105">
                возврат и обмен
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}