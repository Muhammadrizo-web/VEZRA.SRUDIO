import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    let start: number | null = null;
    const duration = 1400;

    const animate = (t: number) => {
      if (!start) start = t;

      const progress = (t - start) / duration;
      const current = Math.min(progress * target, target);

      setValue(current);

      if (progress < 1) {
        frame.current = requestAnimationFrame(animate);
      }
    };

    setValue(0);
    frame.current = requestAnimationFrame(animate);

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [active, target]);

  return Math.floor(value);
}

function StatCard({
  stat,
  active,
  delay,
}: {
  stat: Stat;
  active: boolean;
  delay: number;
}) {
  const count = useCountUp(stat.value, active);

  return (
    <div
      className="text-center opacity-0 animate-fadeUp"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      <div className="text-5xl md:text-6xl font-semibold text-black tracking-tight">
        {count}
        <span className="text-gray-400 ml-1">{stat.suffix}</span>
      </div>

      <div className="mt-3 text-sm text-gray-500 tracking-wide">
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useIntersectionObserver(0.35);
  const [active, setActive] = useState(false);

  const stats: Stat[] = [
    { value: 5, suffix: '+', label: 'Клиенты в разных странах' },
    { value: 20, suffix: '+', label: 'Успешных проектов за год' },
    { value: 92, suffix: '%', label: 'Клиенты по рекомендации' },
    { value: 4, suffix: '.9/5', label: 'Отзывы от покупателей' },
  ];

  // 🔥 RESET LOGIC (ВАЖНО — теперь правильно)
  useEffect(() => {
    if (isVisible) {
      setActive(false);
      const t = setTimeout(() => setActive(true), 80); // restart animation
      return () => clearTimeout(t);
    } else {
      setActive(false);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref as any}
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* soft premium glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/30 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-20">
          <p className="text-xl tracking-[0.35em] uppercase text-gray-400 mb-4">
            Результаты
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Цифры говорят сами
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 justify-items-center">
          {stats.map((s, i) => (
            <StatCard
              key={s.label + active}
              stat={s}
              active={active}
              delay={i * 120}
            />
          ))}
        </div>

      </div>
    </section>
  );
}