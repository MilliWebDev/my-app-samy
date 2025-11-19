"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  message: string;
  avatar: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah K.",
      role: "Entrepreneure",
      message:
        "Grâce à son expertise, j’ai pu restructurer mon business et atteindre une croissance que je n’imaginais pas possible.",
      avatar: "/avatars/avatar1.png",
    },
    {
      name: "Daniel M.",
      role: "Fondateur de D-Market",
      message:
        "Un véritable stratège. Ses conseils m’ont permis d’éviter plusieurs erreurs et d’optimiser mon entreprise.",
      avatar: "/avatars/avatar2.png",
    },
    {
      name: "Lucie A.",
      role: "Coachsportive",
      message:
        "Professionnel, inspirant et vraiment à l'écoute. Je recommande à 100% pour toute personne voulant faire grandir son projet.",
      avatar: "/avatars/avatar3.png",
    },
  ];

  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900">Témoignages</h2>
          <p className="mt-2 text-gray-600">
            Ce que disent ceux que j’ai accompagnés.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-xl transition relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Message */}
              <p className="text-gray-700 leading-relaxed mb-6">{item.message}</p>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
