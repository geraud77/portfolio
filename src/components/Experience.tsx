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
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "Jan 2023 - Present",
      description:
        "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Led a team of 5 developers in building a customer portal that increased user engagement by 40%",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored 3 junior developers and conducted code reviews",
        "Optimized application performance resulting in 30% faster load times",
      ],
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "AWS",
        "Docker",
        "PostgreSQL",
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      location: "New York, NY",
      period: "Mar 2021 - Dec 2022",
      description:
        "Developed and maintained multiple web applications for clients across various industries. Collaborated with design and product teams.",
      achievements: [
        "Built 8 client websites with 99.9% uptime",
        "Reduced bug reports by 50% through improved testing",
        "Implemented responsive design for all projects",
        "Collaborated with 12+ clients across different industries",
      ],
      technologies: [
        "React",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Jest",
        "Heroku",
      ],
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "WebCraft Studios",
      location: "Austin, TX",
      period: "Jun 2020 - Feb 2021",
      description:
        "Focused on creating responsive and interactive user interfaces. Worked closely with UX designers to implement pixel-perfect designs.",
      achievements: [
        "Developed 15+ responsive web components",
        "Improved page load speed by 25%",
        "Implemented accessibility features for better UX",
        "Collaborated with design team on 8 projects",
      ],
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Webpack", "Git"],
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2018 - 2020",
      description:
        "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.",
      achievements: [
        "GPA: 3.9/4.0",
        "Research Assistant in AI Lab",
        "Teaching Assistant for CS101",
        "Graduated with Distinction",
      ],
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2014 - 2018",
      description:
        "Focused on Computer Science fundamentals with minor in Mathematics.",
      achievements: [
        "GPA: 3.8/4.0",
        "Dean's List all semesters",
        "Computer Science Club President",
        "Internship at Google",
      ],
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456789",
      link: "https://aws.amazon.com/certification/",
    },
    {
      id: 2,
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-987654321",
      link: "https://cloud.google.com/certification/",
    },
    {
      id: 3,
      name: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      date: "2021",
      credentialId: "CSM-456789123",
      link: "https://www.scrumalliance.org/",
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
                    Achievements:
                  </h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, idx) => (
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
