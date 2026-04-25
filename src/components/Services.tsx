import { useState } from 'react';
import { Layers, Monitor, Palette, Search, Code2, Grid2x2 as Grid } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'UI/UX Дизайн',
    desc: 'Интерфейсы, которые понятны с первого взгляда.',
    more:
      'Глубокий UX: исследования, прототипы, сценарии поведения пользователей и построение дизайн-систем. Мы создаём интерфейсы, которые не только красивы, но и увеличивают конверсию.',
  },
  {
    icon: Grid,
    title: 'Веб-дизайн',
    desc: 'Современные сайты с идеальной типографикой.',
    more:
      'Адаптивные интерфейсы, визуальная иерархия, сетки и UX-структура уровня SaaS продуктов.',
  },
  {
    icon: Palette,
    title: 'Брендинг',
    desc: 'Айдентика, которая запоминается.',
    more:
      'Логотип, цветовая система, визуальный стиль и полный бренд-гайд для бизнеса.',
  },
  {
    icon: Search,
    title: 'UX Аудит',
    desc: 'Поиск точек роста продукта.',
    more:
      'Анализ интерфейса, поведения пользователей и улучшение конверсии с конкретными решениями.',
  },
  {
    icon: Code2,
    title: 'Разработка',
    desc: 'Frontend на React.',
    more:
      'Чистая архитектура, компонентный подход и pixel-perfect реализация дизайна.',
  },
  {
    icon: Layers,
    title: 'Дизайн-системы',
    desc: 'Масштабируемые UI системы.',
    more:
      'Компоненты, документация и единый визуальный язык продукта.',
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-28 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* TITLE */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-[#0a0a0a]">
            Решаем дизайн-задачи <br /> вашего бизнеса
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, i) => {
            const Icon = service.icon;
            const isOpen = active === i;
            const isDim = active !== null && !isOpen;

            return (
              <div
                key={service.title}
                onClick={() => setActive(isOpen ? null : i)}
                className={`
                  relative p-8 rounded-3xl bg-white border border-gray-100
                  cursor-pointer
                  transition-all duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-1 hover:shadow-lg
                  ${isOpen ? 'shadow-2xl scale-[1.03] z-20' : ''}
                  ${isDim ? 'opacity-50' : 'opacity-100'}
                `}
              >

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 mb-6">
                  <Icon size={22} />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-[#0a0a0a] mb-2">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-500 text-sm">
                  {service.desc}
                </p>

                {/* 🔥 SMOOTH EXPAND (KEY PART) */}
                <div
                  className={`
                    grid transition-all duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0 mt-0'}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="text-sm text-gray-600 leading-relaxed transform transition duration-700 translate-y-0">
                      {service.more}
                    </div>

                    <div className="mt-4 text-xs text-gray-400 border-t pt-3">
                      Премиальный UX подход и внимание к деталям.
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 text-xs font-medium text-gray-400 flex items-center gap-1">
                  {isOpen ? 'Скрыть' : 'Подробнее'}
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}