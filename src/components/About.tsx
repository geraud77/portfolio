import { User, MapPin, Calendar, Mail, Phone, Globe } from "lucide-react";

const About = () => {
  const personalInfo = [
    { icon: User, label: "Name", value: "Vtalah Geraud" },
    { icon: MapPin, label: "Location", value: "Cameroon" },
    { icon: Calendar, label: "Experience", value: "Software Developer" },
    { icon: Mail, label: "Email", value: "vgeraud77@gmail.com" },
    { icon: Phone, label: "Phone", value: "Available upon request" },
    { icon: Globe, label: "Status", value: "Open to opportunities" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Personal Info */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-secondary rounded-full flex items-center justify-center">
                    <User
                      className="w-32 h-32 text-muted-foreground"
                      aria-label="Vtalah Geraud Profile Icon"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-background rounded-2xl p-6 shadow-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <info.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="font-medium text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Bio */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Who I Am
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate and dedicated software developer with a strong
                foundation in modern web technologies. With experience in the
                industry, I've developed a deep understanding of both frontend
                and backend development, allowing me to create comprehensive
                digital solutions.
              </p>
              {/* <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in technology began with a curiosity about how things
                work, which evolved into a passion for building applications
                that solve real-world problems. I believe in writing clean,
                maintainable code and staying up-to-date with the latest
                industry trends and best practices.
              </p> */}
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                What I Do
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in developing scalable web applications using
                modern frameworks and technologies. My expertise includes
                ReactJS, , TypeScript and Python . I enjoy working on
                challenging projects that push the boundaries of what's
                possible.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond coding, I'm passionate about user experience design,
                performance optimization, and creating intuitive interfaces that
                users love. I believe that great software is not just about
                functionality, but also about the experience it provides.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-background p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">
                  Problem Solving
                </h4>
                <p className="text-muted-foreground text-sm">
                  Analytical approach to complex technical challenges
                </p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">
                  Team Collaboration
                </h4>
                <p className="text-muted-foreground text-sm">
                  Strong communication and teamwork skills
                </p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">
                  Continuous Learning
                </h4>
                <p className="text-muted-foreground text-sm">
                  Always exploring new technologies and methodologies
                </p>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">
                  Quality Focus
                </h4>
                <p className="text-muted-foreground text-sm">
                  Commitment to writing clean, maintainable code
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
