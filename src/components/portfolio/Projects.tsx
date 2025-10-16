import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Sistema de Gestão de Tarefas - TaskFy",
    description:
      "Uma aplicação web full-stack que ajuda usuários a organizar suas tarefas diárias com um sistema de prioridades.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    demoUrl: "https://www.youtube.com/watch?v=BU-w2_Aae54",
    repoUrl:
      "https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories",
  },
  {
    title: "Projeto Exemplo 2",
    description:
      "Descreva aqui o problema que seu projeto resolveu e as principais funcionalidades.",
    technologies: ["Next.js", "Prisma", "Stripe"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Projeto Exemplo 3",
    description:
      "Fale sobre os desafios técnicos e o que você aprendeu durante o desenvolvimento.",
    technologies: ["GraphQL", "Docker", "React Native"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Projetos
          </h2>
          <p className="max-w-[600px] text-muted-foreground">
            Aqui estão alguns dos projetos em que trabalhei.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">
                    Imagem do Projeto
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline" asChild>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Ver Demo
                  </a>
                </Button>
                <Button asChild>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Código
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}