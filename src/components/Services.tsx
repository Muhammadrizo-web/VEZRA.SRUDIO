import { useState } from 'react';
import {
  Layers,
  Monitor,
  Palette,
  Search,
  Code2,
  Grid2x2 as Grid,
  ArrowUpRight,
} from 'lucide-react';

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
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#f7f8fb] py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7f8fb] to-white" />
      <div className="absolute left-1/2 top-8 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-gray-400">
            Услуги
          </p>

          <h2 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#0a0a0a]">
            Решаем дизайн-задачи <br /> вашего бизнеса
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isOpen = active === i;
            const isDim = active !== null && !isOpen;

            return (
              <button
                key={service.title}
                type="button"
                onClick={() => setActive(isOpen ? null : i)}
                className={`
                  group relative min-h-[190px] overflow-hidden rounded-[28px] border bg-white/75 p-7 text-left
                  shadow-[0_18px_45px_rgba(20,35,55,0.06)] backdrop-blur-xl
                  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_28px_65px_rgba(20,35,55,0.12)]
                  ${
                    isOpen
                      ? 'z-20 scale-[1.025] border-white shadow-[0_35px_80px_rgba(20,35,55,0.15)] blur-0'
                      : 'border-gray-200/70'
                  }
                  ${
                    isDim
                      ? 'scale-[0.98] opacity-35 blur-[2px] hover:scale-100 hover:opacity-100 hover:blur-0'
                      : 'opacity-100 blur-0'
                  }
                `}
              >
                <div
                  className={`
                    absolute inset-0 opacity-0 transition-opacity duration-500
                    ${
                      isOpen
                        ? 'opacity-100 bg-gradient-to-br from-white via-white to-blue-50/75'
                        : 'group-hover:opacity-100 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50/45'
                    }
                  `}
                />

                <div className="relative z-10">
                  <div
                    className={`
                      mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500
                      ${
                        isOpen
                          ? 'bg-blue-50 text-[#1d5f9f] shadow-[0_12px_28px_rgba(29,95,159,0.18)]'
                          : 'bg-gray-50 text-gray-700 group-hover:bg-blue-50 group-hover:text-[#1d5f9f]'
                      }
                    `}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3
                        className={`
                          mb-2 text-lg font-semibold tracking-[-0.02em] transition-colors duration-500
                          ${isOpen ? 'text-black' : 'text-[#0a0a0a]'}
                        `}
                      >
                        {service.title}
                      </h3>

                      <p className="max-w-[320px] text-sm leading-relaxed text-gray-500">
                        {service.desc}
                      </p>
                    </div>

                    <div
                      className={`
                        flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500
                        ${
                          isOpen
                            ? 'rotate-45 border-blue-200 bg-blue-50 text-[#1d5f9f]'
                            : 'border-gray-200 text-gray-400 group-hover:border-blue-200 group-hover:text-[#1d5f9f]'
                        }
                      `}
                    >
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <div
                    className={`
                      grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        isOpen
                          ? 'mt-5 grid-rows-[1fr] opacity-100'
                          : 'mt-0 grid-rows-[0fr] opacity-0'
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-gray-600">
                        {service.more}
                      </p>

                      <div className="mt-5 border-t border-gray-200/70 pt-4 text-xs font-medium text-gray-400">
                        Премиальный UX подход и внимание к деталям.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`
                    pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl
                    transition-opacity duration-500
                    ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}
                  `}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}