"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Calendar, Languages, Award } from "lucide-react";

export default function About() {
  const personalInfo = [
    { icon: MapPin, label: "Location", value: "Hyderabad, India" },
    { icon: Phone, label: "Phone", value: "+91 9292100822" },
    { icon: Mail, label: "Email", value: "bishmagoud321@gmail.com" },
    { icon: Calendar, label: "Age", value: "21 years old" },
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Telugu", level: "Native" },
  ];

  return (
    <section id="about" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what skills I have
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Personal Information
            </h3>

            <div className="space-y-4 mb-8">
              {personalInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.2)]"
                    >
                      <Icon size={20} className="text-primary" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Languages */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Languages size={20} className="text-primary mr-2" />
                Languages
              </h4>
              <div className="space-y-2">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center p-3 rounded-lg bg-accent/50"
                  >
                    <span className="text-foreground font-medium">{lang.name}</span>
                    <span className="text-primary text-sm">{lang.level}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - About Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              Who Am I?
            </h3>

            <div className="space-y-6 text-muted-foreground whitespace-pre-line leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed text-foreground/90"
              >
                I’m a Computer Science student passionate about building user-friendly <strong className="text-primary font-bold">Frontend, Full-Stack, and Android</strong> applications.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                My professional drive revolves around solving complex problems with exceptionally clean code and leveraging collaborative tools like <strong className="text-foreground">Git & GitHub</strong>. I am highly adaptable, constantly utilizing <strong className="text-foreground">AI tools and prompt engineering</strong> workflows to develop software efficiently and intelligently.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Focusing entirely on <strong className="text-foreground">Android Architecture and Web Development</strong>, I aim to bridge the vital gap between seamless user experiences and robust, high-performance digital solutions across all platforms.
              </motion.p>
            </div>

            {/* Key Highlights */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center">
                <Award size={20} className="text-primary mr-2" />
                Key Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Mobile App Architecture",
                  "Frontend Development",
                  "UI/UX Implementation",
                  "Scalable Web Solutions",
                ].map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,243,255,0.1)' }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 rounded-xl glass-panel group cursor-pointer"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/50 group-hover:bg-primary shadow-[0_0_10px_rgba(0,243,255,0.5)] transition-all"></div>
                    <span className="text-white/80 group-hover:text-white text-sm font-medium transition-colors">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
