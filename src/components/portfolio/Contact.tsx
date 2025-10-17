import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  const email = "Caio.Matheus.bz.silva@gmail.com";
  return (
    <section id="contact" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Vamos Conversar
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Estou sempre aberto a novas oportunidades, colaborações e um bom
            bate-papo sobre tecnologia. Sinta-se à vontade para entrar em
            contato.
          </p>
          <div className="p-4 bg-secondary rounded-lg">
            <a
              href={`mailto:${email}`}
              className="text-lg font-semibold hover:underline"
            >
              {email}
            </a>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/CaioMatheus-cpu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/caio-matheus-2568a72b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={`mailto:${email}`} aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}