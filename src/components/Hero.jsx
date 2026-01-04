import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Code2, Database, Globe } from 'lucide-react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Ingeniero de Sistemas",
    "Desarrollador Full Stack",
    "Especialista en Bases de Datos",
    "Arquitecto de Software"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-white/80 to-transparent dark:from-blue-900/20 dark:via-slate-900/80 dark:to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl dark:bg-blue-900/20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl dark:bg-emerald-900/20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>
        </div>
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Badge */}
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-emerald-100 border border-emerald-200 text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-800/50 dark:text-emerald-400 text-sm font-medium inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 dark:bg-emerald-400"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-500"></span>
            </span>
            Disponible para proyectos
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">
          Hola, soy{' '}
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-600 bg-clip-text text-transparent">
            Roger Cipagauta
          </span>
        </h1>

        {/* Animated Role */}
        <div className="h-16 md:h-20 mb-6 flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-700 dark:text-slate-300 transition-all duration-500">
            {roles[currentRole]}
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
          Desarrollador enfocado en la creación de{' '}
          <span className="text-blue-600 dark:text-blue-400 font-medium">soluciones web claras</span>,{' '}
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">escalables</span> y{' '}
          <span className="text-blue-700 dark:text-blue-500 font-medium">bien estructuradas</span>.
          Especializado en bases de datos y arquitecturas modernas.
        </p>

        {/* Tech Icons */}
        <div className="flex justify-center gap-6 mb-10">
          {[
            { icon: <Code2 className="w-6 h-6" />, label: "Desarrollo", lightColor: "from-blue-100 to-blue-200", darkColor: "from-blue-900/40 to-blue-800/40" },
            { icon: <Database className="w-6 h-6" />, label: "Bases de Datos", lightColor: "from-emerald-100 to-emerald-200", darkColor: "from-emerald-900/40 to-emerald-800/40" },
            { icon: <Globe className="w-6 h-6" />, label: "Web Apps", lightColor: "from-blue-100 to-emerald-100", darkColor: "from-blue-900/40 to-emerald-900/40" }
          ].map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-2"
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${item.lightColor} dark:${item.darkColor} border border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-400 group-hover:border-blue-400 dark:group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-200/50 dark:group-hover:shadow-blue-900/30 transition-all duration-300 group-hover:scale-110`}>
                {item.icon}
              </div>
              <span className="text-xs text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection('contacto')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/40 dark:hover:shadow-blue-900/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Contáctame
          </button>
          
          <button
            onClick={() => scrollToSection('sobre-mi')}
            className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-medium hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Conocer más
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/roger"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/roger"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:rogercipagauta2003@email.com"
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="/cv.pdf"
            download
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 transition-all duration-300 hover:scale-110"
            aria-label="Descargar CV"
          >
            <Download className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-slate-400 dark:text-slate-500" />
      </div>
    </section>
  );
}

export default Hero;