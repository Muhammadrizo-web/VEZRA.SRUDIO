export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src="/Logo.png" alt="Studio Logo" className="h-8 w-auto object-contain opacity-60" />
        <p className="text-white/25 text-xs text-center">
          © 2024 Дизайн-студия. Все права защищены.
        </p>
        <div className="flex items-center gap-6">
          {['Telegram', 'Behance', 'Dribbble'].map((s) => (
            <a
              key={s}
              href="#"
              className="text-white/30 text-xs hover:text-white/70 transition-colors duration-300"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
