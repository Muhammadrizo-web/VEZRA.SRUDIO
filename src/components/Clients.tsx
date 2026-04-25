import React from 'react';

import l1 from '../logos/95a14c73108d 1 (1).png';
import l2 from '../logos/Artboard 1 copy 4@4x 1.png';
import l3 from '../logos/Artboard 1 copy@3x (3) 1.png';
import l4 from '../logos/Artboard 1 copy@4x (4) 1.png';
import l5 from '../logos/Frame 2147227075.png';
import l6 from '../logos/Frame 2147227077.png';
import l7 from '../logos/Frame.png';
import l8 from '../logos/Group 1707478302.png';
import l9 from '../logos/Group 2087325805.png';
import l10 from '../logos/Vector.png';

const logos: string[] = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10];

export default function Clients(): JSX.Element {
  return (
    <section className="relative py-32 bg-[#fafafa] overflow-hidden">

      {/* SOFT LIGHT LAYERS */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200/20 blur-[120px] rounded-full" />
        <div className="absolute top-20 right-[-200px] w-[500px] h-[500px] bg-purple-200/20 blur-[120px] rounded-full" />
      </div>

      <div className="w-screen relative">

        {/* ===== TITLE ===== */}
        <div className="text-center mb-20 px-4">

          <p className="text-sm md:text-base tracking-[0.35em] uppercase text-gray-400 mb-6">
            Нам доверяют
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold leading-snug">

            Клиенты, которые <br />

            <span className="
              text-transparent bg-clip-text
              bg-gradient-to-r from-black via-gray-600 to-black
              font-bold
            ">
              достигают выдающихся результатов
            </span>

            <br />

            <span className="text-gray-500">
              вместе с нами
            </span>

          </h2>

          {/* subtle line */}
          <div className="mt-8 flex justify-center">
            <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          </div>

        </div>

        {/* ===== MARQUEE ===== */}
        <div className="relative w-screen overflow-hidden">

          {/* FADE LEFT */}
          <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#fafafa] to-transparent z-10" />

          {/* FADE RIGHT */}
          <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#fafafa] to-transparent z-10" />

          {/* TRACK */}
          <div className="flex w-max animate-marquee gap-28 items-center py-10">

            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="
                  flex items-center justify-center
                  px-7 py-5
                  rounded-2xl

                  bg-white/70
                  border border-gray-200/70
                  backdrop-blur-xl

                  shadow-[0_10px_30px_rgba(0,0,0,0.04)]

                  transition-all duration-300
                  hover:scale-110 hover:bg-white hover:shadow-lg
                "
              >
                <img
                  src={logo}
                  alt="client logo"
                  className="h-10 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}