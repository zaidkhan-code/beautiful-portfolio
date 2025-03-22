"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Precise Tech (Canadian Company)",
      period: "2023 - Present",
      description:
        "Develop, optimize, and maintain scalable frontend applications using modern frameworks. Write clean, maintainable, and well-documented code following best practices and design patterns. Lead code reviews, mentor junior developers, and contribute to improving development workflows.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      title: "Frontend Developer (Mid-Level)",
      company: "Media Thoughts",
      period: "01/2022 - 07/2023",
      description:
        "Crafted captivating web experiences using HTML, CSS, and JavaScript. Utilized React, Redux, Redux-Saga, Git, and Ant Design. Expertise in Next.js and React. Responsible for maintaining and enhancing website functionality.",
      technologies: ["React", "Redux", "Redux-Saga", "Next.js", "Ant Design", "Git"],
    },
    {
      title: "Junior Frontend Developer",
      company: "Uconnect Tech",
      period: "01/2019 - 02/2022",
      description:
        "Refined skills in HTML, CSS, and JavaScript. Contributed to dynamic web projects within a team. Helped build responsive, visually appealing interfaces.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary pl-8 ml-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-12 relative"
              >
                <div className="absolute -left-12 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <CardTitle>{exp.title}</CardTitle>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <CardDescription className="text-lg font-medium">{exp.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

