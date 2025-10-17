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
              Oi! Sou o Caio Matheus, um desenvolvedor full stack que adora transformar ideias em projetos que realmente fazem a diferença.
Tudo começou com a curiosidade de entender como a tecnologia funciona — e acabou virando paixão por criar aplicações completas, do backend ao frontend, sempre com foco em performance e usabilidade.
            </p>
            <p>
              Acredito que a chave para um bom produto digital está na união entre um código bem estruturado e um design que seja ao mesmo tempo bonito e funcional.
Sou um profissional dedicado e detalhista, sempre buscando aprender novas tecnologias e aprimorar minhas habilidades para enfrentar os desafios do mercado.
Meu objetivo é criar soluções digitais que unam eficiência, usabilidade e impacto real na vida das pessoas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}