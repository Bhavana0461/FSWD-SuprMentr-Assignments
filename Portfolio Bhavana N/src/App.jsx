import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Globe, 
  Award, 
  BookOpen,
  Briefcase,
  Terminal,
  Brain,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const Section = ({ title, children, icon: Icon, id }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="py-20 px-6 max-w-6xl mx-auto"
  >
    <div className="flex items-center gap-3 mb-12">
      {Icon && <Icon className="w-8 h-8 text-secondary" />}
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-right from-secondary/50 to-transparent ml-4" />
    </div>
    {children}
  </motion.section>
);

const Card = ({ children, className = "" }) => (
  <div className={`glass p-6 rounded-2xl transition-all duration-300 hover:border-secondary/30 hover:shadow-2xl hover:shadow-secondary/10 group ${className}`}>
    {children}
  </div>
);

const SkillBadge = ({ name }) => (
  <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium border border-secondary/20 hover:bg-secondary/20 transition-colors">
    {name}
  </span>
);

function App() {
  const projects = [
    {
      title: "AI-Powered Mental Health Companion",
      description: "A web-based application supporting mental wellness through intelligent interactive tools. Features include emotion detection and a voice-to-voice chatbot.",
      tech: ["NLP", "Deep Learning", "React", "Emotion Detection"],
      icon: <Brain className="w-10 h-10 text-pink-400" />
    },
    {
      title: "Object Detection and Recognition",
      description: "A system built to detect and recognize objects from images using machine learning concepts and pre-trained models for high accuracy.",
      tech: ["Machine Learning", "Computer Vision", "Python"],
      icon: <Cpu className="w-10 h-10 text-blue-400" />
    },
    {
      title: "Smart Task Manager",
      description: "Interactive task management web app with local storage for state persistence, featuring a responsive UI and DOM manipulation.",
      tech: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
      icon: <CheckCircle2 className="w-10 h-10 text-green-400" />
    }
  ];

  const skills = {
    "Languages": ["Java", "SQL", "JavaScript"],
    "Web Development": ["HTML5", "CSS3", "React.js"],
    "Core Concepts": ["DBMS", "OOPs", "Computer Networks", "Cybersecurity", "Blockchain", "IoT"],
    "Developer Tools": ["Git", "VS Code", "Power BI"]
  };

  const [dbProjects, setDbProjects] = useState([]);
  const [dbError, setDbError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLiveProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Unable to fetch MongoDB projects');
        }
        const data = await response.json();
        setDbProjects(data);
      } catch (error) {
        setDbError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadLiveProjects();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-secondary/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-gradient"
          >
            BHAVANA N
          </motion.span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-secondary transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-secondary font-mono mb-4">Hi, my name is</h2>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
            Bhavana N<span className="text-secondary">.</span>
          </h1>
          <h2 className="text-3xl md:text-6xl font-bold text-slate-400 mb-8">
            I build secure & scalable solutions.
          </h2>
          <p className="max-w-xl text-lg mb-10 leading-relaxed">
            Final-year Computer Science Engineering student specializing in <span className="text-white">IoT, Cybersecurity, and Blockchain</span>. 
            Passionate about building innovative web applications and intelligent systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-secondary text-primary font-bold rounded-xl hover:bg-secondary/90 transition-all transform hover:-translate-y-1">
              View My Work
            </a>
            <div className="flex items-center gap-6 px-4">
              <a href="https://linkedin.com/in/bhavana-n546b79216" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto: bhavanan1611@gmail.com" className="hover:text-secondary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </header>

      {/* About Section */}
      <Section title="About Me" icon={Terminal} id="about">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I am a highly motivated engineering student at <span className="text-secondary">K S Institute of Technology</span> with a CGPA of <span className="text-white">8.35</span>. 
              My journey in tech is driven by curiosity and a proactive mindset.
            </p>
            <p className="text-lg leading-relaxed">
              With a strong foundation in <span className="text-white">Java and Web Development</span>, I've expanded my horizons into emerging fields like 
              Cybersecurity and AI. I enjoy solving complex problems and turning ideas into functional, beautiful software.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-secondary" />
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-secondary" />
                <span>Quick Learner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-secondary" />
                <span>Team Player</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-secondary" />
                <span>Proactive Mindset</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-accent opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
            <Card className="relative overflow-hidden aspect-square flex items-center justify-center border-white/10">
               <div className="text-center">
                  <Globe className="w-24 h-24 text-secondary mx-auto mb-4 animate-pulse" />
                  <p className="font-mono text-sm">Bengaluru, India</p>
               </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="Technical Skills" icon={Code2} id="skills">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category}>
              <h3 className="text-white font-bold mb-6 flex items-center justify-between">
                {category}
                <ChevronRight size={16} className="text-secondary" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => <SkillBadge key={skill} name={skill} />)}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section title="Experience" icon={Briefcase} id="experience">
        <div className="space-y-8">
          <Card className="border-l-4 border-l-secondary">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Web Development Intern</h3>
                <p className="text-secondary">Dec 2025 — Jan 2026</p>
              </div>
            </div>
            <ul className="space-y-3 list-disc list-inside">
              <li>Built and maintained responsive web pages using HTML, CSS, and JavaScript.</li>
              <li>Implemented front-end features and improved performance & usability.</li>
              <li>Resolved UI bugs and ensured cross-browser compatibility.</li>
              <li>Collaborated with developers following best practices and version control.</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="Featured Projects" icon={Globe} id="projects">
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full">
              <div className="mb-6">{project.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Live MongoDB Projects" icon={Database} id="mongo-projects">
        {loading ? (
          <p className="text-slate-400">Loading live project data from MongoDB...</p>
        ) : dbError ? (
          <p className="text-red-400">Unable to load MongoDB data. Configure <code>MONGODB_URI</code> and start the backend server.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {dbProjects.length > 0 ? dbProjects.map((project) => (
              <Card key={project._id} className="flex flex-col h-full">
                <div className="mb-6"><Database className="w-10 h-10 text-secondary" /></div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech?.map((t) => (
                    <span key={t} className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            )) : (
              <p className="text-slate-400">No projects found in MongoDB yet.</p>
            )}
          </div>
        )}
      </Section>

      {/* Education & Certificates */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 py-10">
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>
          <Card>
            <h3 className="text-lg font-bold text-white">K S Institute of Technology</h3>
            <p className="text-secondary mb-2">Bachelor of Engineering (CSE)</p>
            <p className="text-sm">2022 — 2026 | Bengaluru, India</p>
            <div className="mt-4 inline-block px-3 py-1 bg-white/5 rounded text-secondary font-bold">
              CGPA: 8.35
            </div>
          </Card>
        </div>
        
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-bold text-white">Certifications</h2>
          </div>
          <div className="space-y-4">
            {[
              "Deloitte Data Analytics Simulation",
              "GreenSkills & AI Program",
              "Pro MERN Stack Workshop",
              "Cybersecurity Analyst Simulation"
            ].map(cert => (
              <div key={cert} className="flex items-center gap-3 p-3 glass rounded-xl text-sm">
                <CheckCircle2 size={16} className="text-secondary shrink-0" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <Section title="Achievements" icon={Award}>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="flex items-start gap-4">
            <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
              <Award size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">National Essay Competitions</h3>
              <p className="text-sm">Achieved Top 7 and Top 50 in competitions conducted by MyGov India for Independence Day and Republic Day.</p>
            </div>
          </Card>
          <Card className="flex items-start gap-4">
            <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
              <Brain size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Manthan Innovation 2024</h3>
              <p className="text-sm">Participated in Innovation and Business Plan Presentation at the national level.</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Contact Section */}
      <Section title="Get In Touch" icon={Mail} id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What's Next?</h2>
          <p className="text-lg mb-10">
            I'm currently looking for new opportunities to contribute and learn. 
            Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:bhavanan1611@gmail.com" 
              className="px-8 py-4 bg-transparent border border-secondary text-secondary font-bold rounded-xl hover:bg-secondary/10 transition-all flex items-center gap-2"
            >
              <Mail size={20} />
              Say Hello
            </a>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-secondary" />
                +91 8618792468
              </span>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-sm border-t border-white/5">
        <p>© 2026 Bhavana N. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
