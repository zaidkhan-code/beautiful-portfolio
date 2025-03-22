"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import image from "../public/images/WhatsApp_Image_2024-05-19_at_1.00.45_AM-removebg-preview.png";
export default function About() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "M-ISRAR-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4"></div>
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt="M-ISRAR"
                width={400}
                height={400}
                className="object-cover h-full w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              React Developer & Web Enthusiast
            </h3>
            <p className="mb-4 text-muted-foreground">
              I am a self-taught React JS Developer with over 4 years of
              experience in web development. My expertise lies in utilizing
              cutting-edge technologies like React, Next.js, and Tailwind CSS to
              create visually appealing and highly functional web applications.
            </p>
            <p className="mb-6 text-muted-foreground">
              I thrive in solving complex web development challenges, having
              successfully completed several projects, including a robust ERP
              system for Canadian businesses.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold">Name:</h4>
                <p className="text-muted-foreground">M-ISRAR</p>
              </div>
              <div>
                <h4 className="font-bold">Email:</h4>
                <p className="text-muted-foreground">
                  mohammadISRAR2033@gmail.com
                </p>
              </div>
              <div>
                <h4 className="font-bold">Location:</h4>
                <p className="text-muted-foreground">Gilgit, Pakistan</p>
              </div>
              <div>
                <h4 className="font-bold">Phone:</h4>
                <p className="text-muted-foreground">03185623437</p>
              </div>
            </div>
            <Button onClick={handleDownloadResume}>
              Download CV <Download className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
