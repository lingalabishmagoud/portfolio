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

    // Only run on client side
    if (typeof window !== 'undefined') {
      // Set initial size
      handleResize();

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const scrollToNext = () => {
    if (typeof document !== 'undefined') {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-transparent" />

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
          {/* Left Side text */}
          <div className="text-left">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6 backdrop-blur-md"
            >
              🚀 Welcome to my digital workspace
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-foreground">Hi, I&apos;m </span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 filter drop-shadow-[0_0_15px_rgba(0,243,255,0.4)]">Lingala Bishma Goud</span>
            </motion.h1>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-6 font-semibold"
            >
              <span className="text-white">Android Developer</span>
              <span className="text-primary mx-2">|</span>
              <span className="text-white/80">Web Application Expert</span>
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-lg mb-10"
            >
              Dedicated Computer Science student creating exceptional Frontend, Full-Stack, and Android solutions. Passionate about clean code, scalable architectures, and elegant user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="#contact"
                className="bg-primary text-black px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              <a
                href="/files/resume/LINGALA BISHMA GOUD RESUME 1.pdf"
                download="Lingala-Bishma-Goud-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </motion.div>

            {/* Social Links aligned left */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex space-x-4"
            >
              {[
                { icon: Github, href: "https://github.com/lingalabishmagoud", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/lingala-bishma-goud", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/bishmalingalagoud?igsh=YnVrY3g3bjdyOGx2", label: "Instagram" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:text-primary hover:border-primary/50 transition-all hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Side: Floating Expert Device Mockups */}
          <div className="relative hidden lg:flex justify-center items-center h-[600px] w-full perspective-1000">
            {/* Android Phone Mockup (Front) */}
            <motion.div
              animate={{ y: [0, -15, 0], rotateY: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute z-20 glass-panel p-2 rounded-[2.5rem] w-[280px] h-[550px] shadow-[0_20px_50px_rgba(0,0,0,0.5),_inset_0_0_15px_rgba(0,243,255,0.2)] border-t border-l border-white/20 transform rotate-12 right-10"
            >
              <div className="w-full h-full bg-[#0a0a0a] rounded-[2rem] overflow-hidden relative border border-white/5 flex flex-col">
                {/* Fake Android Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-3xl w-32 mx-auto z-30"></div>

                {/* Apps Header */}
                <div className="pt-8 px-4 pb-2 bg-gradient-to-b from-primary/20 to-transparent z-10">
                  <div className="text-white text-lg font-bold">CashTrackr</div>
                  <div className="text-primary text-xs">Finance Dashboard</div>
                </div>

                {/* Profile/App visual representation */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/files/images/IMG_20250725_234801.jpg"
                  alt="Profile Profile"
                  className="w-full h-56 object-cover opacity-60 filter contrast-125 mask-image-gradient"
                />

                {/* Fake UI Elements */}
                <div className="p-4 space-y-3 flex-1 relative z-10">
                  <div className="w-full glass-panel rounded-lg p-3 flex items-center justify-between">
                    <span className="text-xs text-white">Monthly Analytics</span>
                    <span className="text-xs text-green-400 font-bold">+24%</span>
                  </div>
                  <div className="w-full h-20 glass-panel rounded-lg relative overflow-hidden">
                    {/* Fake graph lines */}
                    <div className="absolute bottom-0 w-full h-10 border-t-2 border-primary filter drop-shadow-[0_-5px_5px_rgba(0,243,255,0.5)] transform -skew-y-6 translate-y-2"></div>
                  </div>
                  <div className="w-2/3 h-8 glass-panel rounded-lg mt-auto"></div>
                </div>
              </div>
            </motion.div>

            {/* Floating Terminal/Web IDE Mockup (Back/Left) */}
            <motion.div
              animate={{ y: [0, 15, 0], rotateX: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute z-10 glass-panel p-1 rounded-xl w-[400px] h-[280px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t border-l border-white/10 left-0 bottom-20"
            >
              <div className="w-full h-full bg-[#0d0d0d]/90 rounded-lg p-5 font-mono text-sm overflow-hidden flex flex-col">
                {/* Window Controls */}
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                {/* Code Content */}
                <div className="text-gray-300 space-y-2 flex-1">
                  <p><span className="text-purple-400 font-bold">const</span> <span className="text-blue-400 font-bold">expertDeveloper</span> = {'{'}</p>
                  <p className="ml-4">name: <span className="text-green-400">&apos;Lingala Bishma Goud&apos;</span>,</p>
                  <p className="ml-4">specialties: [</p>
                  <p className="ml-8"><span className="text-green-400">&apos;Android Architecture&apos;</span>,</p>
                  <p className="ml-8"><span className="text-green-400">&apos;Modern React Config&apos;</span>,</p>
                  <p className="ml-8"><span className="text-green-400">&apos;Full-Stack Solutions&apos;</span></p>
                  <p className="ml-4">],</p>
                  <p className="ml-4">passion: <span className="text-green-400">&apos;Building Scalable Apps&apos;</span></p>
                  <p>{'};'}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator centered at bottom */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            onClick={scrollToNext}
            className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center"
            aria-label="Scroll to next section"
          >
            <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
