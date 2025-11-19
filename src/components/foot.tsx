"use client";

import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 relative">

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-purple-700 via-red-600 to-yellow-400"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-white">PHŒNIX GROUPE</h3>
          <p className="text-gray-400 leading-relaxed">
            Redonner vie à ce qui semblait perdu.  
            Transformer chaque défi en opportunité.
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Phoenix Groupe. Tous droits réservés.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-white">Navigation</h3>
          <ul className="space-y-2">
            {["Accueil", "À propos", "Expertises", "Portfolio", "Témoignages", "Contact"].map(
              (item, index) => (
                <li key={index} className="hover:text-white transition">
                  {item}
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-white">Contact</h3>

          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-yellow-400" />
            <span>+229 00 00 00 00</span>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-yellow-400" />
            <span>contact@phoenixgroupe.com</span>
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-yellow-400" />
            <span>Cotonou, Bénin</span>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4 pt-2">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.15 }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Icon className="w-5 h-5 text-white" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom small text */}
      <div className="mt-14 text-center text-gray-500 text-sm">
        Construit avec passion et détermination. Le feu ne s’éteint jamais.
      </div>
    </footer>
  );
}
