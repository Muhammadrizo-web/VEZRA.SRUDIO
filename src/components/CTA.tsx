import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function CTA() {
  const { ref, isVisible } = useIntersectionObserver(0.2);
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Logo & text */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <img
              src="/Logo.png"
              alt="Studio Logo"
              className="h-16 w-auto object-contain mb-10 opacity-90"
            />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-500 mb-4 block">
              Начнём?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Расскажите<br />о своём проекте
            </h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Мы свяжемся с вами в течение одного рабочего дня, чтобы обсудить детали и подготовить предложение.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {[
                { label: 'Email', value: 'hello@studio.ru' },
                { label: 'Телефон', value: '+7 (999) 123-45-67' },
                { label: 'Telegram', value: '@studio_design' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-white/30 text-xs w-16">{item.label}</span>
                  <span className="text-white/70 text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <CheckCircle size={48} className="text-amber-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3">Заявка отправлена!</h3>
                <p className="text-white/50 text-sm">
                  Мы свяжемся с вами в течение рабочего дня.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2 tracking-wide">
                    Имя
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Как вас зовут?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-amber-500/60 focus:bg-white/8 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2 tracking-wide">
                    Телефон / Email
                  </label>
                  <input
                    type="text"
                    required
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    placeholder="+7 (999) 000-00-00 или email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-amber-500/60 focus:bg-white/8 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2 tracking-wide">
                    О проекте
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Кратко расскажите о вашем проекте и задачах..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-amber-500/60 focus:bg-white/8 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-amber-500 hover:bg-amber-400 text-[#0a0a0a] rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/30 disabled:opacity-60 disabled:scale-100"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-[#0a0a0a]/30 border-t-[#0a0a0a] rounded-full animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  {loading ? 'Отправляем...' : 'Отправить заявку'}
                </button>

                <p className="text-center text-white/25 text-xs">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
