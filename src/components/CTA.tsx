import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section
      className="relative min-h-[75vh] overflow-hidden px-6 pt-32 pb-20 text-white lg:px-12"
      style={{
        backgroundImage: "url('/bcfoto1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(52,211,153,0.16),transparent_34%)]" />

      {/* <div className="pointer-events-none absolute left-1/2 top-[20%] -translate-x-1/2 select-none text-[120px] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.05] md:text-[180px]">
        CONTACT
      </div> */}

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
        <div className="flex h-full flex-col justify-between animate-[fadeLeft_.85s_cubic-bezier(.22,1,.36,1)_both]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2 text-sm backdrop-blur-xl">
              <Send size={14} />
              Contact
            </div>

            <h2 className="mt-7 text-4xl font-semibold leading-[1.02] tracking-[-0.055em] md:text-6xl">
              Get in touch
            </h2>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
              Have a question or want to discuss your project? Send us a message and we will contact you shortly.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            <InfoCard icon={Mail} title="Email us" value="vezrastudio.uz@gmail.com" />
            <InfoCard icon={Phone} title="Call us" value="+998 98 189 11 17" />
            <InfoCard icon={MapPin} title="Our location" value="Tashkent, Uzbekistan" />
          </div>
        </div>

        <div className="animate-[fadeRight_.9s_cubic-bezier(.22,1,.36,1)_both]">
          <form className="flex h-full flex-col rounded-[28px] border border-white/15 bg-white/[0.06] p-4 backdrop-blur-2xl shadow-[0_28px_80px_rgba(0,0,0,.34)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_100px_rgba(0,0,0,.44)]">
            <div className="space-y-4">
              <Field placeholder="Name" />
              <Field placeholder="Email" />

              <textarea
                placeholder="Message"
                className="h-[220px] w-full resize-none rounded-[22px] border border-white/10 bg-black/20 px-6 py-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-emerald-300/30 focus:bg-black/28"
              />
            </div>

            <button
              type="submit"
              className="mt-4 h-16 w-full rounded-[22px] bg-white text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_14px_35px_rgba(255,255,255,.14)]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes fadeLeft {
          from {
            opacity: 0;
            transform: translateX(-24px);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        @keyframes fadeRight {
          from {
            opacity: 0;
            transform: translateX(24px);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}

function Field({ placeholder }: { placeholder: string }) {
  return (
    <input
      placeholder={placeholder}
      className="h-14 w-full rounded-[22px] border border-white/10 bg-black/20 px-6 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-emerald-300/30 focus:bg-black/28"
    />
  );
}

function InfoCard({
  icon: Icon,
  title,
  value,
}: {
  icon: any;
  title: string;
  value: string;
}) {
  return (
    <div className="group flex items-center gap-4 rounded-[22px] border border-white/12 bg-white/[0.055] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:shadow-[0_18px_45px_rgba(0,0,0,.22)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/20">
        <Icon size={20} strokeWidth={1.8} />
      </div>

      <div className="flex-1">
        <div className="text-sm font-semibold">{title}</div>
        <div className="mt-1 text-sm text-white/50">{value}</div>
      </div>

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
        <ArrowUpRight size={17} />
      </div>
    </div>
  );
}