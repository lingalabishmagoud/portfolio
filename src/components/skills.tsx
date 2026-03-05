"use client";

import { motion } from "framer-motion";
import { Code, Palette, Database, Shield, Users, Webhook, Wand2 } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Palette,
      skills: [
        { name: "HTML5 & CSS3", level: 95 },
        { name: "React / Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 80 },
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PHP", level: 75 },
        { name: "Node.js", level: 70 },
        { name: "RESTful APIs", level: 80 },
      ]
    },
    {
      title: "Android Architecture",
      icon: Code,
      skills: [
        { name: "Kotlin", level: 85 },
        { name: "Jetpack Compose", level: 80 },
        { name: "Dart / Flutter", level: 75 },
        { name: "Android Studio", level: 90 },
      ]
    },
    {
      title: "Version Control & DevOps",
      icon: Webhook,
      skills: [
        { name: "Git", level: 95 },
        { name: "GitHub Workflow", level: 90 },
        { name: "Vercel Deployment", level: 85 },
        { name: "AI Prompt Engineering", level: 90 },
      ]
    },
    {
      title: "Design & UI Tools",
      icon: Wand2,
      skills: [
        { name: "Figma", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "Glassmorphism UI", level: 90 },
        { name: "Micro-Animations", level: 85 },
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Communication", level: 95 },
        { name: "Team Lead & Collab", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "Adaptability", level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and skills I&apos;ve been working with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-accent rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary to-primary/70 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-panel p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Always Learning
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              I&apos;m constantly expanding my skill set and staying up-to-date with the latest
              technologies. Currently exploring advanced React concepts, scalable Node.js backend
              architectures, and Jetpack Compose state management tricks to build premium, well-rounded
              Full-Stack and Android applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
