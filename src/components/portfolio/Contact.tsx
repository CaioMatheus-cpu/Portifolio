import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Contato
          </h2>
          <p className="max-w-[600px] text-muted-foreground">
            Estou aberto a novas oportunidades e colaborações. Sinta-se à
            vontade para entrar em contato.
          </p>
          <Button asChild>
            <a href="mailto:seu-email@example.com">
              <Mail className="mr-2 h-4 w-4" /> Enviar E-mail
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}