import Image from "next/image";
export default function AboutSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <Image
              src={"/hero2.png"} // replace with your transparent portrait
              width={800}
              height={800}
              alt="Mikael Daly Yahile"
              className="w-full h-full object-cover rounded-2xl shadow-xl border border-gray-200"
            />

            {/* Accent circle */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-linear-to-br from-amber-500 to-orange-600 rounded-full blur-xl opacity-50"></div>
          </div>
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            À propos de{" "}
            <span className="text-amber-600">Mikael Daly Yahile</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Fondateur visionnaire de <span className="font-semibold text-blue-700">Phœnix Groupe</span>, 
            Mikael incarne la résilience, la stratégie et la transformation.
            Guidé par une conviction profonde, il croit qu’aucune entreprise n’est destinée à disparaître tant qu’il reste une flamme pour la raviver.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Entrepreneur, formateur et mentor, il accompagne dirigeants, startups 
            et organisations dans leur renaissance stratégique : diagnostic, restructuration, 
            croissance et leadership.  
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-amber-600">10+</h3>
              <p className="text-gray-600 text-sm">Années d’expérience</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-700">300+</h3>
              <p className="text-gray-600 text-sm">Entrepreneurs formés</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-red-600">40+</h3>
              <p className="text-gray-600 text-sm">Entreprises restructurées</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-indigo-700">100%</h3>
              <p className="text-gray-600 text-sm">Engagement & vision</p>
            </div>
          </div>

          <button className="px-8 py-3 bg-amber-600 text-white rounded-full font-semibold shadow hover:bg-amber-700 transition">
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
}
