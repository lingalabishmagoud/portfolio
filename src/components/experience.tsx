"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Users, Shield, Code, ExternalLink } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Indolike",
      location: "Remote",
      period: "Sep 2025 - Present",
      type: "Internship",
      description: "Developing responsive web interfaces and reusable UI components. Collaborating with designers and backend developers to deliver scalable full-stack solutions.",
      achievements: [
        "Developing responsive web interfaces",
        "Building reusable UI components",
        "Collaborating with designers and backend teams",
        "Delivering scalable full-stack solutions"
      ],
      skills: ["Frontend Development", "Component Architecture", "Collaboration", "Responsive Design"],
      icon: Code
    },
    {
      title: "Vice President",
      company: "Tech GenZ Club",
      location: "Sphoorthy Engineering College",
      period: "2023 - Present",
      type: "Leadership Role",
      description: "Leading technology initiatives and promoting student-led learning in AI, Web Development, and Mobile App innovation.",
      achievements: [
        "Organized 5+ tech & development workshops for 150+ students",
        "Promoted student-led learning in AI and app innovation",
        "Fostered Web Development and Android ecosystem growth",
        "Managed club activities and technical event planning"
      ],
      skills: ["Leadership", "Event Management", "Public Speaking", "Team Coordination"],
      icon: Users
    }
  ];

  const certifications = [
    {
      title: "Frontend Developer Certificate",
      issuer: "HackerRank",
      date: "2025",
      description: "Demonstrated competency in frontend development techniques, styling, and modern responsive design best practices.",
      skills: ["Frontend", "React", "CSS", "Problem Solving"],
      certificateUrl: "#"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and leadership experiences in technology and cybersecurity
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-20">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02, rotateX: 2, rotateY: index % 2 === 0 ? 2 : -2 }}
                className="relative perspective-1000 transform-style-3d"
              >
                <div className="glass-panel p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,243,255,0.2)] border-t border-l border-white/20 rounded-3xl">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon and Timeline */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon size={28} className="text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                        <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                          <Award size={16} className="mr-2 text-primary" />
                          Key Achievements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achievement}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: achIndex * 0.05 }}
                              viewport={{ once: true }}
                              className="flex items-start text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                          <Code size={16} className="mr-2 text-primary" />
                          Skills Developed
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-accent text-foreground rounded-full text-xs font-medium border border-border"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            <span className="text-primary">Certifications</span>
          </h3>

          <div className="grid md:grid-cols-1 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-6 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{cert.title}</h4>
                    <p className="text-primary font-semibold">{cert.issuer}</p>
                  </div>
                  <span className="text-muted-foreground text-sm mt-2 sm:mt-0">{cert.date}</span>
                </div>

                <p className="text-muted-foreground mb-4">{cert.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Certificate
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
