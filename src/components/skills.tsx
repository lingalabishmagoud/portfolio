"use client";

import { motion } from "framer-motion";
import { Code, Palette, Database, Globe, Shield, Users } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Palette,
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Bootstrap 5", level: 85 },
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 75 },
        { name: "Java", level: 70 },
        { name: "C", level: 75 },
        { name: "PHP", level: 70 },
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "UI Design", level: 80 },
        { name: "Session Management", level: 75 },
        { name: "Secure Login", level: 80 },
        { name: "Responsive Design", level: 85 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Database,
      skills: [
        { name: "Git", level: 80 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "MySQL", level: 70 },
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: [
        { name: "Ethical Hacking", level: 65 },
        { name: "Bug Tracing", level: 70 },
        { name: "Vulnerability Assessment", level: 65 },
        { name: "Secure Coding", level: 75 },
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Communication", level: 85 },
        { name: "Teamwork", level: 90 },
        { name: "Adaptability", level: 85 },
        { name: "Time Management", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
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
            Here are the technologies and skills I've been working with
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
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
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
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Always Learning
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with the latest 
              technologies. Currently exploring advanced React concepts, Node.js backend 
              development, and advanced cybersecurity practices to become a well-rounded 
              full-stack developer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
