import { useEffect, useState } from "react";
import { ChevronDown, Download, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    "Software Developer",
    "Full Stack Engineer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        setIsTyping(false);
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
        }, 1000);
      }
    }, 2000);

    return () => clearInterval(typingInterval);
  }, [isTyping, roles.length]);

  const scrollToNextSection = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground font-medium">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Geraud Vtalah
            </h1>
            <div className="h-20 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-foreground/80">
                I'm a{" "}
                <span className="text-primary">
                  {roles[currentTextIndex]}
                  <span
                    className={`inline-block w-1 h-8 bg-primary ml-1 ${
                      isTyping ? "animate-pulse" : ""
                    }`}
                  ></span>
                </span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative digital solutions and turning
            ideas into reality. I specialize in building scalable web
            applications with modern technologies and clean, efficient code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Download className="inline-block w-5 h-5 mr-2" />
              Download Resume
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 transform hover:scale-105">
              <Mail className="inline-block w-5 h-5 mr-2" />
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/geraudvtalah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-all duration-200 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/geraudvtalah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-all duration-200 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:geraud.vtalah@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-all duration-200 transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;
