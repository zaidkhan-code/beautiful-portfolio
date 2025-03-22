"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "M-HUSSAIN-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!mounted) return null;

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">M-HUSSAIN</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8">
            Mern Stack Developer | JavaScript | ReactJS | NextJS | TypeScript
          </h2>
          <p className="text-lg mb-10 text-muted-foreground">
            I build exceptional and scalable web applications using React,
            Next.js, and modern JavaScript frameworks with 4 years of
            professional experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => {
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={handleDownloadResume}
            >
              Download CV
            </Button>
          </div>
          <div className="flex items-center justify-center mt-10 space-x-6">
            <a
              variant="ghost"
              size="icon"
              className="rounded-full"
              as="a"
              href="https://github.com/muhammad423"
              target="_blank"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              variant="ghost"
              size="icon"
              className="rounded-full"
              as="a"
              href="http://www.linkedin.com/in/muhammad-HUSSAIN-1b7269288"
              target="_blank"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              variant="ghost"
              size="icon"
              className="rounded-full"
              as="a"
              href="https://twitter.com"
              target="_blank"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
