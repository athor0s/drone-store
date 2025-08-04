'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLightbulb, 
  faCamera, 
  faBattery, 
  faWind,
  faMapMarkedAlt,
  faShieldAlt,
  faArrowRight,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const tips = [
  {
    id: 1,
    icon: faCamera,
    title: "Настройка камеры",
    description: "Как получить идеальные кадры с высоты птичьего полета",
    readTime: "3 мин",
    category: "Съемка",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700"
  },
  {
    id: 2,
    icon: faBattery,
    title: "Продление времени полета",
    description: "Секреты экономии заряда батареи и планирования маршрута",
    readTime: "5 мин",
    category: "Эксплуатация",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    badgeBg: "bg-green-100",
    badgeText: "text-green-700"
  },
  {
    id: 3,
    icon: faWind,
    title: "Полеты в ветреную погоду",
    description: "Безопасные техники пилотирования при сложных условиях",
    readTime: "4 мин",
    category: "Безопасность",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    badgeBg: "bg-orange-100",
    badgeText: "text-orange-700"
  },
  {
    id: 4,
    icon: faMapMarkedAlt,
    title: "Зоны полетов",
    description: "Где можно и нельзя летать: актуальная карта ограничений",
    readTime: "6 мин",
    category: "Законодательство",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    badgeBg: "bg-red-100",
    badgeText: "text-red-700"
  },
  {
    id: 5,
    icon: faShieldAlt,
    title: "Страхование дрона",
    description: "Защитите свои инвестиции: виды страховок и их особенности",
    readTime: "7 мин",
    category: "Страхование",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-700"
  }
];

const quickTips = [
  "Всегда проверяйте уровень заряда перед полетом",
  "Калибруйте компас в новой локации",
  "Изучите местность перед первым полетом",
  "Ведите журнал полетов для улучшения навыков"
];

export default function TipsAndGuides() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faLightbulb} className="w-6 h-6 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Советы и руководства</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Полезные советы от экспертов помогут вам максимально эффективно использовать ваш дрон
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Tips */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {tips.map((tip) => (
                <Link key={tip.id} href="/guides" className="group">
                  <div className="bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg rounded-2xl p-6 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${tip.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <FontAwesomeIcon icon={tip.icon} className={`w-5 h-5 ${tip.textColor}`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-medium px-2 py-1 ${tip.badgeBg} ${tip.badgeText} rounded-lg`}>
                            {tip.category}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
                            {tip.readTime}
                          </div>
                        </div>
                        
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {tip.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                          {tip.description}
                        </p>
                        
                        <div className="flex items-center text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                          Читать далее
                          <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Tips Sidebar */}
          <div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-4">Быстрые советы</h3>
              <div className="space-y-3">
                {quickTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-sm text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
              
              <Link 
                href="/guides" 
                className="inline-flex items-center gap-2 mt-6 text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Все советы
                <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
              </Link>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-900 rounded-2xl p-6 mt-6 text-white">
              <h3 className="font-semibold mb-2">Еженедельные советы</h3>
              <p className="text-gray-300 text-sm mb-4">
                Получайте полезные советы по эксплуатации дронов на свою почту
              </p>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-medium transition-colors">
                  Подписаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
