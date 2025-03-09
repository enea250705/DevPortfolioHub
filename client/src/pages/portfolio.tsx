import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, product management, and secure payments.",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    liveUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/codewithenea/ecommerce",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Redux"]
  },
  {
    title: "Real-time Chat Application",
    description: "Modern chat platform built with WebSocket technology. Supports real-time messaging, user presence, and message history.",
    imageUrl: "https://images.unsplash.com/photo-1611746872915-64382b5c76da",
    liveUrl: "https://chat-app.example.com",
    githubUrl: "https://github.com/codewithenea/chat-app",
    technologies: ["WebSocket", "React", "Node.js", "MongoDB", "Socket.io"]
  },
  {
    title: "Content Management System",
    description: "Custom CMS built for content creators. Features include markdown support, media management, and SEO optimization.",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
    liveUrl: "https://cms-demo.example.com",
    githubUrl: "https://github.com/codewithenea/cms",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "GraphQL"]
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive dashboard for visualizing business metrics. Includes real-time data updates and customizable charts.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    liveUrl: "https://analytics-demo.example.com",
    githubUrl: "https://github.com/codewithenea/analytics",
    technologies: ["React", "D3.js", "Node.js", "Express", "MongoDB"]
  }
];

export default function Portfolio() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my recent web development projects, demonstrating expertise in modern technologies and best practices.
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