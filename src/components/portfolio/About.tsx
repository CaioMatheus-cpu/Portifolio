export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Sobre Mim
          </h2>
          <div className="max-w-3xl mx-auto text-muted-foreground md:text-xl space-y-4 text-left">
            <p>
              Olá! Sou [Seu Nome], um [Seu Título Profissional] apaixonado por
              tecnologia e pela criação de soluções que impactam positivamente a
              vida das pessoas. Minha jornada na programação começou com [conte
              uma breve história sobre como começou], e desde então, tenho me
              dedicado a construir aplicações web robustas, escaláveis e com
              foco na experiência do usuário.
            </p>
            <p>
              Acredito que a chave para um bom produto digital está na união
              entre um código bem estruturado e um design que seja ao mesmo
              tempo bonito e funcional. Sou um profissional [Adjetivo 1] e
              [Adjetivo 2], sempre buscando aprender novas tecnologias e
              aprimorar minhas habilidades para enfrentar os desafios do
              mercado. Meu objetivo é [Seu Objetivo Principal do Portfólio].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}