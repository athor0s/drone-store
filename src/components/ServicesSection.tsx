'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeadset, 
  faTruck, 
  faShield,
  faCog,
  faUsers,
  faAward
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    icon: faHeadset,
    title: "Техподдержка 24/7",
    description: "Круглосуточная поддержка специалистов для решения любых вопросов",
    color: "blue"
  },
  {
    icon: faTruck,
    title: "Быстрая доставка",
    description: "Доставка по Москве в день заказа, по России в течение 2-3 дней",
    color: "green"
  },
  {
    icon: faShield,
    title: "Гарантия качества",
    description: "Официальная гарантия на всю продукцию от 12 месяцев",
    color: "purple"
  },
  {
    icon: faCog,
    title: "Настройка и обучение",
    description: "Бесплатная настройка оборудования и обучение основам пилотирования",
    color: "orange"
  },
  {
    icon: faUsers,
    title: "Консультации экспертов",
    description: "Персональные рекомендации от сертифицированных специалистов",
    color: "red"
  },
  {
    icon: faAward,
    title: "Программа лояльности",
    description: "Накопительные скидки и специальные предложения для постоянных клиентов",
    color: "indigo"
  }
];

const colorMap = {
  blue: "bg-blue-50 text-blue-600 border-blue-100",
  green: "bg-green-50 text-green-600 border-green-100", 
  purple: "bg-purple-50 text-purple-600 border-purple-100",
  orange: "bg-orange-50 text-orange-600 border-orange-100",
  red: "bg-red-50 text-red-600 border-red-100",
  indigo: "bg-indigo-50 text-indigo-600 border-indigo-100"
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Наши <span className="font-medium text-blue-600">услуги</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр услуг для максимального комфорта наших клиентов
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-lg transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl border ${colorMap[service.color as keyof typeof colorMap]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon icon={service.icon} className="w-7 h-7" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-3xl p-12 border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Нужна консультация?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Наши эксперты помогут выбрать идеальный дрон для ваших задач и ответят на все вопросы
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-medium hover:bg-blue-700 transition-colors">
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
