import { useState } from "react";
import { ExternalLink, Github, Code, Mail } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    // {
    //   id: 1,
    //   title: "E-Commerce Platform",
    //   description:
    //     "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.",
    //   image: "/api/placeholder/600/400",
    //   category: "fullstack",
    //   technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    //   liveUrl: "https://project1.com",
    //   githubUrl: "https://github.com/geraudvtalah/ecommerce-platform",
    //   features: [
    //     "User Authentication",
    //     "Product Management",
    //     "Payment Integration",
    //     "Admin Dashboard",
    //     "Responsive Design",
    //   ],
    // },
    // {
    //   id: 2,
    //   title: "Task Management App",
    //   description:
    //     "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.",
    //   image: "/api/placeholder/600/400",
    //   category: "frontend",
    //   technologies: [
    //     "React",
    //     "Firebase",
    //     "TypeScript",
    //     "Tailwind CSS",
    //     "Framer Motion",
    //   ],
    //   liveUrl: "https://project2.com",
    //   githubUrl: "https://github.com/geraudvtalah/task-manager",
    //   features: [
    //     "Real-time Updates",
    //     "Drag & Drop",
    //     "Team Collaboration",
    //     "Task Categories",
    //     "Progress Tracking",
    //   ],
    // },
    {
      id: 1,
      title: "AI Programming Assistant",
      description:
        "An intelligent chat application powered by OpenAI GPT-4. Features include conversation history, multiple programming languages, and natural language processing capabilities.",
      image: "/api/placeholder/600/400",
      category: "ai",
      technologies: ["Python", "OpenAI API", "FastAPI", "React", "Firestore"],
      liveUrl: "https://ai-assistant-ten-nu.vercel.app/login",
      githubUrl: "https://github.com/geraud77/AI-Assistant",
      features: [
        "AI Programming Assistant",
        "Conversation History",
        "Multiple Languages",
        "Natural Language Processing",
        "Code Generation",
      ],
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode toggle, and optimized performance.",
      image: "/api/placeholder/600/400",
      category: "frontend",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Vite",
      ],
      liveUrl: "https://portfolio-dun-two-70.vercel.app/",
      githubUrl: "https://github.com/geraud77/portfolio",
      features: ["Responsive Design", "Dark Mode", "Smooth Animations"],
    },
    {
      id: 3,
      title: "Recipe Management Interface",
      description:
        "A comprehensive recipe management application with meal planning, recipe search, shopping list, and community recipes. Integrated with multiple recipe APIs.",
      image: "/api/placeholder/600/400",
      category: "frontend",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Framer Motion",
        "Supabase",
      ],
      liveUrl: "https://recipeswap.vercel.app/",
      githubUrl: "https://github.com/geraud77/Recipeswap",
      features: [
        "Recipe Management",
        "Meal Planning",
        "Recipe Search",
        "Shopping List",
        "Community Recipes",
      ],
    },
    // {
    //   id: 6,
    //   title: "Social Media Dashboard",
    //   description:
    //     "A comprehensive social media management dashboard for businesses. Features include post scheduling, analytics, content calendar, and multi-platform integration.",
    //   image: "/api/placeholder/600/400",
    //   category: "fullstack",
    //   technologies: [
    //     "Next.js",
    //     "Prisma",
    //     "PostgreSQL",
    //     "Twitter API",
    //     "Instagram API",
    //   ],
    //   liveUrl: "https://project6.com",
    //   githubUrl: "https://github.com/geraudvtalah/social-dashboard",
    //   features: [
    //     "Post Scheduling",
    //     "Analytics Dashboard",
    //     "Content Calendar",
    //     "Multi-platform Integration",
    //     "Team Management",
    //   ],
    // },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "ai", label: "AI/ML" },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and showcases different aspects of my technical
            skills.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background text-foreground hover:bg-secondary border border-border"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-secondary rounded-full flex items-center justify-center">
                    <Code className="w-16 h-16 text-muted-foreground" />
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                    {project.category === "fullstack"
                      ? "Full Stack"
                      : project.category === "frontend"
                      ? "Frontend"
                      : "AI/ML"}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li
                        key={index}
                        className="text-xs text-muted-foreground flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can work together!
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-lg">
              <Mail className="inline-block w-5 h-5 mr-2" />
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
