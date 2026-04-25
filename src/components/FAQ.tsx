import { useEffect, useState } from 'react';
import {
  Banknote,
  Timer,
  Users,
  RefreshCw,
  Code2,
  Workflow,
  Plus,
  Minus,
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const faqs = [
  {
    icon: Banknote,
    q: 'Сколько стоит разработка дизайна?',
    tag: 'Финансы',
    a: [
      'UI/UX дизайн — от 150 000 ₽',
      'Landing page — от 80 000 ₽',
      'Сложные продукты — индивидуально',
      'Цена зависит от объёма и задач проекта',
    ],
  },
  {
    icon: Timer,
    q: 'Как долго длится проект?',
    tag: 'Сроки',
    a: [
      'Landing page — 2–3 недели',
      'Сайт — 3–5 недель',
      'SaaS продукт — 6–12 недель',
      'Срок фиксируется до старта работы',
    ],
  },
  {
    icon: Users,
    q: 'Работаете ли вы со стартапами?',
    tag: 'Клиенты',
    a: [
      'Да, работаем со стартапами и бизнесом',
      'Есть MVP-пакеты для быстрого запуска',
      'Помогаем на ранних стадиях продукта',
    ],
  },
  {
    icon: RefreshCw,
    q: 'Можно ли вносить правки?',
    tag: 'Поддержка',
    a: [
      '2–3 раунда правок включены',
      'Дополнительные — отдельно',
      'Поддержка после сдачи доступна',
    ],
  },
  {
    icon: Code2,
    q: 'Используете ли вы Figma?',
    tag: 'Инструменты',
    a: [
      'Да, вся работа в Figma',
      'Auto-layout и компоненты',
      'Готовые файлы для разработчиков',
    ],
  },
  {
    icon: Workflow,
    q: 'Как проходит процесс работы?',
    tag: 'Процесс',
    a: [
      'Бриф → Исследование → Концепция',
      'Дизайн → Тестирование → Передача',
      'Каждый этап согласуется с клиентом',
    ],
  },
];

export default function FAQ() {
  const { ref } = useIntersectionObserver(0.1);

  const [active, setActive] = useState<number | null>(null);
  const [displayed, setDisplayed] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (active === displayed) return;

    setAnimating(true);

    const timeout = setTimeout(() => {
      setDisplayed(active);
      setAnimating(false);
    }, 220);

    return () => clearTimeout(timeout);
  }, [active]);

  const activeFaq = displayed !== null ? faqs[displayed] : null;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 overflow-hidden bg-[#f7f8fc]"
    >
      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f6f7fb] to-[#eef1f8]" />

        <div className="absolute top-[-150px] left-1/4 w-[600px] h-[600px] bg-amber-200/30 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-[-200px] w-[700px] h-[700px] bg-blue-200/30 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-200px] left-[10%] w-[500px] h-[500px] bg-violet-200/20 blur-[160px] rounded-full animate-pulse" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* LEFT */}
          <div className="relative h-[360px]">

            <div
              className={`
                absolute inset-0 transition-all duration-300 ease-out
                ${animating ? 'opacity-0 translate-y-3 blur-sm' : 'opacity-100 translate-y-0'}
              `}
            >

              {activeFaq === null ? (
                <div>
                  <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-500 mb-4 block">
                    FAQ
                  </span>

                  <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight">
                    Часто задаваемые <br /> вопросы
                  </h2>

                  <p className="mt-6 text-gray-500 text-sm max-w-xs">
                    Нажмите на вопрос справа, чтобы увидеть ответ.
                  </p>
                </div>
              ) : (
                <div key={displayed} className="transition-all duration-500 animate-[fadeUp_0.4s_ease]">

                  <p className="text-amber-600 text-sm font-semibold mb-3 flex items-center gap-2">
                    {activeFaq.icon && <activeFaq.icon size={14} />}
                    {activeFaq.tag}
                  </p>

                  <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight mb-5">
                    {activeFaq.q}
                  </h2>

                  <ul className="space-y-2 text-sm text-gray-600">
                    {activeFaq.a.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-amber-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>
              )}

            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-2">

            {faqs.map((faq, i) => {
              const open = active === i;
              const Icon = faq.icon;

              return (
                <div
                  key={faq.q}
                  onClick={() => setActive(open ? null : i)}
                  className={`
                    border-b border-gray-200 cursor-pointer
                    transition-all duration-500
                    hover:translate-x-1
                    ${active !== null && !open ? 'opacity-40' : 'opacity-100'}
                  `}
                >

                  <button className="w-full flex items-center justify-between py-6 text-left group">

                    <div className="flex items-center gap-3">

                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:shadow-md transition">
                        <Icon size={14} className="text-gray-500 group-hover:text-amber-500" />
                      </div>

                      <span className={`
                        text-base font-semibold transition-colors duration-300
                        ${open ? 'text-amber-600' : 'text-[#0a0a0a]'}
                      `}>
                        {faq.q}
                      </span>

                    </div>

                    <span className="w-8 h-8 rounded-full border flex items-center justify-center group-hover:border-amber-400 transition">
                      {open ? (
                        <Minus size={14} className="text-amber-500" />
                      ) : (
                        <Plus size={14} className="text-gray-400 group-hover:text-amber-500" />
                      )}
                    </span>

                  </button>

                </div>
              );
            })}

          </div>

        </div>
      </div>

      {/* animation */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
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