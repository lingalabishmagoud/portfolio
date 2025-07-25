"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import ClientOnly from "./client-only";

export default function Hero() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Animated background elements */}
      <ClientOnly>
        <div className="absolute inset-0 overflow-hidden">
          {windowSize.width > 0 && [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
              }}
              animate={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </ClientOnly>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center py-8">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            {/* Large Professional Profile Picture */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 mx-auto rounded-3xl bg-gradient-to-r from-primary via-primary/80 to-secondary p-1.5 shadow-2xl">
              <div className="w-full h-full rounded-3xl bg-background flex items-center justify-center overflow-hidden shadow-inner">
                <img
                  src="/files/images/IMG_20250725_234801.jpg"
                  alt="Lingala Bishma Goud - Frontend Developer & Cybersecurity Enthusiast"
                  className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary">Lingala Bishma Goud</span>
          </motion.h1>

          {/* Subtitle with typing effect */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8"
          >
            <span>I'm a </span>
            <motion.span
              className="text-primary font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Frontend Developer & Cybersecurity Enthusiast
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Computer Science undergraduate skilled in frontend development and web technologies.
            Passionate about building responsive user interfaces and collaborative coding.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="/files/resume/LINGALA BISHMA GOUD RESUME 1.pdf"
              download="Lingala-Bishma-Goud-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent transition-colors flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center space-x-6 mb-16"
          >
            {[
              { icon: Github, href: "https://github.com/lingalabishmagoud", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/lingala-bishma-goud", label: "LinkedIn" },
              { icon: Instagram, href: "https://www.instagram.com/bishmalingalagoud?igsh=YnVrY3g3bjdyOGx2", label: "Instagram" },
              { icon: Mail, href: "#contact", label: "Email" },
            ].map((social, index) => {
              const Icon = social.icon;
              const isEmail = social.label === "Email";

              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  onClick={isEmail ? (e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  } : undefined}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            onClick={scrollToNext}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to next section"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <span className="text-sm mb-2">Scroll down</span>
              <ArrowDown size={24} />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
