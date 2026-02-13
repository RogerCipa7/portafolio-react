import { ExternalLink, Github, Code, Sparkles } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "Portafolio Personal",
      description: "Sitio web personal desarrollado con React y Vite, enfocado en mostrar habilidades técnicas y buenas prácticas de desarrollo.",
      tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/RogerCipa7/portafolio-react",
      live: "https://portafoliorc.netlify.app/",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      title: "PURASER - Limpieza Láser",
      description: "Sitio web corporativo para empresa colombiana especializada en limpieza láser de precisión industrial, con sistema de agendamiento de citas integrado a Google Calendar.",
      tags: ["Laravel", "PHP", "Tailwind CSS", "Google Calendar API", "React"],
      github: null,
      live: "https://puraser.com.co",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      title: "Dashboard de Análisis de Ventas Automotrices",
      description: "Plataforma web para gestión integral de ventas automotrices con procesamiento ETL automático, limpieza de datos y visualización interactiva de métricas empresariales.",
      tags: ["Python", "Flask", "Pandas", "NumPy", "Matplotlib", "MySQL", "Bootstrap"],
      github: "https://github.com/RogerCipa7/-Dashboard-de-Analisis-de-Ventas-Automotrices",
      live: null,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    }
  ];

  return (
    <section
      id="proyectos"
      aria-labelledby="projects-heading"
      className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent"></div>
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl dark:bg-blue-900/20"></div>
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl dark:bg-emerald-900/20"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-100 border border-purple-200 text-purple-700 dark:bg-purple-900/30 dark:border-purple-800/50 dark:text-purple-400 text-sm font-medium rounded-full">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>Mis Trabajos</span>
          </div>
          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Proyectos Destacados
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Una colección de mis trabajos más recientes que muestran mi experiencia en desarrollo web moderno.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] ${
                project.featured
                  ? 'md:col-span-2 lg:col-span-2 border-purple-300 dark:border-purple-700/50 bg-gradient-to-br from-purple-50/30 to-white/50 dark:from-purple-900/20 dark:to-slate-900/50'
                  : 'border-slate-200 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/30'
              } hover:border-purple-400 dark:hover:border-purple-500`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" aria-hidden="true" />
                    Destacado
                  </span>
                </div>
              )}

              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent dark:from-slate-950/90"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-full border border-slate-200 dark:border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-white transition-all"
                      aria-label={`Ver código fuente de ${project.title}`}
                    >
                      <Github className="w-4 h-4" aria-hidden="true" />
                      <span className="text-sm font-medium">Código</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all"
                      aria-label={`Ver demo en vivo de ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/50 rounded-full hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
            <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <p className="text-slate-700 dark:text-slate-300">
              ¿Interesado en ver más proyectos?{' '}
              <a
                href="https://github.com/RogerCipa7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
              >
                Visita mi GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
