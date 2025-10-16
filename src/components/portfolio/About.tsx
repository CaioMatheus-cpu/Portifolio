export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Sobre Mim
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Sou um desenvolvedor apaixonado por criar soluções inovadoras e
            experiências de usuário incríveis. Com experiência em tecnologias
            modernas, estou sempre em busca de novos desafios para aprimorar
            minhas habilidades e contribuir para projetos de impacto.
          </p>
        </div>
      </div>
    </section>
  );
}