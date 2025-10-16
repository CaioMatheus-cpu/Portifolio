import { MadeWithDyad } from "@/components/made-with-dyad";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-6 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Seu Nome Completo. Todos os direitos reservados.
        </p>
        <MadeWithDyad />
      </div>
    </footer>
  );
}