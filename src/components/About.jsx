import { useState, useEffect, useMemo } from 'react';
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
} from 'lucide-react';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = useMemo(
    () => [
      {
        id: 'database',
        icon: <Database className="w-5 h-5" aria-hidden="true" />,
        title: 'Bases de Datos',
        description:
          'Diseño y optimización de bases de datos relacionales y NoSQL para aplicaciones escalables',
      },
      {
        id: 'web-dev',
        icon: <Globe className="w-5 h-5" aria-hidden="true" />,
        title: 'Desarrollo Web',
        description:
          'Construcción de aplicaciones web modernas con las últimas tecnologías y mejores prácticas',
      },
      {
        id: 'clean-code',
        icon: <Code className="w-5 h-5" aria-hidden="true" />,
        title: 'Código Limpio',
        description:
          'Escribo código mantenible, escalable y bien documentado siguiendo estándares de la industria',
      },
      {
        id: 'backend',
        icon: <Server className="w-5 h-5" aria-hidden="true" />,
        title: 'Backend & APIs',
        description:
          'Desarrollo de arquitecturas backend robustas y APIs RESTful eficientes',
      },
      {
        id: 'architecture',
        icon: <Layers className="w-5 h-5" aria-hidden="true" />,
        title: 'Arquitectura de Software',
        description:
          'Diseño de soluciones escalables con arquitecturas limpias y patrones modernos',
      },
      {
        id: 'innovation',
        icon: <Lightbulb className="w-5 h-5" aria-hidden="true" />,
        title: 'Soluciones Innovadoras',
        description:
          'Enfoque en resolver problemas reales con tecnología y pensamiento creativo',
      },
    ],
    []
  );

  const stats = useMemo(
    () => [
      {
        id: 'projects',
        label: 'Proyectos',
        value: '15+',
        icon: <Terminal className="w-4 h-4" aria-hidden="true" />,
      },
      {
        id: 'technologies',
        label: 'Tecnologías',
        value: '20+',
        icon: <Database className="w-4 h-4" aria-hidden="true" />,
      },
      {
        id: 'commits',
        label: 'Commits',
        value: '800+',
        icon: <Sparkles className="w-4 h-4" aria-hidden="true" />,
      },
    ],
    []
  );

  const expertise = useMemo(
    () => [
      'Ingeniería de Sistemas',
      'Bases de Datos SQL/NoSQL',
      'Desarrollo Web Full Stack',
      'Arquitectura de Software',
      'APIs & Backend',
      'Cloud Computing',
    ],
    []
  );

  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-heading"
      className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent"></div>
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl dark:bg-blue-900/20"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl dark:bg-emerald-900/20"></div>

      <div
        className={`relative max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4" role="status">
            <span className="px-4 py-2 bg-blue-100 border border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800/50 dark:text-blue-400 text-sm font-medium">
              🚀 Sobre Mí
            </span>
          </div>
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Construyendo el futuro, una línea de código a la vez
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Description */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/30 transition-all duration-300">
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
                Soy{' '}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Ingeniero de Sistemas
                </span>{' '}
                con especialización en{' '}
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  bases de datos
                </span>{' '}
                y{' '}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  desarrollo web
                </span>
                , apasionado por crear soluciones tecnológicas que marquen la
                diferencia.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Mi experiencia abarca desde el diseño e implementación de{' '}
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  arquitecturas de bases de datos robustas
                </span>{' '}
                hasta el desarrollo de{' '}
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                  aplicaciones web completas y escalables
                </span>
                .
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Me enfoco en escribir{' '}
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  código limpio y eficiente
                </span>
                , comprender profundamente los procesos de desarrollo, y construir
                sistemas que no solo funcionen perfectamente, sino que realmente{' '}
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                  resuelvan problemas del mundo real
                </span>
                .
              </p>
            </div>

            {/* Expertise Tags */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/30 transition-all duration-300">
              <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                Áreas de Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/20 dark:to-emerald-900/20 border border-blue-200 dark:border-blue-800/50 rounded-lg text-sm text-slate-700 dark:text-slate-300 font-medium hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md dark:hover:shadow-blue-900/20 transition-all duration-300 hover:scale-105"
                    aria-label={`Habilidad: ${skill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-center hover:scale-105 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/30 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300"
                  aria-label={`${stat.value} ${stat.label}`}
                >
                  <div className="flex justify-center mb-2 text-blue-600 dark:text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Highlights Grid */}
          <div className="grid grid-cols-1 gap-4">
            {highlights.map((item) => (
              <div
                key={item.id}
                className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/30 transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-gradient-to-br from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300 border border-blue-200 dark:border-blue-700/50">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-slate-900 dark:text-white font-semibold text-base mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            type="button"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/40 dark:hover:shadow-blue-900/30 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            <span>¿Hablamos de tu proyecto?</span>
            <Rocket className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;