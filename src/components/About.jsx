import { useMemo } from 'react';
import {
  Code,
  Database,
  Lightbulb,
  Rocket,
  Terminal,
  Sparkles,
  Server,
  Globe,
  Layers,
  ChevronRight,
  User
} from 'lucide-react';
import { motion } from 'framer-motion';

function About() {
  const highlights = useMemo(
    () => [
      {
        id: 'database',
        icon: <Database className="w-5 h-5" />,
        title: 'Bases de Datos',
        description: 'Diseño y optimización de arquitecturas de datos para aplicaciones de alto rendimiento.',
      },
      {
        id: 'web-dev',
        icon: <Globe className="w-5 h-5" />,
        title: 'Desarrollo Web',
        description: 'Construcción de experiencias digitales modernas con React, Next.js y ecosistemas modernos.',
      },
      {
        id: 'clean-code',
        icon: <Code className="w-5 h-5" />,
        title: 'Clean Code',
        description: 'Escribo código legible y mantenible siguiendo principios SOLID y mejores prácticas.',
      },
      {
        id: 'backend',
        icon: <Server className="w-5 h-5" />,
        title: 'Backend & APIs',
        description: 'Desarrollo de servicios robustos y escalables con integración de servicios en la nube.',
      },
    ],
    []
  );

  const stats = useMemo(
    () => [
      { id: 'projects', label: 'Proyectos', value: '15+', icon: <Terminal className="w-4 h-4" /> },
      { id: 'technologies', label: 'Tecnologías', value: '20+', icon: <Database className="w-4 h-4" /> },
      { id: 'commits', label: 'Commits', value: '800+', icon: <Sparkles className="w-4 h-4" /> },
    ],
    []
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="sobre-mi"
      className="relative py-24 px-4 sm:px-6 overflow-hidden bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800/50 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-4"
            >
              <User className="w-3 h-3" />
              Trayectoria Profesional
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight"
            >
              Transformando ideas en <span className="text-primary-600">soluciones</span> tecnológicas robustas
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 dark:text-slate-400 max-w-sm text-lg font-medium"
          >
            Ingeniero de Sistemas con pasión por la arquitectura de software y el desarrollo full-stack.
          </motion.p>
        </div>

        {/* Content Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Main Bio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div variants={itemVariants} className="prose prose-slate dark:prose-invert lg:prose-lg max-w-none">
              <p className="text-slate-600 dark:text-slate-300 text-xl leading-relaxed">
                Con una sólida base en <span className="text-slate-900 dark:text-white font-bold italic">Ingeniería de Sistemas</span>, mi enfoque se centra en la creación de ecosistemas digitales que sean no solo funcionales, sino también <span className="text-primary-600 font-bold">altamente escalables</span>.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Mi experiencia abarca todo el ciclo de vida del desarrollo, desde el modelado de datos complejo hasta la implementación de interfaces de usuario intuitivas. Creo firmemente que el <span className="text-accent-emerald font-bold">código de calidad</span> es aquel que resuelve problemas reales sin comprometer la mantenibilidad a largo plazo.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.id} className="p-6 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-primary-600 dark:text-primary-400 mb-2">{stat.icon}</div>
                  <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <button className="flex items-center gap-2 group text-primary-600 dark:text-primary-400 font-bold text-lg">
                Explorar mis certificaciones
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Expertise Modules */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 grid gap-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group p-6 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:border-primary-500/30 transition-all hover:shadow-xl hover:shadow-primary-500/5"
              >
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform shadow-inner">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
