import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const skillCategories = [
  {
    title: "Linguagens",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "C#", "JAVA" ],
  },
  {
    title: "Front-end",
    skills: ["React", "Next.js", "Angular", "HTML5", "CSS3"],
  },
  {
    title: "Back-end",
    skills: ["Node.js", "Express", "Docker"],
  },
  {
    title: "Ferramentas",
    skills: ["Git", "GitHub", "Vercel", "Figma"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Habilidades
          </h2>
          <p className="max-w-[600px] text-muted-foreground">
            Estas são as tecnologias e ferramentas com as quais tenho mais
            experiência.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}