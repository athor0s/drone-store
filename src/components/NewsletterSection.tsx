'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faRocket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика подписки
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail('');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-white/10 text-sm font-medium mb-8">
            <FontAwesomeIcon icon={faRocket} className="w-4 h-4 mr-2 text-blue-400" />
            Будьте в курсе новинок
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Первыми узнавайте
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              о новинках
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Подпишитесь на нашу рассылку и получайте эксклюзивные предложения, 
            новости о новых моделях и экспертные советы по дронам
          </p>
        </div>

        {/* Newsletter form */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-12">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите ваш email"
              required
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
            />
            <button
              type="submit"
              disabled={isSubscribed}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 min-w-[140px]"
            >
              {isSubscribed ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Подписан!
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
                  Подписаться
                </>
              )}
            </button>
          </form>
          
          <p className="text-sm text-gray-400 mt-4">
            Мы уважаем вашу конфиденциальность. Отписаться можно в любое время.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-bold text-white mb-2">Эксклюзивные предложения</h3>
            <p className="text-gray-400 text-sm">Скидки до 30% только для подписчиков</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-lg font-bold text-white mb-2">Первыми о новинках</h3>
            <p className="text-gray-400 text-sm">Узнавайте о новых моделях до всех</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="text-lg font-bold text-white mb-2">Экспертные советы</h3>
            <p className="text-gray-400 text-sm">Гайды и советы от профессиональных пилотов</p>
          </div>
        </div>
      </div>
    </section>
  );
}
