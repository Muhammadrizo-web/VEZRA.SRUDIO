import { useEffect, useRef, useState } from 'react';
import { FiGlobe } from "react-icons/fi";
import { LuClipboardCheck } from "react-icons/lu";
import { TbShieldCheck } from "react-icons/tb";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const stats = [
  {
    value: 5,
    suffix: '+',
    icon: <FiGlobe />,
    title: 'Стран присутствия',
    description:
      'Работаем с клиентами на международных рынках, адаптируя решения под локальные требования.',
  },
  {
    value: 20,
    suffix: '+',
    icon: <LuClipboardCheck />,
    title: 'Успешных проектов в год',
    description:
      'Сопровождаем регистрацию, документацию и вывод медицинских изделий на рынок.',
  },
  {
    value: 92,
    suffix: '%',
    icon: <TbShieldCheck />,
    title: 'Долгосрочное сотрудничество',
    description:
      'Большая часть новых обращений приходит благодаря доверию действующих партнёров.',
  },
  {
    value: 4.9,
    suffix: '/5',
    icon: <HiOutlineBadgeCheck />,
    title: 'Высокая клиентская оценка',
    description:
      'Высокая оценка качества работы, точности сроков и профессионального сопровождения.',
  },
];

function CountNumber({ value, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }

    let start = null;
    let animationFrame;
    const duration = 1400;

    const animate = (time) => {
      if (!start) start = time;

      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(value * eased);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, active]);

  return value % 1 === 0 ? Math.floor(count) : count.toFixed(1);
}

function StatCard({ item, index, active }) {
  return (
    <div
      className={`stat-card ${active ? 'show' : ''}`}
      style={{ transitionDelay: active ? `${index * 120}ms` : '0ms' }}
    >
      <div className="stat-icon">{item.icon}</div>

      <div className="stat-number">
        <CountNumber value={item.value} active={active} />
        <span>{item.suffix}</span>
      </div>

      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(false);

          setTimeout(() => {
            setActive(true);
          }, 100);
        } else {
          setActive(false);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-bg" />

      <div className="stats-container">
        <div className={`stats-title ${active ? 'show' : ''}`}>
          <span>«РЕЗУЛЬТАТЫ»</span>
          <h2>Цифры, которые подтверждают опыт</h2>
        </div>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <StatCard
              key={item.title}
              item={item}
              index={index}
              active={active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}