"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Mail, GraduationCap, Award } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Experience", href: "#experience", icon: Award },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed bottom-6 lg:bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex items-center"
    >
      <div className="glass-panel px-3 sm:px-4 py-2 sm:py-3 border border-white/20 rounded-full flex items-center gap-1 sm:gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5),_minmax(0,10px)_minmax(0,25px)_rgba(0,243,255,0.2)] max-w-[95vw] overflow-x-auto overflow-y-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] scrollbar-hide">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.substring(1);

          return (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`relative group p-2.5 sm:p-3 rounded-2xl transition-all duration-300 flex items-center justify-center flex-shrink-0 ${isActive
                ? "bg-primary/20 text-primary shadow-inner"
                : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />

              {/* Tooltip */}
              <span className="absolute -top-12 scale-0 group-hover:scale-100 transition-transform duration-200 origin-bottom glass-panel px-3 py-1.5 text-xs font-semibold text-white rounded-lg shadow-xl whitespace-nowrap hidden sm:block">
                {item.name}
              </span>

              {/* Active dot indicator */}
              {isActive && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,243,255,0.8)]"
                ></motion.span>
              )}
            </motion.a>
          );
        })}
      </div>
    </motion.nav>
  );
}
