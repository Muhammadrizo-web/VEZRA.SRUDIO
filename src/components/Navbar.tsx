import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('about');

  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const containerRef = useRef(null);

  const links = [
    { name: 'О нас', id: 'about' },
    { name: 'Партфолио', id: 'clients' },
    { name: 'Услуги', id: 'services' },
    { name: 'Контакт', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setActive(id);
    setMenuOpen(false);
  };

  const updateIndicator = (id) => {
    const activeEl = document.querySelector(`[data-id="${id}"]`);

    if (activeEl && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const rect = activeEl.getBoundingClientRect();

      setIndicator({
        left: rect.left - containerRect.left,
        width: rect.width,
      });
    }
  };

  useEffect(() => {
    updateIndicator(active);
  }, [active, menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

        {/* LOGO */}
        <img
          src="/Logo.png"
          alt="logo"
          className="h-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md px-3 py-1"
        />

        {/* NAV */}
        <div
          ref={containerRef}
          className={`
            absolute left-1/2 -translate-x-1/2
            flex items-center gap-6
            px-5 py-2 rounded-full text-black

            bg-black/5
            border border-white/10
            backdrop-blur-2xl
            text-sm font-medium tracking-wide text-black

            transition-all duration-500

            ${menuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'}
          `}
        >
          {/* MOVING PILL */}
          <motion.div
            className="absolute top-1 bottom-1 rounded-full bg-white/10 backdrop-blur-xl z-0"
            animate={{
              left: indicator.left,
              width: indicator.width,
            }}
            transition={{
              type: 'spring',
              stiffness: 420,
              damping: 35,
            }}
          />

          {links.map((link) => (
            <button
              key={link.id}
              data-id={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`
                relative z-10 px-3 py-1
                text-[15px] md:text-[16px]
                tracking-wide
                transition-all duration-300

                ${active === link.id
                  ? 'text-black'
                  : 'text-black/60 hover:text-black'}
              `}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="z-50 p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <div className={`w-5 h-[2px] bg-black mb-1.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-5 h-[2px] bg-black mb-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-[2px] bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </div>
    </header>
  );
}