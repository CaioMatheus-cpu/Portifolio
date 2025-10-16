import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Front-end",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Back-end",
    skills: ["Node.js", "GraphQL", "PostgreSQL", "Prisma"],
  },
  {
    title: "Ferramentas e Outros",
    skills: ["Docker", "Git", "Jest"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Habilidades Técnicas
            </h2>
            <p className="max-w-[600px] text-muted-foreground">
              Estas são algumas das tecnologias com as quais tenho trabalhado
              recentemente.
            </p>
          </div>
          <div className="w-full max-w-4xl space-y-8">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-2xl font-semibold mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-md px-4 py-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}