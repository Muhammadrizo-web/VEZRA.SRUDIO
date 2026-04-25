import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with subtle zoom animation */}
      <div
        className={`absolute inset-0 transition-transform duration-[8000ms] ease-out ${loaded ? 'scale-105' : 'scale-110'}`}
        style={{
          backgroundImage: 'url(/bk02020.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/1 via-[#0a0a0a]/50 to-[#0a0a0a]/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]/30" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* <div
          className={`transition-all duration-1000 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/70 text-xs font-medium tracking-[0.2em] uppercase">
            Дизайн-студия
          </span>
        </div> */}

        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6 transition-all duration-1000 delay-200 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Создаём дизайн,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200">
            который работает
          </span>
        </h1>

        <p
          className={`text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-10 font-light leading-relaxed transition-all duration-1000 delay-400 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Мы — студия полного цикла, предоставляющая услуги в области стратегии, дизайна и креатива, которая помогает как начинающим, так и уже состоявшимся брендам расти быстрее.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-600 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a0a0a] rounded-full font-semibold text-sm tracking-wide hover:bg-amber-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
          >
            Обсудить проект
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#услуги"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/25 text-white rounded-full font-medium text-sm tracking-wide hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            Наши кейсы
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-white/70 text-xl tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={30} className="text-white/70 animate-bounce" />
      </div>
    </section>
  );
}
