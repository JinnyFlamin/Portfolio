const { useState, useEffect } = React;

// Lucide React icons as components (simplified versions)
const ChevronDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6,9 12,15 18,9"></polyline>
  </svg>
);

const Mail = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m4 4 16 0c1.1 0 2 .9 2 2l0 12c0 1.1-.9 2-2 2l-16 0c-1.1 0-2-.9-2-2l0-12c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const Phone = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MapPin = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const Calendar = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const Users = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="m22 21-3.4-3.4M17 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
  </svg>
);

const Target = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const Award = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"></polyline>
  </svg>
);

const ExternalLink = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15,3 21,3 21,9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const Github = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  // Handle navigation active state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Full Cycle Project Management",
      company: "Salcomp Technologies India Pvt Ltd",
      duration: "Ongoing",
      budget: "Multiple Projects",
      team: "Cross-functional teams",
      description: "Managing complete project lifecycle from kickoff to MP stage, coordinating cross-functional teams and ensuring timely delivery while maintaining quality standards.",
      technologies: ["Agile", "Waterfall", "SAP", "MS Office", "Project Documentation"],
      outcomes: ["Streamlined processes", "Reduced operational costs", "Improved team efficiency"]
    },
    {
      title: "Customer Interaction & Risk Mitigation",
      company: "Salcomp Technologies India Pvt Ltd",
      duration: "2023 - Present",
      budget: "Enterprise Level",
      team: "Program Management",
      description: "Leading customer interactions for project updates and implementing risk mitigation strategies to ensure project success and customer satisfaction.",
      technologies: ["Customer Management", "Risk Assessment", "Communication Tools", "Reporting"],
      outcomes: ["Enhanced customer satisfaction", "Proactive risk management", "Improved project visibility"]
    },
    {
      title: "Test Strategy Development",
      company: "Sanmina-SCI Technologies India Pvt Ltd",
      duration: "3 months",
      budget: "R&D Project",
      team: "Design & Manufacturing Teams",
      description: "Collaborated with cross-functional teams to develop comprehensive test strategies, create documentation, and design test fixtures for manufacturing processes.",
      technologies: ["Test Development", "Documentation", "Cross-functional Collaboration", "Quality Assurance"],
      outcomes: ["Improved test procedures", "Enhanced documentation", "Better team collaboration"]
    }
  ];

  const skills = [
    { category: "Project Management", items: ["Agile", "Waterfall", "Strategic Thinking", "Risk Mitigation", "Program Evaluation"] },
    { category: "Technical", items: ["SAP", "MS Excel", "PowerPoint", "Microsoft Office", "Technical Proficiency"] },
    { category: "Leadership", items: ["Communication", "Problem-Solving", "Leadership", "Customer Focus", "Adaptability"] },
    { category: "Certifications", items: ["Battery Management Systems", "Embedding Sensors and Motors", "BE Electrical & Electronics"] }
  ];

  const companies = [
    {
      name: "Salcomp Technologies India Pvt Ltd",
      role: "JE - Program Management",
      period: "September 2023 - Present",
      description: "Results-driven program management professional assisting program managers in planning and executing projects. Leading cross-functional teams and managing full cycle projects from kickoff to MP stage.",
      achievements: [
        "Successfully managed full cycle projects from kickoff to MP stage",
        "Streamlined processes resulting in cost reduction and improved efficiency",
        "Enhanced customer interaction and project update communication",
        "Developed comprehensive project documentation and evaluation reports"
      ]
    },
    {
      name: "Sanmina-SCI Technologies India Pvt Ltd",
      role: "Test Engineer",
      period: "June 2023 - September 2023",
      description: "Collaborated with cross-functional teams including design, manufacturing, and quality departments. Focused on test strategy development and comprehensive documentation.",
      achievements: [
        "Assisted in developing effective test strategies",
        "Created and maintained detailed test documentation",
        "Designed and debugged test fixtures and programs",
        "Enhanced collaboration between design, manufacturing, and quality teams"
      ]
    }
  ];





  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full header-backdrop z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">
            Jinny Flamin Oliver
          </div>
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'experience', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`hover:text-blue-400 transition-colors capitalize ${
                  activeSection === section ? 'text-blue-400 border-b-2 border-blue-400' : ''
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center hero-pattern">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-title text-shadow">
                <span className="text-white">Program</span>
                <br />
                <span className="gradient-text">Manager</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Results-driven professional with expertise in assisting program managers and leading cross-functional teams. 
                Specialized in customer interaction, risk mitigation, and implementing Agile and Waterfall methodologies.
              </p>
              <div className="flex space-x-6">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="btn-primary px-8 py-3 rounded-lg font-semibold"
                >
                  View Projects
                </button>
            <button
                onClick={() => {
                    const link = document.createElement("a");
                    link.href = "Assets/JINNY RESUME.pdf"; // Path inside public folder
                    link.download = "Jinny_Resume.pdf"; // Name for the downloaded file
                    link.click();
                }}
                className="btn-secondary px-8 py-3 rounded-lg font-semibold"
                >
                Download Resume
            </button>


              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto gradient-bg-blue rounded-full flex items-center justify-center pulse-blue">
                <div className="w-72 h-72 bg-black rounded-full flex items-center justify-center">
                  <div className="text-6xl "><img src="Assets/Jinny_img.png"  height={250} width={150}/></div>
                </div>
              </div>
              <div className="absolute inset-0 gradient-bg-hero rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 bg-opacity-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-lg hover-lift">
              <div className="text-blue-400 mb-4"><Users size={32} /></div>
              <h3 className="text-xl font-semibold mb-3">Cross-Functional Leadership</h3>
              <p className="text-gray-300">Experienced in coordinating cross-functional teams to achieve program goals with focus on customer interaction and project delivery.</p>
            </div>
            <div className="glass p-6 rounded-lg hover-lift">
              <div className="text-blue-400 mb-4"><Target size={32} /></div>
              <h3 className="text-xl font-semibold mb-3">Process Optimization</h3>
              <p className="text-gray-300">Expert in streamlining processes, reducing costs, and improving efficiency through strategic thinking and problem-solving.</p>
            </div>
            <div className="glass p-6 rounded-lg hover-lift">
              <div className="text-blue-400 mb-4"><Award size={32} /></div>
              <h3 className="text-xl font-semibold mb-3">Risk Mitigation</h3>
              <p className="text-gray-300">Proficient in risk assessment and mitigation strategies, ensuring project success from kickoff to MP stage with quality delivery.</p>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Core Competencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="glass p-6 rounded-lg hover-lift">
                  <h4 className="text-blue-400 font-semibold mb-4">{skillGroup.category}</h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-300 text-sm flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
          
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                onClick={() => setActiveProject(index)}
                className={`p-4 rounded-lg border cursor-pointer transition-all hover-lift ${
                  activeProject === index 
                    ? 'project-card-active' 
                    : 'glass hover:border-blue-600'
                }`}
              >
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-blue-400 text-sm mb-2">{project.company}</p>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{project.duration}</span>
                  <span>{project.budget}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="glass rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">{projects[activeProject].title}</h3>
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <span className="flex items-center"><Calendar size={16} className="mr-1" /> {projects[activeProject].duration}</span>
                  <span className="flex items-center"><Users size={16} className="mr-1" /> {projects[activeProject].team}</span>
                </div>
                <p className="text-gray-300 mb-6">{projects[activeProject].description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span key={index} className="tech-tag px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Key Outcomes:</h4>
                <ul className="space-y-3">
                  {projects[activeProject].outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <div className="achievement-bullet"></div>
                      <span className="text-gray-300">{outcome}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 glass rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{projects[activeProject].budget}</div>
                    <div className="text-sm text-gray-400">Project Budget</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900 bg-opacity-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Professional Experience</h2>
          
          <div className="space-y-8">
            {companies.map((company, index) => (
              <div key={index} className="glass rounded-lg p-8 hover-lift">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-2">{company.name}</h3>
                    <p className="font-semibold mb-2">{company.role}</p>
                    <p className="text-gray-400 text-sm">{company.period}</p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-gray-300 mb-6">{company.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {company.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="achievement-bullet"></div>
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Let's Connect</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Ready to discuss your next program?</h3>
              <p className="text-gray-300 mb-8">
                I'm passionate about challenging projects that drive efficiency and deliver exceptional results. 
                Let's explore how my program management expertise can help achieve your organizational goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-400" size={20} />
                  <span>Jinnyflaminoliver@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-400" size={20} />
                  <span>+91-6383335698</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-400" size={20} />
                  <span>Chennai, India</span>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a href="https://www.linkedin.com/in/jinny-flamin-oliver-752825244/" className="social-icon">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="social-icon">
                  <Github size={24} />
                </a>
                <a href="#" className="social-icon">
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-blue-900 border-opacity-30 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Jinny Flamin Oliver. Program Management Professional specializing in cross-functional team coordination and process optimization.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <span>Companies worked with: </span>
            <span className="text-blue-400">Salcomp Technologies India Pvt Ltd</span>
            <span className="mx-2">•</span>
            <span className="text-blue-400">Sanmina-SCI Technologies India Pvt Ltd</span>
            <span className="mx-2">•</span>
            <span className="text-blue-400">Anna University</span>
            <span className="mx-2">•</span>
            <span className="text-blue-400">Ponjesly College of Engineering</span>
          </div>
          <div className="mt-2 text-xs text-gray-600">
            <span>Education: BE in Electrical and Electronics Engineering (CGPA: 8.4)</span>
            <span className="mx-2">•</span>
            <span>Languages: Malayalam (Native), English, Tamil, Hindi</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Render the app
ReactDOM.render(<Portfolio />, document.getElementById('root'));