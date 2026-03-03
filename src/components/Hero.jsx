import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Code2, Database, Globe, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Ingeniero de Sistemas",
    "Desarrollador Frontend",
    "Bases en Bases de Datos",
    "Ruta hacia Desarrollador Full Stack"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden bg-white dark:bg-slate-950 scroll-mt-24"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-100/20 via-transparent to-transparent dark:from-primary-900/10 dark:via-transparent"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl dark:bg-primary-900/10"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-emerald/10 rounded-full blur-3xl dark:bg-emerald-900/10"></div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Availability Badge */}
        <motion.div variants={itemVariants} className="mb-8 inline-block">
          <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full flex items-center gap-3 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-emerald"></span>
            </span>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 tracking-wider uppercase">
              Disponible para nuevos desafíos
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
          Roger <span className="text-primary-600 dark:text-primary-400">Cipagauta</span>
        </motion.h1>

        {/* Dynamic Role */}
        <motion.div variants={itemVariants} className="h-12 sm:h-16 mb-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentRole}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-4xl font-bold text-slate-600 dark:text-slate-300"
            >
              {roles[currentRole]}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* Short Bio */}
        <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Desarrollador <span className="text-slate-900 dark:text-white underline decoration-primary-500/30 decoration-4 underline-offset-4">Frontend en ruta a Full Stack</span>.
          Emocionado por aprender, enfrentar nuevos retos tecnológicos y construir soluciones de alto impacto.
        </motion.p>

        {/* CTA Actions */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('contacto')}
            className="group w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary-500/20 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            Empieza un proyecto
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('sobre-mi')}
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            Ver trayectoria
          </button>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 sm:gap-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-primary-600" />
            <span className="font-bold text-slate-900 dark:text-white">Clean Code</span>
          </div>
          <div className="flex items-center gap-2">
            <Database className="w-8 h-8 text-accent-emerald" />
            <span className="font-bold text-slate-900 dark:text-white">DB Architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-accent-indigo" />
            <span className="font-bold text-slate-900 dark:text-white">Performance Ops</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Explora</span>
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-primary-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
