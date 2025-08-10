'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function CatalogHero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-6xl lg:text-8xl font-extralight tracking-wide text-gray-900 mb-8">
            пиздатый{' '}
            <span className="font-light text-blue-600">
              дрон
            </span>
          </h1>
          <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed font-extralight tracking-wide">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <Link
              href="/catalog"
              className="inline-flex items-center px-10 py-4 bg-gray-50/50 border border-gray-200 text-gray-700 rounded-full font-extralight text-lg tracking-wide hover:bg-gray-100/50 hover:border-gray-300 transition-all duration-300 hover:scale-105"
            >
              весь каталог
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
