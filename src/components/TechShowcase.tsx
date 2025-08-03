'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot, 
  faEye, 
  faWifi, 
  faShield,
  faLightbulb,
  faCog
} from '@fortawesome/free-solid-svg-icons';

const techFeatures = [
  {
    icon: faRobot,
    title: "AI Навигация",
    description: "Умная система автопилотирования с машинным обучением",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: faEye,
    title: "Computer Vision",
    description: "Распознавание объектов и препятствий в реальном времени",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: faWifi,
    title: "5G Связь",
    description: "Молниеносная передача данных на любые расстояния",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: faShield,
    title: "Защита данных",
    description: "Военное шифрование и защита от взлома",
    color: "from-red-500 to-orange-500"
  }
];

export default function TechShowcase() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-white/10 text-sm font-medium mb-8">
            <FontAwesomeIcon icon={faLightbulb} className="w-4 h-4 mr-2 text-yellow-400" />
            Передовые технологии
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Технологии
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              завтрашнего дня
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Наши дроны оснащены самыми передовыми технологиями, которые делают полеты 
            безопасными, умными и невероятно точными
          </p>
        </div>

        {/* Tech features grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {techFeatures.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon icon={feature.icon} className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Innovation showcase */}
        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - text */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                <FontAwesomeIcon icon={faCog} className="w-4 h-4 mr-2 text-blue-400" />
                Инновационная разработка
              </div>
              
              <h3 className="text-4xl font-black text-white">
                Революционная система управления
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Наша собственная разработка - система NeuroFlight, которая использует 
                нейронные сети для предсказания поведения дрона и автоматической коррекции полета.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="text-gray-300">Предсказание траектории на 5 секунд вперед</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span className="text-gray-300">Автоматическая стабилизация в турбулентности</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full" />
                  <span className="text-gray-300">Адаптация к стилю пилотирования</span>
                </div>
              </div>
            </div>

            {/* Right side - visual representation */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl border border-white/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🧠</div>
                  <div className="text-2xl font-bold text-white">NeuroFlight</div>
                  <div className="text-gray-400">AI Core System</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
