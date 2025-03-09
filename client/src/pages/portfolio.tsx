import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with inventory management.",
    imageUrl: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["React", "Node.js", "PostgreSQL"]
  },
  {
    title: "Project Management Tool",
    description: "Collaborative project management application with real-time updates.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["Vue.js", "Express", "MongoDB"]
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management.",
    imageUrl: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["React", "D3.js", "Firebase"]
  }
];

export default function Portfolio() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore some of our recent projects and see how we've helped other clients achieve their goals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
