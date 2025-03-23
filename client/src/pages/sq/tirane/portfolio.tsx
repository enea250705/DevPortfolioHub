import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Sistem CRM i Personalizuar",
    description: "Një sistem gjithëpërfshirës i menaxhimit të marrëdhënieve me klientët me panel analitik dhe funksione raportimi.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/portfolio/crm",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"]
  },
  {
    title: "Platformë E-Learning",
    description: "Platformë edukative me kurse video, kuize interaktive dhe ndjekje të progresit.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/portfolio/elearning",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "Sistem Menaxhimi Restoranti",
    description: "Zgjidhje e plotë për operacionet e restorantit përfshirë porositë, inventarin dhe menaxhimin e stafit.",
    imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/portfolio/restaurant",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React"]
  },
  {
    title: "Listim Pronash",
    description: "Platformë për listimin e pronave me karakteristika të avancuara kërkimi dhe mundësi për tur virtual.",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/portfolio/realestate",
    technologies: ["React", "Node.js", "Express", "MongoDB"]
  }
];

export default function TiranaPortfolio() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Një koleksion i projekteve tona të zhvillimit që tregojnë aftësitë në zgjidhjen e problemeve dhe ekspertizën teknike.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
