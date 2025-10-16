import { Badge } from "@/components/ui/badge";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Next.js",
  "PostgreSQL",
  "Docker",
  "GraphQL",
  "Prisma",
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Habilidades
          </h2>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-lg">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}