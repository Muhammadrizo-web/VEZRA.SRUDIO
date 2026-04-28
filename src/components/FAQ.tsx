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
  Sparkles,
} from 'lucide-react';

const faqItems = [
  {
    icon: CircleDollarSign,
    title: 'Сколько стоит разработка дизайна?',
    description:
      'Стоимость зависит от формата, сложности и объёма проекта.',
    points: [
      'UI/UX дизайн — от 20 млн сум',
      'Landing page — от 10 млн сум',
      'Сложные проекты — рассчитываются индивидуально',
      'Перед стартом вы получаете чёткую оценку стоимости и этапов — без неожиданных доплат',
    ],
  },
  {
    icon: Clock3,
    title: 'Сколько длится разработка проекта?',
    description:
      'Сроки фиксируются до начала работы и зависят от объёма задач.',
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
    title: 'Работаете ли вы со стартапами?',
    description:
      'Помогаем стартапам быстро запускать MVP и тестировать гипотезы.',
    points: [
      'Да, работаем со стартапами и действующим бизнесом',
      'Разрабатываем MVP для быстрого запуска',
      'Помогаем определить структуру продукта',
      'Создаём понятный и конверсионный продукт',
    ],
  },
  {
    icon: PencilRuler,
    title: 'Можно ли вносить правки?',
    description:
      'Правки включены в каждый этап работы.',
    points: [
      '2–3 раунда правок на каждом этапе',
      'Единый список изменений',
      'Дополнительные правки отдельно',
      'Поддержка после сдачи — по договорённости',
    ],
  },
  {
    icon: Figma,
    title: 'Используете ли вы Figma?',
    description:
      'Да, весь процесс построен в Figma.',
    points: [
      'Auto-layout',
      'Компоненты',
      'Готовые dev-макеты',
      'Поддержка разработчиков',
    ],
  },
  {
    icon: Workflow,
    title: 'Как проходит процесс работы?',
    description:
      'Чёткий pipeline от идеи до передачи.',
    points: [
      'Бриф',
      'Исследование',
      'Концепция',
      'Дизайн',
      'Согласование',
      'Передача',
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? faqItems[active] : null;
  const CurrentIcon = current?.icon;

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,220,140,0.28),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(188,220,255,0.45),transparent_35%),linear-gradient(180deg,#ffffff_0%,#f8fafc_55%,#eef4fb_100%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">

        {/* LEFT */}
        <div className="min-h-[520px] flex items-center">
          {current ? (
            <div
              key={active}
              className="animate-[fadeContent_.6s_cubic-bezier(0.22,1,0.36,1)]"
            >
              <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#e67a00]">
                <CurrentIcon size={16} />
                Ответ
              </div>

              <h2 className="max-w-[560px] text-5xl font-semibold leading-[1.03] tracking-[-0.05em] text-black md:text-6xl">
                {current.title}
              </h2>

              <p className="mt-6 max-w-[520px] text-base leading-relaxed text-slate-500">
                {current.description}
              </p>

              <ul className="mt-8 space-y-4">
                {current.points.map((point, i) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-slate-600"
                    style={{
                      animation:
                        `fadePoint .5s cubic-bezier(0.22,1,0.36,1) both`,
                      animationDelay: `${i * 70}ms`,
                    }}
                  >
                    <span className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#e67a00]">
                      <Check size={12} strokeWidth={2.5} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="animate-[fadeContent_.7s_cubic-bezier(0.22,1,0.36,1)]">
              <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#e67a00]">
                <Sparkles size={16} />
                FAQ
              </div>

              <h2 className="max-w-[560px] text-5xl font-semibold leading-[1.03] tracking-[-0.05em] text-black md:text-6xl">
                Часто задаваемые вопросы
              </h2>

              <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-slate-500">
                Выберите вопрос справа, чтобы увидеть подробный ответ.
                Мы подготовили краткие и понятные ответы на самые важные вопросы перед стартом проекта.
              </p>
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const Icon = item.icon;
            const isOpen = active === index;

            return (
              <button
                key={item.title}
                onClick={() => setActive(isOpen ? null : index)}
                className={`
                  group relative w-full overflow-hidden rounded-[22px] border px-5 py-5 text-left
                  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${
                    isOpen
                      ? 'border-black bg-white shadow-[0_25px_60px_rgba(15,23,42,.08)]'
                      : 'border-transparent hover:border-slate-200 hover:bg-white/60'
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`
                      flex h-10 w-10 items-center justify-center rounded-xl border
                      transition-all duration-500
                      ${
                        isOpen
                          ? 'border-orange-100 bg-orange-50 text-[#e67a00]'
                          : 'border-white bg-white text-slate-400'
                      }
                    `}
                  >
                    <Icon size={17} />
                  </div>

                  <div
                    className={`flex-1 text-base font-semibold transition-colors duration-300 ${
                      isOpen ? 'text-[#e67a00]' : 'text-slate-900'
                    }`}
                  >
                    {item.title}
                  </div>

                  <div
                    className={`
                      flex h-9 w-9 items-center justify-center rounded-full border
                      transition-all duration-500
                      ${
                        isOpen
                          ? 'rotate-180 border-orange-100 bg-orange-50 text-[#e67a00]'
                          : 'border-slate-200 text-slate-400'
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

      <style>{`
        @keyframes fadeContent{
          from{
            opacity:0;
            transform:translateY(20px);
            filter:blur(10px);
          }
          to{
            opacity:1;
            transform:translateY(0);
            filter:blur(0);
          }
        }

        @keyframes fadePoint{
          from{
            opacity:0;
            transform:translateY(10px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }
      `}</style>
    </section>
  );
}