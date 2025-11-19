"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  category: string;
  image: string;
  link: string;
}

export default function PortfolioSection() {
  const projects: Project[] = [
    {
      title: "Refonte d'identité visuelle",
      category: "Branding",
      image: "/portfolio/brand1.jpg",
      link: "#",
    },
    {
      title: "Développement d'un Dashboard",
      category: "Web App",
      image: "/portfolio/web1.jpg",
      link: "#",
    },
    {
      title: "Campagne Marketing Digital",
      category: "Marketing",
      image: "/portfolio/marketing1.jpg",
      link: "#",
    },
    {
      title: "Landing Page Conversion",
      category: "Design UI/UX",
      image: "/portfolio/uiux1.jpg",
      link: "#",
    },
    {
      title: "Optimisation Business",
      category: "Stratégie",
      image: "/portfolio/strategy1.jpg",
      link: "#",
    },
    {
      title: "Système d’automatisation",
      category: "Automation",
      image: "/portfolio/automation1.jpg",
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900">Portfolio</h2>
          <p className="text-gray-600 mt-2">
            Quelques projets que j’ai eu le plaisir de réaliser.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Project image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Text content */}
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-5 group-hover:translate-y-0">
                <p className="text-sm text-gray-300">{project.category}</p>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>

              {/* Visit Link Button */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-500"
                whileHover={{ scale: 1.15 }}
              >
                <ExternalLink className="w-5 h-5 text-gray-900" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
