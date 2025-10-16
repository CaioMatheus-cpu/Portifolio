import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Projeto Incrível 1",
    description: "Uma breve descrição sobre este projeto fantástico.",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Plataforma de E-commerce",
    description: "Solução completa para vendas online com foco em performance.",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Aplicativo de Gerenciamento",
    description: "Ferramenta para otimizar tarefas e aumentar a produtividade.",
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
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">
                    Placeholder da Imagem
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Ver Demo
                  </a>
                </Button>
                <Button asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Código Fonte
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