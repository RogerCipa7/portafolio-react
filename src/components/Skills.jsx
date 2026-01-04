import { useState, useMemo } from 'react';
import {
  Code2,
  Database,
  Wrench,
  Palette,
  Server,
  Award,
  Calendar,
} from 'lucide-react';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = useMemo(
    () => [
      {
        id: 'frontend',
        name: 'Frontend',
        icon: <Palette className="w-5 h-5" aria-hidden="true" />,
        color: 'from-blue-500 to-cyan-500',
        skills: [
          { name: 'HTML5', level: 95, icon: '🌐' },
          { name: 'CSS3', level: 90, icon: '🎨' },
          { name: 'JavaScript', level: 88, icon: '⚡' },
          { name: 'React', level: 85, icon: '⚛️' },
          { name: 'Tailwind CSS', level: 90, icon: '💨' },
          { name: 'Bootstrap', level: 85, icon: '🅱️' },
        ],
      },
      {
        id: 'backend',
        name: 'Backend',
        icon: <Server className="w-5 h-5" aria-hidden="true" />,
        color: 'from-emerald-500 to-teal-500',
        skills: [
          { name: 'PHP', level: 90, icon: '🐘' },
          { name: 'Laravel', level: 88, icon: '🔺' },
          { name: 'Python', level: 85, icon: '🐍' },
          { name: 'Django/Flask', level: 75, icon: '🔥' },
          { name: 'REST APIs', level: 85, icon: '🔌' },
          { name: 'C++/C#', level: 80, icon: '⚙️' },
        ],
      },
      {
        id: 'database',
        name: 'Bases de Datos',
        icon: <Database className="w-5 h-5" aria-hidden="true" />,
        color: 'from-blue-600 to-emerald-600',
        skills: [
          { name: 'MySQL', level: 92, icon: '🐬' },
          { name: 'SQL Server', level: 88, icon: '💾' },
          { name: 'PostgreSQL', level: 85, icon: '🐘' },
          { name: 'SQLite', level: 85, icon: '📱' },
          { name: 'SQL Optimization', level: 88, icon: '⚡' },
          { name: 'Database Design', level: 90, icon: '📊' },
        ],
      },
      {
        id: 'tools',
        name: 'Herramientas & Análisis',
        icon: <Wrench className="w-5 h-5" aria-hidden="true" />,
        color: 'from-blue-500 to-emerald-500',
        skills: [
          { name: 'Git & GitHub', level: 90, icon: '📦' },
          { name: 'VS Code', level: 95, icon: '💻' },
          { name: 'Power BI', level: 85, icon: '📊' },
          { name: 'Excel Avanzado', level: 90, icon: '📈' },
          { name: 'Pandas/Matplotlib', level: 80, icon: '🐼' },
          { name: 'Linux Terminal', level: 85, icon: '🐧' },
        ],
      },
    ],
    []
  );

  // ✅ URLs limpias (sin espacios al final)
  const certifications = useMemo(
    () => [
      {
        id: 'python-data',
        title: 'Introducción al Análisis de Datos con Python',
        institution: 'Desafío Latam',
        year: '2025',
        icon: '🐍',
        url: 'https://cursos.desafiolatam.com/certificates/iomtclsnzk',
      },
      {
        id: 'ethical-hacker',
        title: 'Ethical Hacker',
        institution: 'Cisco Academy',
        year: '2025',
        icon: '🔐',
        url: 'https://www.credly.com/badges/dab50835-7442-4537-82d0-01a023448a0d/public_url',
      },
      {
        id: 'cybersecurity',
        title: 'Diplomado en Ciberseguridad',
        institution: 'Universitaria de Colombia',
        year: '2025',
        icon: '🛡️',
        url: 'https://universitariadecolombia.edu.co',
      },
      {
        id: 'os-basics',
        title: 'Operating Systems Basics',
        institution: 'Cisco Academy',
        year: '2024',
        icon: '💻',
        url: 'https://www.credly.com/badges/25cca512-adc3-4882-b1a1-7967824f2b1c/public_url',
      },
      {
        id: 'network-troubleshooting',
        title: 'Network Addressing and Basic Troubleshooting',
        institution: 'Cisco Academy',
        year: '2024',
        icon: '🌐',
        url: 'https://www.credly.com/badges/028171a9-a778-426b-8482-8a49cb70c2e6/public_url',
      },
      {
        id: 'scrum-cert',
        title: 'Scrum Foundation Professional Certification (SFPC™)',
        institution: 'Certiprof',
        year: '2024',
        icon: '📋',
        url: 'https://www.credly.com/badges/a59f1898-7629-4b0f-a753-7f2c1b09b774/public_url',
      },
      {
        id: 'iot-intro',
        title: 'Introduction to IoT',
        institution: 'Cisco Academy',
        year: '2024',
        icon: '🔌',
        url: 'https://www.credly.com/badges/aa38e66d-7503-4af7-ad93-358cddf90d2d/public_url',
      },
    ],
    []
  );

  const getFilteredSkills = () => {
    if (activeCategory === 'all') return skillCategories;
    return skillCategories.filter((cat) => cat.id === activeCategory);
  };

  const stats = useMemo(
    () => [
      { label: 'Lenguajes', value: '10+', icon: '💻' },
      { label: 'Frameworks', value: '8+', icon: '🚀' },
      { label: 'Bases de Datos', value: '5+', icon: '🗄️' },
      { label: 'Certificaciones', value: '7+', icon: '🏆' },
    ],
    []
  );

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent"></div>
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl dark:bg-emerald-900/20"></div>
      <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl dark:bg-blue-900/20"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4" role="status">
            <span className="px-4 py-2 bg-blue-100 border border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800/50 dark:text-blue-400 text-sm font-medium">
              💡 Habilidades Técnicas
            </span>
          </div>
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Herramientas y tecnologías que domino para crear soluciones completas
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500'
            }`}
            aria-pressed={activeCategory === 'all'}
          >
            <Code2 className="w-4 h-4" aria-hidden="true" />
            Todas
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500'
              }`}
              aria-pressed={activeCategory === category.id}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {getFilteredSkills().map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/30 transition-all duration-300"
            >
              {/* ✅ CORRECCIÓN: Ícono visible en ambos modos */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} p-0.5`}>
                  <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center text-slate-900 dark:text-white">
                    {category.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{category.skills.length} tecnologías</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={`${category.id}-${skill.name}`} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl" aria-hidden="true">
                          {skill.icon}
                        </span>
                        <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-slate-500 dark:text-slate-500 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div
                      className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`Nivel de dominio de ${skill.name}: ${skill.level} por ciento`}
                    >
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
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

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 text-center hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/30 transition-all duration-300 hover:scale-105"
              aria-label={`${stat.value} ${stat.label}`}
            >
              <div className="text-3xl mb-2 text-slate-700 dark:text-slate-300" aria-hidden="true">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;