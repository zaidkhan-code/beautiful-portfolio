"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "ERP System",
      description:
        "A unified platform designed to streamline operations and improve efficiency for Canadian businesses. Developed a comprehensive ERP system integrating all essential business functions. Enhanced financial management capabilities, ensuring compliance with Canadian tax laws.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      liveLink: "",
      githubLink: "#",
    },
    {
      title: "E-commerce Web Application",
      description:
        "I developed a Natural Calm website, an intuitive and user-friendly platform designed to promote wellness products, particularly focused on natural health and relaxation supplements. Developed a Next.js-based e-commerce website.",
      image:
        "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1000&auto=format&fit=crop",
      category: "frontend",
      technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "Vercel"],
      liveLink: "https://www.sowatool.com/",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website with dark mode and animations, showcasing my skills and projects. Features smooth transitions, multiple theme options, and a clean, modern design.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop",
      category: "frontend",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://portfolio-upwork-liart.vercel.app",
      githubLink: "#",
    },
    {
      title: "Real-time Chat Application",
      description:
        "A real-time messaging platform with private and group chat functionality. Features include message notifications, online status indicators, and file sharing capabilities.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      category: "fullstack",
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "An interactive analytics dashboard for business intelligence. Visualizes key performance indicators and metrics with customizable charts and reports.",
      image:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1000&auto=format&fit=crop",
      category: "frontend",
      technologies: ["React", "D3.js", "Material UI", "Redux", "REST API"],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["all", "frontend", "backend", "fullstack"].map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
