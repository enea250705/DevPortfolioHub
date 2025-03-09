import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Custom CRM System",
    description: "A comprehensive customer relationship management system with analytics dashboard and reporting features.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/portfolio/crm",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"]
  },
  {
    title: "E-Learning Platform",
    description: "Educational platform featuring video courses, interactive quizzes, and progress tracking.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/portfolio/elearning",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "Restaurant Management System",
    description: "Complete solution for restaurant operations including ordering, inventory, and staff management.",
    imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/portfolio/restaurant",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React"]
  },
  {
    title: "Real Estate Listings",
    description: "Property listing platform with advanced search features and virtual tour capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/portfolio/realestate",
    technologies: ["React", "Node.js", "Express", "MongoDB"]
  }
];

export default function Portfolio() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A collection of my development projects showcasing problem-solving skills and technical expertise.
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