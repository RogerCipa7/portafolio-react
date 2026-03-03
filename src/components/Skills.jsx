import { useState, useMemo } from 'react';
import {
  Code2,
  Database,
  Wrench,
  Palette,
  Server,
  Award,
  Calendar,
  Layers,
  Cpu,
  Globe,
  Layout,
  Smartphone,
  Zap,
  Box,
  Terminal,
  ShieldCheck,
  Search,
  Settings,
  Shield,
  ClipboardList,
  Wifi
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = useMemo(
    () => [
      {
        id: 'frontend',
        name: 'Frontend',
        icon: <Palette className="w-5 h-5" />,
        color: 'from-blue-500 to-cyan-500',
        skills: [
          { name: 'React / Next.js', level: 90, icon: <Layout className="w-4 h-4" /> },
          { name: 'Angular', level: 85, icon: <Layout className="w-4 h-4" /> },
          { name: 'TypeScript', level: 85, icon: <Code2 className="w-4 h-4" /> },
          { name: 'JavaScript ES6+', level: 92, icon: <Zap className="w-4 h-4" /> },
          { name: 'Tailwind CSS', level: 95, icon: <Palette className="w-4 h-4" /> },
          { name: 'HTML5 / CSS3', level: 95, icon: <Globe className="w-4 h-4" /> },
          { name: 'Responsive Design', level: 98, icon: <Smartphone className="w-4 h-4" /> },
        ],
      },
      {
        id: 'backend',
        name: 'Backend',
        icon: <Server className="w-5 h-5" />,
        color: 'from-emerald-500 to-teal-500',
        skills: [
          { name: 'PHP / Laravel', level: 90, icon: <Box className="w-4 h-4" /> },
          { name: 'Python / Django', level: 82, icon: <Terminal className="w-4 h-4" /> },
          { name: 'RESTful APIs', level: 95, icon: <Settings className="w-4 h-4" /> },
          { name: 'System Architecture', level: 85, icon: <Layers className="w-4 h-4" /> },
          { name: 'C# / .NET', level: 75, icon: <Cpu className="w-4 h-4" /> },
        ],
      },
      {
        id: 'database',
        name: 'Bases de Datos',
        icon: <Database className="w-5 h-5" />,
        color: 'from-blue-600 to-emerald-600',
        skills: [
          { name: 'MySQL / PostgreSQL', level: 92, icon: <Database className="w-4 h-4" /> },
          { name: 'SQL Server', level: 88, icon: <Server className="w-4 h-4" /> },
          { name: 'DB Design & Norm.', level: 95, icon: <Layers className="w-4 h-4" /> },
          { name: 'Query Optimization', level: 90, icon: <Zap className="w-4 h-4" /> },
          { name: 'NoSQL Basics', level: 70, icon: <Database className="w-4 h-4" /> },
        ],
      },
      {
        id: 'tools',
        name: 'DevOps & Tools',
        icon: <Wrench className="w-5 h-5" />,
        color: 'from-slate-600 to-slate-800',
        skills: [
          { name: 'Git / GitHub', level: 95, icon: <Code2 className="w-4 h-4" /> },
          { name: 'Linux / Bash', level: 88, icon: <Terminal className="w-4 h-4" /> },
          { name: 'Power BI / Analysis', level: 50, icon: <Search className="w-4 h-4" /> },
          { name: 'Clean Architecture', level: 90, icon: <ShieldCheck className="w-4 h-4" /> },
        ],
      },
    ],
    []
  );

  const certifications = useMemo(
    () => [
      {
        id: 'python-data',
        title: 'Introducción al Análisis de Datos con Python',
        institution: 'Desafío Latam',
        year: '2025',
        icon: <Terminal className="w-5 h-5" />,
        url: 'https://cursos.desafiolatam.com/certificates/iomtclsnzk',
      },
      {
        id: 'ethical-hacker',
        title: 'Ethical Hacker',
        institution: 'Cisco Academy',
        year: '2025',
        icon: <Shield className="w-5 h-5" />,
        url: 'https://www.credly.com/badges/dab50835-7442-4537-82d0-01a023448a0d/public_url',
      },
      {
        id: 'cybersecurity',
        title: 'Diplomado en Ciberseguridad',
        institution: 'Universitaria de Colombia',
        year: '2025',
        icon: <ShieldCheck className="w-5 h-5" />,
        url: 'https://universitariadecolombia.edu.co',
      },
      {
        id: 'os-basics',
        title: 'Operating Systems Basics',
        institution: 'Cisco Academy',
        year: '2024',
        icon: <Cpu className="w-5 h-5" />,
        url: 'https://www.credly.com/badges/25cca512-adc3-4882-b1a1-7967824f2b1c/public_url',
      },
      {
        id: 'network-troubleshooting',
        title: 'Network Addressing and Basic Troubleshooting',
        institution: 'Cisco Academy',
        year: '2024',
        icon: <Globe className="w-5 h-5" />,
        url: 'https://www.credly.com/badges/028171a9-a778-426b-8482-8a49cb70c2e6/public_url',
      },
      {
        id: 'scrum-cert',
        title: 'Scrum Foundation Professional Certification (SFPC™)',
        institution: 'Certiprof',
        year: '2024',
        icon: <ClipboardList className="w-5 h-5" />,
        url: 'https://www.credly.com/badges/a59f1898-7629-4b0f-a753-7f2c1b09b774/public_url',
      },
      {
        id: 'iot-intro',
        title: 'Introduction to IoT',
        institution: 'Cisco Academy',
        year: '2024',
        icon: <Wifi className="w-5 h-5" />,
        url: 'https://www.credly.com/badges/aa38e66d-7503-4af7-ad93-358cddf90d2d/public_url',
      },
    ],
    []
  );

  const filteredCategories = useMemo(() => {
    if (activeCategory === 'all') return skillCategories;
    return skillCategories.filter((cat) => cat.id === activeCategory);
  }, [activeCategory, skillCategories]);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 bg-white dark:bg-slate-950 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800/50 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-4">
                Expertise
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                Mi Stack <span className="text-primary-600">Tecnológico</span>
              </h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-sm font-medium">
              Especializado en arquitecturas mantenibles y sistemas de alto rendimiento.
            </p>
          </motion.div>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {['all', ...skillCategories.map(c => c.id)].map((catId) => {
            const cat = catId === 'all' ? { name: 'Todo', icon: <Box className="w-4 h-4" /> } : skillCategories.find(c => c.id === catId);
            return (
              <button
                key={catId}
                onClick={() => setActiveCategory(catId)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all ${activeCategory === catId
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-6 mb-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                layout
                key={category.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.name}</h3>
                    <p className="text-sm font-medium text-slate-500">{category.skills.length} Tecnologías</p>
                  </div>
                </div>

                <div className="grid gap-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                          <span className="text-primary-600 dark:text-primary-400">{skill.icon}</span>
                          {skill.name}
                        </div>
                        <span className="text-xs font-black text-slate-400 tracking-widest">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Certifications Section */}
        <div id="certificaciones" className="mt-20 scroll-mt-24">
          <div className="text-center mb-12">
            <div className="inline-block mb-4" role="status">
              <span className="px-4 py-2 bg-emerald-100 border border-emerald-200 text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-800/50 dark:text-emerald-400 text-sm font-medium flex items-center gap-2">
                <Award className="w-4 h-4" aria-hidden="true" />
                Certificaciones
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Formación Complementaria
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Certificaciones y cursos especializados en tecnología
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              cert.url ? (
                <a
                  key={cert.id}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/30 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                  aria-label={`Ver certificado: ${cert.title} de ${cert.institution}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 rounded-lg flex items-center justify-center text-2xl"
                      aria-hidden="true"
                    >
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-sm leading-tight hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{cert.institution}</p>
                      <div className="flex items-center gap-1 text-slate-500 dark:text-slate-500 text-xs">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        <span>{cert.year}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <div
                  key={cert.id}
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 opacity-90 cursor-not-allowed"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 rounded-lg flex items-center justify-center text-2xl"
                      aria-hidden="true"
                    >
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-sm leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{cert.institution}</p>
                      <div className="flex items-center gap-1 text-slate-500 dark:text-slate-500 text-xs">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        <span>{cert.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
