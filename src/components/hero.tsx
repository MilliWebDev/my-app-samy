import Image from "next/image";
import { Flame } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-4xl font-extrabold leading-tight text-gray-900">
            Le phénix de la renaissance{" "}
            <span className="text-blue-600">Entrepreneuriale</span>
          </h1>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0 tracking-wide font-black text-lg">
            Visionnaire et stratège passionné,{" "}
            <span className="text-blue-800">Mikael Daly Yahile </span>est le
            fondateur de Phœnix Groupe, une entreprise née d’une conviction
            profonde : aucune entreprise n’est condamnée à{" "}
            <span className="line-through">mourir</span>, tant qu’il existe une
            flamme pour la raviver.
            <span className="inline-block ">
              <Flame color={"#FF4500"} />
            </span>
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition">
            Lire plus
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 relative flex justify-center md:justify-end">
          {/* Background Abstract Shape */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-[60%] blur-xl transform translate-x-8 -translate-y-8 -z-10"></div>

          <Image
            src="/hero2.png"
            width={500}
            height={500}
            alt="Coach"
            className="w-72 md:w-96 lg:w-[420px] bg-transparent object-contain relative z-10 "
          />
        </div>
      </div>

      {/* Optional faint overlay background */}
      <div className="absolute inset-0 bg-[url('/patterns/bg-dots.png')] opacity-5 pointer-events-none"></div>
    </section>
  );
}
