import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

export function Header() {
  return (
    <section
      id="home"
      className="w-full py-20 md:py-32 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto text-center px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <Avatar className="h-64 w-64">
            <AvatarImage
              src="src\components\portfolio\AFOTO.jpg"
              alt="[Seu Nome Completo]"
            />
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Caio Matheus
            </h1>
            <p className="text-xl text-muted-foreground">
              Desenvolvedor Full Stack & Entusiasta de Tecnologia
            </p>
            <p className="max-w-xl mx-auto text-muted-foreground pt-2">
              Transformando ideias em realidade digital com código limpo e
              design intuitivo.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <a href="#projects">
                Ver Projetos <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#contact">Entrar em Contato</a>
            </Button>
          </div>
          <div className="flex space-x-4 pt-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.youtube.com/watch?v=TsaLQAetPLU"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/login/pt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}