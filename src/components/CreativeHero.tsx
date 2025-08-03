'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlay, 
  faArrowDown,
  faBolt,
  faRocket
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export default function CreativeHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x * 0.1,
            top: mousePosition.y * 0.1,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          style={{
            right: mousePosition.x * 0.05,
            bottom: mousePosition.y * 0.05,
            transition: 'all 0.5s ease-out'
          }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-black bg-opacity-50" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
               backgroundSize: '60px 60px'
             }} 
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main content */}
          <div className="space-y-8">
            {/* Animated badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium animate-pulse">
              <FontAwesomeIcon icon={faBolt} className="w-4 h-4 mr-2 text-yellow-400" />
              Новое поколение дронов уже здесь
            </div>

            {/* Main heading with gradient text */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
              <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                DRONE
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                FUTURE
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Исследуйте безграничные возможности с нашими инновационными дронами. 
              <span className="text-blue-400 font-semibold"> Будущее начинается сегодня.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <span className="relative z-10">Исследовать каталог</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button className="group flex items-center gap-4 px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={faPlay} className="w-5 h-5 ml-1" />
                </div>
                Смотреть демо
              </button>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 animate-bounce">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60" />
          </div>
          <div className="absolute top-40 right-20 animate-pulse">
            <FontAwesomeIcon icon={faRocket} className="w-8 h-8 text-yellow-400" />
          </div>
          <div className="absolute bottom-40 left-20 animate-spin-slow">
            <div className="w-12 h-12 border-2 border-blue-400 rounded-full border-dashed" />
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-gray-400">
              <span className="text-sm mb-2">Прокрутите вниз</span>
              <FontAwesomeIcon icon={faArrowDown} className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* CSS for custom animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
