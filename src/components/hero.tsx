"use client";
import { motion } from "motion/react";

export default function HeroSection() {
  const heading = "Révéler-Transformer-Propulser";
  return (
    <section className="relative bg-[#363417]  overflow-hidden bg-[url(/hero.jpg)] bg-cover bg-center min-h-[80vh] " id="home">
      <div className="container   px-6 md:px-12 lg:px-20 py-20 flex flex-col md:flex-row items-center justify-between">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent  z-10 pointer-events-none"></div>
        {/* Blur overlay only on mobile */}
        <div className="absolute inset-0 bg-[url(/hero.jpg)] bg-cover bg-center z-0 md:hidden filter blur-[2px]"></div>
        {/* Left Content */}
        <div className="w-full z-40 md:w-1/2 space-y-6 text-center md:text-left mt-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Handwriting / Typewriter animation */}
            <h1 className="overflow-hidden text-lg font-extrabold md:text-5xl text-amber-500 mx-auto flex flex-wrap  leading-snug lg:w-4xl">
              {heading.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 500,
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: heading.length * 0.05,
                ease: "easeOut",
              }}
              className="text-white max-w-full md:max-w-md  tracking-wide font-black text-lg mt-4 flex flex-wrap items-center gap-2"
            >
              Dans un environnement économique en constante évolution, de
              nombreuses entreprises se retrouvent confrontées à des obstacles
              qui freinent leur croissance : baisse de visibilité, perte de
              rentabilité, difficultés d’adaptation, problèmes de gestion ou
              encore manque de stratégie claire. Notre mission est simple mais
              essentielle : aider ces entreprises à se relever, à se réinventer
              et à redevenir prospères.
            </motion.p>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: heading.length * 0.05 + 1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-amber-600 text-white rounded-full font-semibold shadow hover:bg-amber-400 transition mt-4"
            >
              Lire plus
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Optional faint overlay background */}
      <div className="absolute inset-0 bg-[url('/bg-dots.jpg')] opacity-15 pointer-events-none"></div>
    </section>
  );
}
