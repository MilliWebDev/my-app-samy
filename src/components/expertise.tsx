"use client";

import { motion } from "motion/react";
import { Flame, TrendingUp, Lightbulb, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Analyse approfondie des faiblesses et opportunités",
    description:
      "Analyse profonde de votre situation pour révéler les vraies causes de stagnation et identifier les opportunités cachées.",
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: "Optimisation de la visibilité, tant en ligne que sur le terrain",
    description:
      "Refonte de l’identité, de la mission et de la stratégie pour aligner votre entreprise sur un futur ambitieux.",
    icon: <Flame className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Restructuration stratégique pour un nouvel élan commercial",
    description:
      "Mise en place de leviers puissants pour augmenter vos revenus, fidéliser vos clients et scaler durablement.",
    icon: <TrendingUp className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Accompagnement personnalisé pour atteindre des résultats mesurables",
    description:
      "Amélioration de votre organisation interne, automatisation et maîtrise des marges pour une entreprise performante.",
    icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
  },
];

export default function ResponsiveTimelineFixed() {
  return (
    <section className="py-20 bg-gray-50" id="expertise">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          <span className="bg-linear-to-r from-purple-700 via-red-600 to-orange-500 bg-clip-text text-transparent">
            Un Parcours de Transformation
          </span>
        </motion.h2>
        <p className="mb-10">
          <span className="bg-linear-to-r from-purple-700 via-red-600 to-orange-500 bg-clip-text text-transparent font-extrabold inline-block">La Stratégie G15: Le Cœur de Notre Méthode </span> Notre approche repose sur
          la stratégie G15, une méthodologie exclusive et performante développée
          pour répondre aux besoins réels des entreprises en perte de vitesse.
          Cette stratégie innovante combine
        </p>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-1 bg-linear-to-b from-purple-500 via-red-500 to-orange-400"></div>

          {services.map((service, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`mb-16 flex flex-col md:flex-row items-start md:items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Dot */}
                <span className="absolute left-6 md:left-1/2 transform -translate-x-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-gradient-to-br from-purple-500 via-red-500 to-orange-400 z-10">
                  {service.icon}
                </span>

                {/* Content */}
                <div className="mt-4 md:mt-0 md:w-1/2 md:px-8 ml-16 md:ml-0">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
