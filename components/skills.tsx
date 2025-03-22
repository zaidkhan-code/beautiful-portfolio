"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Redux", level: 90 },
        { name: "Shad Cn", level: 90 },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      skills: [
        { name: "Node.js", level: 45 },
        { name: "Express.js", level: 50 },
        { name: "MongoDB", level: 50 },
        { name: "RESTful APIs", level: 55 },
        { name: "GraphQL", level: 45 },
        { name: "Authentication/JWT", level: 55 },
      ],
    },
    {
      id: "tools",
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Material UI/Ant Design", level: 85 },
        { name: "Enterprise Resource Planning", level: 80 },
        { name: "Financial Forecasting", level: 75 },
        { name: "Testing (Jest)", level: 70 },
        { name: "Webpack", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid gap-6">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
