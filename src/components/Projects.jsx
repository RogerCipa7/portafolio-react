import { useState, useMemo } from 'react';
import {
  ExternalLink,
  Github,
  Code2,
  Database,
  Globe,
  Settings,
  Layout,
  Layers,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Zap,
  Box,
  Sparkles,
  X,
  Briefcase,
  FlaskConical
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "Portafolio Personal",
    description: "Sitio web personal desarrollado con React y Vite, enfocado en mostrar habilidades técnicas y buenas prácticas de desarrollo.",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/RogerCipa7/portafolio-react",
    live: "https://portafoliorc.netlify.app/",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    category: "frontend",
    type: "personal",
    icon: <Layout className="w-8 h-8" />
  },
  {
    id: 2,
    title: "GlowBook — Centro de Estética",
    description: "Plataforma integral para centros de estética con reservas inteligentes en tiempo real, validación de horarios, catálogo de servicios y panel administrativo con dashboard de analíticas e ingresos. Conectado a Supabase.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "React Router v6"],
    github: "https://github.com/RogerCipa7/Estetica-React",
    live: "https://estetica-react.vercel.app/",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800",
    featured: true,
    category: "fullstack",
    type: "personal",
    icon: <Zap className="w-8 h-8" />
  },
  {
    id: 3,
    title: "PURASER — Limpieza Láser",
    description: "Sitio web corporativo para empresa colombiana especializada en limpieza láser de precisión industrial, con sistema de agendamiento de citas integrado a Google Calendar.",
    tags: ["Laravel", "PHP", "Tailwind CSS", "Google Calendar API", "React"],
    github: null,
    live: "https://puraser.com.co",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    category: "fullstack",
    type: "profesional",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    id: 4,
    title: "Dashboard Ventas Automotrices",
    description: "Plataforma web para gestión integral de ventas automotrices con procesamiento ETL automático, limpieza de datos y visualización interactiva de métricas empresariales.",
    tags: ["Python", "Flask", "Pandas", "NumPy", "MySQL", "Bootstrap"],
    github: "https://github.com/RogerCipa7/-Dashboard-de-Analisis-de-Ventas-Automotrices",
    live: null,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    category: "backend",
    type: "personal",
    icon: <Database className="w-8 h-8" />
  },
  {
    id: 5,
    title: "Revista Automotriz",
    description: "Landing page editorial de alto impacto para una revista automotriz digital. Catálogo interactivo, modal dinámico, animaciones fluidas y diseño dark/light totalmente responsive construido con Astro.",
    tags: ["Astro", "TypeScript", "Tailwind CSS", "CSS Animations"],
    github: "https://github.com/RogerCipa7/Landing-revista-automotriz",
    live: "https://landing-revista-automotriz.vercel.app/",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    category: "frontend",
    type: "personal",
    icon: <Code2 className="w-8 h-8" />
  },
  {
    id: 6,
    title: "UFC Fan — Mundo del MMA",
    description: "Plataforma web dedicada a los amantes de las MMA. Explora luchadores, disciplinas, eventos y la historia del octágono con animaciones suaves y diseño 100% responsivo.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Lucide React"],
    github: "https://github.com/RogerCipa7/pag-ufc-next.js",
    live: "https://pag-ufc-next-js.vercel.app/",
    image: "https://www.estilomma.com/images/noticias/thumbnails/que%CC%81%20es%20la%20ufc_thumb_1300x725.jpg",
    featured: false,
    category: "frontend",
    type: "personal",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    id: 7,
    title: "Iron Core Gym 💀",
    description: "Landing page brutalista para un gimnasio premium de alto rendimiento en Bogotá. Diseño B2C con tipografía masiva, grain táctil, contraste extremo y animaciones de scroll. Arquitectura component-driven estricta con 8 secciones visuales independientes.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "Turbopack"],
    github: "https://github.com/RogerCipa7/Gym-Next",
    live: "https://gym-next-theta.vercel.app/",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    category: "frontend",
    type: "personal",
    icon: <Zap className="w-8 h-8" />
  },
  {
    id: 8,
    title: "Spotify Clone RC",
    description: "Clon funcional de Spotify especializado en corridos tumbados, bélicos y regional mexicano. Reproduce previews reales de 30s vía iTunes API, sistema de favoritos persistente, modo oscuro/claro, reproductor completo con shuffle y repeat, y navegación SPA ultrarrápida.",
    tags: ["React 18", "TypeScript", "Tailwind CSS", "Zustand", "Vite", "iTunes API"],
    github: "https://github.com/RogerCipa7/Spotify-Clone-React",
    live: "https://spotify-clone-react-liard.vercel.app/",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    category: "frontend",
    type: "personal",
    icon: <Sparkles className="w-8 h-8" />
  },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projectsData;
    return projectsData.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  const categories = [
    { id: 'all', label: 'Todos', icon: <Layers className="w-4 h-4" /> },
    { id: 'frontend', label: 'Frontend', icon: <Layout className="w-4 h-4" /> },
    { id: 'fullstack', label: 'Full Stack', icon: <Box className="w-4 h-4" /> },
    { id: 'backend', label: 'Backend/Data', icon: <Database className="w-4 h-4" /> },
  ];

  return (
    <section id="proyectos" className="relative py-32 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/20 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800/50 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-4"
            >
              <Code2 className="w-3 h-3" />
              Portafolio
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight"
            >
              Proyectos <span className="text-primary-600">Destacados</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 dark:text-slate-400 text-lg max-w-sm font-medium"
          >
            Una selección de mis trabajos más recientes, enfocados en calidad de código y UX.
          </motion.p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${activeCategory === cat.id
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl scale-105'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id || project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500"
              >
                {/* Project Image Wrapper */}
                <div className="relative h-64 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform duration-700">
                      {project.icon}
                    </div>
                  )}

                  {/* Type badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className={`flex items-center gap-1.5 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg backdrop-blur-md border
                      ${project.type === 'profesional'
                        ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 ring-1 ring-emerald-500/20'
                        : 'bg-primary-500/20 text-primary-600 dark:text-primary-400 border-primary-500/30 ring-1 ring-primary-500/20'
                      }`}>
                      {project.type === 'profesional' ? (
                        <>
                          <Briefcase className="w-3 h-3" />
                          <span>Profesional</span>
                        </>
                      ) : (
                        <>
                          <FlaskConical className="w-3 h-3" />
                          <span>Personal</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="flex gap-3">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white/20 transition-all">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-primary-600 rounded-xl text-white hover:bg-primary-700 transition-all">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1 text-primary-600 font-bold text-sm opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all cursor-pointer"
                    >
                      Ver detalles <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 sm:p-6"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4"
              >
                <div className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl pointer-events-auto flex flex-col md:flex-row border border-slate-200 dark:border-slate-800">
                  {/* Modal Image */}
                  <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                    {selectedProject.image ? (
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-slate-400">
                        {selectedProject.icon}
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest shadow-xl border border-white/20">
                        <Box className="w-3 h-3" />
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>

                  {/* Modal Content */}
                  <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
                        {selectedProject.title}
                      </h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Descripción del Proyecto</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Tecnologías Utilizadas</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-white text-xs font-bold border border-slate-200 dark:border-slate-700">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                        {selectedProject.live && (
                          <a
                            href={selectedProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/25"
                          >
                            <ExternalLink className="w-5 h-5" />
                            Ver Proyecto
                          </a>
                        )}
                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg"
                          >
                            <Github className="w-5 h-5" />
                            Código Fuente
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;