import { useState } from 'react';
import {
  CircleDollarSign,
  Clock3,
  Rocket,
  PencilRuler,
  Figma,
  Workflow,
  Plus,
  Minus,
  Check,
} from 'lucide-react';

const faqItems = [
  {
    icon: CircleDollarSign,
    label: 'Стоимость',
    title: 'Сколько стоит разработка дизайна?',
    description:
      'Стоимость зависит от формата, сложности и объёма проекта. Перед стартом вы получаете точную оценку работ.',
    points: [
      'UI/UX дизайн — от 20 млн сум',
      'Landing page — от 10 млн сум',
      'Сложные проекты — рассчитываются индивидуально',
      'Перед стартом вы получаете чёткую оценку стоимости и этапов — без неожиданных доплат',
    ],
  },
  {
    icon: Clock3,
    label: 'Сроки',
    title: 'Сколько длится разработка проекта?',
    description:
      'Сроки фиксируются до начала работы и зависят от объёма задач, сложности и скорости обратной связи.',
    points: [
      'Landing page — от 2 до 3 недель',
      'Сайт — от 3 до 5 недель',
      'SaaS продукт — от 6 до 12 недель',
      'Работа делится на этапы с чёткими дедлайнами',
      'Сроки зависят от объёма задач и скорости обратной связи со стороны клиента',
    ],
  },
  {
    icon: Rocket,
    label: 'Стартапы',
    title: 'Работаете ли вы со стартапами?',
    description:
      'Да, помогаем стартапам быстро запустить MVP, проверить гипотезы и собрать понятную продуктовую структуру.',
    points: [
      'Да, работаем со стартапами и действующим бизнесом',
      'Разрабатываем MVP для быстрого запуска и тестирования гипотез',
      'Помогаем определить структуру продукта и ключевой пользовательский сценарий',
      'Фокус — на создании понятного и конверсионного продукта с минимальными затратами на старте',
    ],
  },
  {
    icon: PencilRuler,
    label: 'Правки',
    title: 'Можно ли вносить правки?',
    description:
      'Да, правки включены в каждый этап. Работа строится так, чтобы изменения были понятными и контролируемыми.',
    points: [
      'Включено 2–3 раунда правок на каждом этапе',
      'Раунд правок — это единый список изменений',
      'Дополнительные правки оплачиваются отдельно',
      'Правки вне утверждённого объёма считаются новой задачей',
      'Поддержка после сдачи — по отдельной договорённости',
    ],
  },
  {
    icon: Figma,
    label: 'Figma',
    title: 'Используете ли вы Figma?',
    description:
      'Да, вся работа ведётся в Figma. Макеты подготавливаются для удобной передачи разработчикам.',
    points: [
      'Да, вся работа ведётся в Figma',
      'Используем auto-layout и компоненты для масштабируемости дизайна',
      'Передаём разработчикам полностью готовые макеты: структура, стили, состояния',
      'Обеспечиваем удобную передачу проекта и поддержку на этапе разработки',
    ],
  },
  {
    icon: Workflow,
    label: 'Процесс',
    title: 'Как проходит процесс работы?',
    description:
      'Процесс разделён на понятные этапы: от брифа и структуры до финальной передачи макетов.',
    points: [
      'Бриф и цели проекта — фиксируем задачи, аудиторию и ожидания',
      'Исследование и структура — формируем логику продукта и пользовательские сценарии',
      'Концепция — разрабатываем и согласуем визуальное направление',
      'Дизайн и проработка — создаём интерфейсы с учётом UX и бизнес-целей',
      'Согласование — работаем по этапам с ограниченным количеством правок',
      'Передача — передаём готовые макеты и сопровождаем разработку',
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(1);
  const current = faqItems[active];
  const CurrentIcon = current.icon;

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_12%,rgba(255,221,140,0.32),transparent_32%),radial-gradient(circle_at_92%_82%,rgba(190,222,255,0.52),transparent_36%),linear-gradient(180deg,#ffffff_0%,#f8fafc_55%,#eef4fb_100%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <div
          key={active}
          className="animate-[fadeContent_0.55s_cubic-bezier(0.22,1,0.36,1)]"
        >
          <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#e67a00]">
            <CurrentIcon size={16} strokeWidth={2} />
            <span>{current.label}</span>
          </div>

          <h2 className="max-w-[580px] text-5xl font-semibold leading-[1.03] tracking-[-0.055em] text-black md:text-6xl">
            {current.title}
          </h2>

          <p className="mt-6 max-w-[540px] text-base leading-relaxed text-slate-500">
            {current.description}
          </p>

          <ul className="mt-8 grid max-w-[580px] gap-3.5">
            {current.points.map((point, index) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm leading-relaxed text-slate-600"
                style={{
                  animation: `fadePoint 0.5s cubic-bezier(0.22,1,0.36,1) both`,
                  animationDelay: `${index * 70}ms`,
                }}
              >
                <span className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#e67a00]">
                  <Check size={12} strokeWidth={2.4} />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="space-y-3">
            {faqItems.map((item, index) => {
              const Icon = item.icon;
              const isOpen = active === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`
                    group relative w-full overflow-hidden rounded-[22px] border px-5 py-5 text-left
                    transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      isOpen
                        ? 'border-black bg-white/86 shadow-[0_28px_70px_rgba(15,23,42,0.10)]'
                        : 'border-transparent bg-white/0 hover:border-slate-200 hover:bg-white/55'
                    }
                  `}
                >
                  <div
                    className={`
                      absolute inset-0 transition-opacity duration-500
                      ${
                        isOpen
                          ? 'opacity-100 bg-gradient-to-r from-white via-white to-orange-50/35'
                          : 'opacity-0 group-hover:opacity-100 group-hover:bg-gradient-to-r group-hover:from-white/60 group-hover:to-blue-50/30'
                      }
                    `}
                  />

                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className={`
                        flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-500
                        ${
                          isOpen
                            ? 'border-orange-100 bg-white text-[#e67a00] shadow-[0_10px_25px_rgba(230,122,0,0.12)]'
                            : 'border-white bg-white/80 text-slate-400 group-hover:scale-105 group-hover:text-slate-700'
                        }
                      `}
                    >
                      <Icon size={17} strokeWidth={1.8} />
                    </div>

                    <div className="flex-1">
                      <div
                        className={`
                          text-base font-semibold tracking-[-0.02em] transition-colors duration-300
                          ${isOpen ? 'text-[#e67a00]' : 'text-slate-900'}
                        `}
                      >
                        {item.title}
                      </div>

                      <div
                        className={`
                          grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                          ${
                            isOpen
                              ? 'mt-4 grid-rows-[1fr] opacity-100'
                              : 'mt-0 grid-rows-[0fr] opacity-0'
                          }
                        `}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-xl text-sm leading-relaxed text-slate-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`
                        flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500
                        ${
                          isOpen
                            ? 'rotate-180 border-orange-100 bg-orange-50 text-[#e67a00]'
                            : 'border-slate-200 bg-white/50 text-slate-400 group-hover:scale-105 group-hover:border-slate-300 group-hover:text-slate-700'
                        }
                      `}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeContent {
          from {
            opacity: 0;
            transform: translateY(16px);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes fadePoint {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}