import { Flame } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[url(/hero.jpg)] bg-cover bg-center min-h-[80vh]">
      <div className="container  mx-auto  px-6 md:px-12 lg:px-20 py-20 flex flex-col md:flex-row items-center justify-between">
         {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent  z-10 pointer-events-none"></div>
        {/* Left Content */}
        <div className="w-full z-40 md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-4xl font-extrabold leading-tight text-white">
            Le phénix de la renaissance{" "}
            <span className="text-amber-600">Entrepreneuriale</span>
          </h1>
          <p className="text-white max-w-md mx-auto md:mx-0 tracking-wide font-black text-lg">
            Visionnaire et stratège passionné,{" "}
            <span className="text-amber-600">Mikael Daly Yahile </span>est le
            fondateur de Phœnix Groupe, une entreprise née d’une conviction
            profonde : aucune entreprise n’est condamnée à{" "}
            <span className="line-through">mourir</span>, tant qu’il existe une
            flamme pour la raviver.
            <span className="inline-block ">
              <Flame color={"#FF4500"} />
            </span>
          </p>
          <button className="px-8 py-3 bg-amber-600 text-white rounded-full font-semibold shadow hover:bg-amber-400 transition">
            Lire plus
          </button>
        </div>

      
      </div>

      {/* Optional faint overlay background */}
      <div className="absolute inset-0 bg-[url('/patterns/bg-dots.png')] opacity-5 pointer-events-none"></div>
    </section>
  );
}
