import { useEffect, useRef, useState } from "react";

const ITEMS = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
];

const REPEAT = 4;

export default function Clients() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    const mouse = { x: -9999, y: -9999 };
    const smooth = { x: -9999, y: -9999 };
    const last = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = section.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const updateMouse = () => {
      const rect = section.getBoundingClientRect();
      mouse.x = last.x - rect.left;
      mouse.y = last.y - rect.top;
    };

    const onMove = (e: MouseEvent) => {
      last.x = e.clientX;
      last.y = e.clientY;
      updateMouse();
    };

    const onScroll = () => {
      if (last.x !== -9999) updateMouse();
    };

    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      smooth.x += (mouse.x - smooth.x) * 0.08;
      smooth.y += (mouse.y - smooth.y) * 0.08;

      const gap = 28;
      const radius = 260;

      for (let x = 0; x < width; x += gap) {
        for (let y = 0; y < height; y += gap) {
          const dx = smooth.x - x;
          const dy = smooth.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const power = Math.max(0, 1 - dist / radius);
          const fade = Math.pow(power, 2.5);

          const alpha = 0.03 + fade * 0.85;
          const size = 0.8 + fade * 2.4;

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    section.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    let raf = 0;
    let last = performance.now();
    let offset = 0;
    let singleWidth = 0;

    let speed = 85;
    let target = 85;

    const measure = () => {
      singleWidth = track.scrollWidth / REPEAT;
    };

    const onEnter = () => (target = 40);
    const onLeave = () => (target = 85);

    const updateActive = () => {
      const rect = viewport.getBoundingClientRect();
      const center = rect.left + rect.width / 2;

      const cards = track.querySelectorAll<HTMLElement>("[data-index]");

      let best = 0;
      let min = Infinity;

      cards.forEach((card) => {
        const r = card.getBoundingClientRect();
        const c = r.left + r.width / 2;
        const d = Math.abs(c - center);

        if (d < min) {
          min = d;
          best = Number(card.dataset.index);
        }
      });

      if (best !== activeRef.current) {
        activeRef.current = best;
        setActive(best);
      }
    };

    const animate = (t: number) => {
      const dt = Math.min(32, t - last);
      last = t;

      speed += (target - speed) * 0.06;
      offset -= (speed * dt) / 1000;

      if (Math.abs(offset) >= singleWidth) {
        offset += singleWidth;
      }

      track.style.transform = `translate3d(${offset}px,0,0)`;

      updateActive();
      raf = requestAnimationFrame(animate);
    };

    measure();

    window.addEventListener("resize", measure);
    viewport.addEventListener("mouseenter", onEnter);
    viewport.addEventListener("mouseleave", onLeave);

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      viewport.removeEventListener("mouseenter", onEnter);
      viewport.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const repeated = Array.from({ length: REPEAT }, () => ITEMS).flat();

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#05060a] text-white flex flex-col justify-center items-center"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* red accent */}
      <div className="absolute left-[-250px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-red-500/10 blur-[180px]" />

      {/* green accent */}
      <div className="absolute right-[-250px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-green-500/10 blur-[180px]" />

      {/* lamp */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="relative flex flex-col items-center">
          <div className="w-[3px] h-16 bg-gradient-to-b from-white/35 to-white/5" />

          <div className="relative w-[84px] h-[34px] rounded-b-[50%] bg-gradient-to-b from-[#2b2d34] via-[#17181d] to-[#07080c] shadow-[0_8px_28px_rgba(0,0,0,.7)]">
            <div className="absolute left-1/2 top-[-5px] -translate-x-1/2 w-[62px] h-[16px] rounded-t-full bg-gradient-to-b from-[#3a3d46] to-[#15161b]" />

            <div className="absolute inset-x-4 bottom-[-3px] h-[7px] rounded-full bg-white/80 blur-[2px]" />
            <div className="absolute inset-x-5 bottom-0 h-[2px] rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,.95)]" />
          </div>

          <div
            className="absolute left-1/2 top-[92px] -translate-x-1/2 w-[280px] h-[620px] opacity-85 animate-pulse"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,.34), rgba(255,255,255,.12) 35%, rgba(255,255,255,.035) 68%, transparent 100%)",
              clipPath: "polygon(41% 0%, 59% 0%, 86% 100%, 14% 100%)",
              filter: "blur(.4px)",
            }}
          />
        </div>
      </div>

      {/* title */}
      <div className="relative z-30 text-center mb-24">
        <p className="text-xs tracking-[0.4em] text-white/40 mb-4">
          TRUSTED CLIENTS
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
          Бренды, которые
          <br />
          выглядят дороже
          <br />
          <span className="bg-gradient-to-r from-red-400 via-white to-green-400 bg-clip-text text-transparent">
            вместе с нами
          </span>
        </h1>
      </div>

      {/* logos */}
      <div
        ref={viewportRef}
        className="relative z-40 w-screen overflow-hidden py-10"
      >
        <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#05060a] to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#05060a] to-transparent z-20" />

        <div ref={trackRef} className="flex gap-8 w-max will-change-transform">
          {repeated.map((logo, i) => {
            const realIndex = i % ITEMS.length;
            const isActive = active === realIndex;

            return (
              <div
                key={i}
                data-index={realIndex}
                className={`
                  w-[240px] h-[110px]
                  rounded-[28px]
                  border
                  flex items-center justify-center
                  backdrop-blur-xl
                  transition-all duration-500
                  ${
                    isActive
                      ? "bg-white/10 border-white/40 scale-110 shadow-[0_0_35px_rgba(255,255,255,.16),-12px_0_40px_rgba(255,0,70,.18),12px_0_40px_rgba(0,255,120,.18)]"
                      : "bg-white/5 border-white/10 opacity-60"
                  }
                `}
              >
                <img
                  src={logo}
                  alt="logo"
                  draggable={false}
                  className="max-h-[54px] max-w-[150px] object-contain brightness-0 invert"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}