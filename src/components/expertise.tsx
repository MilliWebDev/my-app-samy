"use client";

import { motion } from "motion/react";
import { Code, Palette, BarChart, Globe } from "lucide-react";


export default function ExpertiseSection() {
  const skills = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      description:
        "Building modern, fast, and scalable web applications using React, Laravel, Next.js, and Tailwind CSS."
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design",
      description:
        "Crafting visually appealing and user-friendly interfaces with a focus on simplicity and efficiency."
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "Data & Analytics",
      description:
        "Turning raw data into insights with dashboards, metrics, and reporting tools."
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Digital Strategy",
      description:
        "Helping businesses build an online presence and improve workflows."
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="expertise">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900">My Expertise</h2>
          <p className="mt-2 text-gray-600">
            What I do best to help your project succeed.
          </p>
        </motion.div>

        {/* Animated Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4 text-primary-500">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-center">
                {skill.title}
              </h3>

              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
