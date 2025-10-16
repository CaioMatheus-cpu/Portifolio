export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Sobre Mim
          </h2>
          <div className="max-w-[700px] text-muted-foreground md:text-xl space-y-4">
            <p>
              Olá! Sou um desenvolvedor apaixonado por transformar ideias
              complexas em soluções de software elegantes e eficientes. Com um
              perfil pragmático e focado em resultados, busco constantemente
              aprimorar minhas habilidades para criar experiências de usuário
              que não apenas funcionem bem, mas que também sejam intuitivas e
              agradáveis de usar.
            </p>
            <p>
              Minha jornada na tecnologia é movida pela curiosidade e pelo
              desejo de resolver problemas reais. Acredito no poder da
              colaboração e da organização para construir produtos robustos e
              escaláveis. Estou animado para conectar minha paixão pela
              tecnologia com novos desafios e contribuir para projetos
              inovadores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}