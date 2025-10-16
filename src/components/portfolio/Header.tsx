import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export function Header() {
  return (
    <section id="home" className="w-full pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="h-32 w-32">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Seu Nome Completo"
            />
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Seu Nome Completo
            </h1>
            <p className="text-xl text-muted-foreground">
              Desenvolvedor Full-Stack
            </p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.youtube.com/watch?v=TsaLQAetPLU"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/login/pt"
                target="_blank"
                rel="noopener noreferrer"
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