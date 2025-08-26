import { Code, Database, Cloud, Palette, Cpu, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 75 },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "Python", level: 70 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "REST APIs", level: 85 },
      ],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", level: 65 },
        { name: "AWS", level: 70 },
        { name: "Git", level: 85 },
        { name: "CI/CD", level: 70 },
        { name: "Linux", level: 75 },
        { name: "Nginx", level: 65 },
      ],
    },
    {
      icon: Palette,
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 70 },
        { name: "Adobe XD", level: 65 },
        { name: "Photoshop", level: 60 },
        { name: "Sketch", level: 55 },
        { name: "InVision", level: 65 },
        { name: "Zeplin", level: 60 },
      ],
    },
    {
      icon: Cpu,
      title: "Other Technologies",
      skills: [
        { name: "GraphQL", level: 70 },
        { name: "Redux", level: 80 },
        { name: "Jest", level: 75 },
        { name: "Webpack", level: 70 },
        { name: "PWA", level: 70 },
        { name: "Microservices", level: 65 },
      ],
    },
    {
      icon: Globe,
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Team Leadership", level: 75 },
        { name: "Project Management", level: 70 },
        { name: "Agile/Scrum", level: 80 },
        { name: "Mentoring", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse skill set through experience and continuous
            learning. Here's what I bring to the table:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-background rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Additional Skills & Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Agile Methodologies",
              "API Design",
              "Performance Optimization",
              "Security Best Practices",
              "Testing & QA",
              "Code Review",
              "Technical Writing",
              "System Architecture",
              "Data Structures",
              "Algorithms",
              "Machine Learning",
              "Blockchain",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-secondary/50 rounded-lg p-3 text-center hover:bg-secondary transition-colors duration-200 cursor-pointer"
              >
                <span className="text-sm font-medium text-foreground">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Always Learning
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              I'm constantly expanding my knowledge and staying up-to-date with
              the latest technologies. Currently exploring:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Rust",
                "WebAssembly",
                "Three.js",
                "TensorFlow",
                "Kubernetes",
                "Serverless",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
