import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  FileText,
  Code,
  Database,
  Shield,
  BarChart,
  Award,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';

// ✅ Works in local + deployed (GitHub Pages / subfolder)
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'LifeRoute',
      description:
        'A prototype for emergency routing that identifies nearest hospitals, manages alert flows, and integrates maps for optimized navigation during critical hours.',
      image: asset('assets/projects/liferoute-1.jpeg'),
      tags: ['React', 'Maps API', 'Prototype'],
      links: { demo: '#', github: 'https://github.com/MahavirRawal' },
    },
    {
      title: 'FixFast',
      description:
        'A concept for instant home repair services, focusing on a clean UI and efficient service matching for quick household fixes.',
      image: asset('assets/projects/fixfast-1.png'),
      tags: ['Web Dev', 'UI Design', 'Concept'],
      links: { demo: '#', github: 'https://github.com/MahavirRawal' },
    },
    {
      title: 'Saaya SOS',
      description:
        'An emergency flow developed during a hackathon, featuring silent SOS triggers and voice activation for user safety in high-pressure situations.',
      image: asset('assets/projects/sos-1.jpeg'),
      tags: ['Hackathon', 'Safety Tech', 'Logic Flow'],
      links: { demo: '#', github: 'https://github.com/MahavirRawal' },
    },
  ];

  const skillGroups = [
    {
      name: 'Web Development',
      icon: <Code className="w-5 h-5" />,
      skills: ['HTML/CSS', 'JavaScript', 'React (Learning)', 'Tailwind CSS'],
    },
    {
      name: 'Backend & DB',
      icon: <Database className="w-5 h-5" />,
      skills: ['Node.js (Basics)', 'MongoDB (Basics)', 'SQL Basics'],
    },
    {
      name: 'Python & Data',
      icon: <BarChart className="w-5 h-5" />,
      skills: ['Python Basics', 'Data Analysis (Learning)', 'NumPy/Pandas (Basics)'],
    },
    {
      name: 'Cybersecurity',
      icon: <Shield className="w-5 h-5" />,
      skills: ['Forensics Exposure', 'Security Frameworks (Intro)', 'Threat Awareness'],
    },
  ];

  // ✅ Use `file` for both image/pdf (no missing property errors)
  const achievements = [
    {
      title: 'First Rank - SGPA 9.05',
      detail: 'Academic Excellence in First Year IT Engineering (AY 2024–2025).',
      file: asset('assets/certificates/first-rank.jpeg'),
    },
    {
      title: 'Technova Participation',
      detail: 'Participated in the Technova 2026 Hackathon at Xavier Institute of Engineering.',
      file: asset('assets/certificates/technova.jpeg'),
    },
    {
      title: 'Industrial Visit - Cyber Forensics',
      detail: 'Gained exposure to digital forensics and cybersecurity at AIIPL Pvt. Ltd.',
      // If you have PDF instead, rename or update this to .pdf
      file: asset('assets/certificates/industrial-visit.png'),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-700">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold tracking-tight text-slate-800">
            MR.
          </a>

          <div className="hidden md:flex gap-8 items-center">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href={asset('assets/Mahavir_Rawal_Resume.pdf')}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-all"
            >
              Resume
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href={asset('assets/Mahavir_Rawal_Resume.pdf')}
              target="_blank"
              rel="noreferrer"
              className="text-lg font-bold text-blue-600"
            >
              Resume
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-6">
              <MapPin className="w-3 h-3" /> Mumbai / Navi Mumbai, India
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
              Mahavir Arjun Rawal
            </h1>
            <p className="text-xl text-slate-600 mb-8 font-medium">IT Engineering Student</p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all"
              >
                View Projects
              </a>
              <a
                href={asset('assets/Mahavir_Rawal_Resume.pdf')}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4" /> Resume
              </a>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://github.com/MahavirRawal"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center hover:bg-slate-50 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mahavir-rawal-6827aa393/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center hover:bg-slate-50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:mahavirrawal2006@gmail.com"
                className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center hover:bg-slate-50 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-200 shadow-2xl">
              <img
                src={asset('assets/profile.jpeg')}
                alt="Mahavir Arjun Rawal"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">About Me</h2>
          <p className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight mb-8">
            I am an IT student focused on building practical projects that solve real-world problems.
          </p>
          <div className="text-lg text-slate-600 space-y-6 max-w-2xl mx-auto">
            <p>
              Currently pursuing my engineering degree, I spend my time exploring web development and learning how to use
              data tools effectively.
            </p>
            <p>
              I have a keen interest in cybersecurity and have attended industrial sessions to understand forensics and
              security frameworks. I believe in learning by doing and am always working on prototypes to sharpen my
              skills.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Portfolio</h2>
              <h3 className="text-4xl font-extrabold text-slate-900">Practical Projects</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{project.description}</p>

                  <div className="flex gap-4 items-center">
                    <a
                      href={project.links.demo}
                      className="text-xs font-bold flex items-center gap-1 text-slate-900 hover:text-blue-600"
                    >
                      View Prototype <ChevronRight className="w-3 h-3" />
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold flex items-center gap-2 text-slate-900 hover:text-blue-600"
                    >
                      GitHub <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Technical Stack</h2>
            <h3 className="text-4xl font-extrabold">Skills & Tools</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {skillGroups.map((group, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                  {group.icon}
                </div>
                <h4 className="text-lg font-bold mb-4">{group.name}</h4>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-slate-400 text-sm flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Award className="w-8 h-8 text-blue-600" />
            <h3 className="text-3xl font-extrabold text-slate-900">Certifications & Achievements</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((item, i) => {
              const isImage = /\.(png|jpg|jpeg|webp)$/i.test(item.file);
              const isPdf = /\.pdf$/i.test(item.file);

              return (
                <div
                  key={i}
                  className="group p-6 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-all"
                >
                  <div className="aspect-video rounded-xl bg-slate-100 mb-4 overflow-hidden flex items-center justify-center">
                    {isImage ? (
                      <img
                        src={item.file}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-slate-400">
                        <Award className="w-10 h-10" />
                        <span className="text-xs font-bold mt-2">{isPdf ? 'PDF' : 'FILE'}</span>
                      </div>
                    )}
                  </div>

                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 mb-4">{item.detail}</p>

                  <a
                    href={item.file}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline"
                  >
                    View Document <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-12 md:p-20 shadow-xl shadow-slate-200/50 text-center">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">Let's Connect</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">Ready to collaborate?</h3>
          <p className="text-lg text-slate-500 mb-12 max-w-lg mx-auto">
            I'm currently looking for internship opportunities and would love to hear from you.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href="mailto:mahavirrawal2006@gmail.com"
              className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3"
            >
              <Mail className="w-5 h-5" /> Email Me
            </a>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/mahavir-rawal-6827aa393/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/MahavirRawal"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 text-center px-6">
        <p className="text-slate-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} Mahavir Arjun Rawal. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
};

export default App;