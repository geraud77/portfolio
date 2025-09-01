import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react";

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Paal AI",
      location: "Brazil",
      period: "08/2024 – 06/2025",
      description:
        "Paal lets users build personalized AI bots for Telegram, Discord, and more, offering business solutions like automated trading.",
      achievements: [
        "Collaborated with the Frontend Lead developer to develop interfaces for user interaction.",
        "Collaborated with the UI/UX designer on web design features",
        "Optimized the user experience.",
        "Did API intergration for crypto news",
      ],
      technologies: ["React", "Tailwind", "TypeScript", "Firebase"],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Wakamann",
      location: "Douala, CMR",
      period: "06/2023 – 08/2024",
      description:
        "Developed and maintained multiple web applications for clients across various industries. Collaborated with design and product teams.",
      achievements: [
        "Collaborated with UI/UX designer on web design features.",
        "Optimized the user experience.",
        "Fixed bugs and conducted usability testing",
      ],
      technologies: ["ReactJS", "Tailwind CSS", "Javascript"],
    },
    // {
    //   id: 3,
    //   title: "Frontend Developer",
    //   company: "WebCraft Studios",
    //   location: "Austin, TX",
    //   period: "Jun 2020 - Feb 2021",
    //   description:
    //     "Focused on creating responsive and interactive user interfaces. Worked closely with UX designers to implement pixel-perfect designs.",
    //   achievements: [
    //     "Developed 15+ responsive web components",
    //     "Improved page load speed by 25%",
    //     "Implemented accessibility features for better UX",
    //     "Collaborated with design team on 8 projects",
    //   ],
    //   technologies: ["React", "JavaScript", "CSS3", "HTML5", "Webpack", "Git"],
    // },
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Engineering",
      school: "University of Buea",
      location: "Buea, Cameroon",
      period: "2021 - 2025",
      description: "Focused on Computer Engineering fundamentals.",
      courses: [
        "Computer Architecture",
        "Operating Systems",
        "Artificial Intelligence",
        "Machine Learning",
        "Object-Oriented Programming",
      ],
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "Enterprise Design Thinking Practitioner",
      issuer: "IBM",
      date: "2024",
      credentialId: "d39829d0-d316-4ebb-9af5-88e4e4eb508e",
      link: "https://www.credly.com/badges/d39829d0-d316-4ebb-9af5-88e4e4eb508e/public_url",
    },
    {
      id: 2,
      name: "Product Management Basics Certification",
      issuer: "Pendo",
      date: "2024",
      credentialId: "e953e42f-bf97-404b-a250-9ce41d2b0de9",
      link: "https://www.credly.com/badges/e953e42f-bf97-404b-a250-9ce41d2b0de9/public_url",
    },
    {
      id: 3,
      name: "Enterprise Design Thinking - Team Essentials for AI",
      issuer: "IBM",
      date: "2024",
      credentialId: "e018a573-58aa-4b22-93b9-21ca8e904ab0",
      link: "https://www.credly.com/badges/e018a573-58aa-4b22-93b9-21ca8e904ab0/public_url",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that have shaped
            my expertise in software development and technology.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">
              Work Experience
            </h3>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={job.id} className="relative">
                {/* Timeline Line */}
                {index < workExperience.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-8 bg-border"></div>
                )}

                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-background rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-xl font-bold text-foreground">
                        {job.title}
                      </h4>
                      <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {job.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mb-3 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{job.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-foreground mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Education</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-background rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {edu.description}
                </p>

                <div>
                  <h5 className="font-semibold text-foreground mb-2">
                    Courses:
                  </h5>
                  <ul className="space-y-1">
                    {edu.courses.map((course, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <Award className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">
              Certifications
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-background rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">
                      {cert.name}
                    </h4>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Date:</span> {cert.date}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">ID:</span> {cert.credentialId}
                  </p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  <span className="text-sm font-medium">
                    Verify Certificate
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
