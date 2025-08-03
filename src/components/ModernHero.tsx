'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlay, 
  faArrowRight,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function ModernHero() {
  return (
    <section className="bg-white pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <span className="text-blue-700 text-sm font-medium">Новое поколение дронов</span>
          </div>

          {/* Main heading */}
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl lg:text-7xl font-light text-gray-900 leading-tight">
              Профессиональные
              <span className="font-medium text-blue-600 block">дроны</span>
              <span className="text-gray-600">для бизнеса</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Откройте новые возможности с нашими инновационными дронами. 
              Точность, надежность, превосходное качество.
            </p>
          </div>

          {/* Features list */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
            {[
              'Профессиональное оборудование',
              'Техническая поддержка 24/7',
              'Гарантия качества'
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-2xl font-medium hover:bg-blue-700 transition-colors shadow-sm"
            >
              Смотреть каталог
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2" />
            </Link>
            
            <button className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-gray-700 rounded-2xl font-medium hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                <FontAwesomeIcon icon={faPlay} className="w-3 h-3 text-gray-600 ml-0.5" />
              </div>
              Демонстрация
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
