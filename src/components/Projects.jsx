import { useState } from 'react';
import { ExternalLink, Github, Sparkles, Code, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Portafolio Personal",
    description: "Sitio web personal desarrollado con React y Vite, enfocado en mostrar habilidades técnicas y buenas prácticas de desarrollo.",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/RogerCipa7/portafolio-react",
    live: "https://portafoliorc.netlify.app/",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
    category: "Frontend",
  },
  {
    title: "PURASER — Limpieza Láser",
    description: "Sitio web corporativo para empresa colombiana especializada en limpieza láser de precisión industrial, con sistema de agendamiento de citas integrado a Google Calendar.",
    tags: ["Laravel", "PHP", "Tailwind CSS", "Google Calendar API", "React"],
    github: null,
    live: "https://puraser.com.co",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    category: "Full Stack",
  },
  {
    title: "Dashboard Ventas Automotrices",
    description: "Plataforma web para gestión integral de ventas automotrices con procesamiento ETL automático, limpieza de datos y visualización interactiva de métricas empresariales.",
    tags: ["Python", "Flask", "Pandas", "NumPy", "MySQL", "Bootstrap"],
    github: "https://github.com/RogerCipa7/-Dashboard-de-Analisis-de-Ventas-Automotrices",
    live: null,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
    category: "Data / Backend",
  },
];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  const openLink = (url) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative rounded-2xl overflow-hidden backdrop-blur-md
        transition-all duration-300 border w-full
        ${project.featured
          ? 'md:col-span-2 border-indigo-500/30 bg-gradient-to-br from-indigo-50/80 to-white/90 dark:from-indigo-950/60 dark:to-slate-950/95'
          : 'border-slate-200/80 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/75'
        }
        ${hovered
          ? project.featured
            ? 'border-violet-400/50 dark:border-violet-500/55 -translate-y-1 shadow-2xl shadow-indigo-200/60 dark:shadow-indigo-900/40'
            : 'border-emerald-400/40 dark:border-emerald-500/40 -translate-y-1 shadow-2xl shadow-emerald-100/60 dark:shadow-emerald-900/30'
          : 'shadow-sm'
        }
      `}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-xs font-bold tracking-wide bg-gradient-to-r from-violet-600 to-pink-600 shadow-lg shadow-violet-500/40">
          <Sparkles size={11} />
          Destacado
        </div>
      )}

      {/* Image */}
      <div className="h-48 sm:h-52 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-[1.07]' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-slate-100/70 dark:from-black/10 dark:via-transparent dark:to-slate-950/82" />
        <div className="absolute bottom-3 left-4 px-3 py-1 rounded-lg text-[10px] tracking-widest uppercase backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border border-indigo-200/60 dark:border-indigo-500/30 text-slate-600 dark:text-slate-300">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-extrabold tracking-tight leading-snug mb-2 text-slate-900 dark:text-slate-50">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 text-slate-500 dark:text-slate-400">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide bg-slate-100 dark:bg-slate-800/85 border border-slate-200 dark:border-slate-700/90 text-slate-600 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="h-px mb-4 bg-slate-200 dark:bg-slate-700/50" />

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => openLink(project.github)}
            disabled={!project.github}
            className={`
              flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-semibold
              border transition-all duration-200
              ${project.github
                ? 'cursor-pointer border-slate-300 dark:border-slate-600/70 bg-slate-50 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 hover:text-slate-900 dark:hover:text-white'
                : 'cursor-not-allowed border-slate-200/60 dark:border-slate-700/30 bg-slate-50/50 dark:bg-slate-900/40 text-slate-400 dark:text-slate-600 opacity-60'
              }
            `}
          >
            <Github size={14} />
            <span>Código</span>
          </button>

          <button
            onClick={() => openLink(project.live)}
            disabled={!project.live}
            className={`
              flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-semibold
              border-none transition-all duration-200
              ${project.live
                ? 'cursor-pointer bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-md shadow-blue-500/30 hover:from-blue-700 hover:to-emerald-600 hover:shadow-lg hover:shadow-blue-500/40'
                : 'cursor-not-allowed bg-gradient-to-r from-slate-400 to-slate-500 dark:from-slate-600 dark:to-slate-700 text-slate-200 dark:text-slate-400 opacity-60'
              }
            `}
          >
            <ExternalLink size={14} />
            <span>Demo</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="proyectos"
      aria-labelledby="projects-heading"
      className="relative py-16 sm:py-20 px-4 sm:px-6
        overflow-hidden
        bg-gradient-to-br from-slate-50 via-white to-blue-50
        dark:from-slate-900 dark:via-slate-900 dark:to-slate-950"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

        /* Blobs — contenidos con max-width para no causar overflow */
        .pj-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          max-width: 100vw;
        }
        .pj-blob-1 {
          width: min(600px, 80vw);
          height: min(600px, 80vw);
          top: -80px; left: -100px;
          background: radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 70%);
          animation: pjDriftA 14s ease-in-out infinite alternate;
        }
        .pj-blob-2 {
          width: min(480px, 70vw);
          height: min(480px, 70vw);
          bottom: -60px; right: -80px;
          background: radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%);
          animation: pjDriftB 17s ease-in-out infinite alternate;
        }
        .pj-blob-3 {
          width: min(300px, 50vw);
          height: min(300px, 50vw);
          top: 40%; left: 48%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%);
          animation: pjDriftA 20s ease-in-out infinite alternate-reverse;
        }
        @keyframes pjDriftA {
          from { transform: translate(0, 0); }
          to   { transform: translate(20px, 14px); }
        }
        @keyframes pjDriftB {
          from { transform: translate(0, 0); }
          to   { transform: translate(-16px, 10px); }
        }

        /* Grid */
        .pj-grid-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* Cards grid */
        .pj-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 48px;
        }
        @media (min-width: 640px) {
          .pj-cards {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        /* Badge pulse */
        .pj-badge { position: relative; display: inline-block; margin-bottom: 20px; }
        .pj-badge::after {
          content: ''; position: absolute; inset: -1px; border-radius: 999px;
          background: linear-gradient(135deg, #818cf8, #34d399);
          z-index: -1; opacity: 0.35;
          animation: pjBadge 3s ease-in-out infinite;
        }
        @keyframes pjBadge {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50%       { opacity: 0.55; transform: scale(1.02); }
        }

        /* CTA */
        .pj-cta {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 20px; border-radius: 999px;
          font-size: 13px; font-weight: 500; font-family: inherit;
          cursor: pointer; text-decoration: none;
          backdrop-filter: blur(8px);
          transition: all 0.3s;
          max-width: calc(100vw - 48px);
          flex-wrap: wrap;
          justify-content: center;
        }
        @media (min-width: 480px) {
          .pj-cta {
            font-size: 14px;
            padding: 13px 28px;
            flex-wrap: nowrap;
          }
        }
      `}</style>

      <div className="pj-blob pj-blob-1" />
      <div className="pj-blob pj-blob-2" />
      <div className="pj-blob pj-blob-3" />
      <div className="pj-grid-bg" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="pj-badge">
            <div className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-[13px] font-semibold tracking-wide
              bg-indigo-100/80 dark:bg-indigo-500/10
              border border-indigo-200 dark:border-indigo-500/20
              text-indigo-700 dark:text-indigo-300
              backdrop-blur-md">
              <Sparkles size={14} />
              Mis Trabajos
            </div>
          </div>

          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4
              text-slate-900 dark:text-slate-50"
          >
            Proyectos{' '}
            <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              Destacados
            </span>
          </h2>

          <p className="text-sm sm:text-base leading-relaxed max-w-md mx-auto text-slate-500 dark:text-slate-400 px-2">
            Una colección de trabajos recientes que muestran mi experiencia
            en desarrollo web moderno.
          </p>
        </div>

        {/* Cards */}
        <div className="pj-cards">
          {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://github.com/RogerCipa7"
            target="_blank"
            rel="noopener noreferrer"
            className="pj-cta
              bg-white/80 dark:bg-slate-800/80
              border border-slate-200 dark:border-slate-700/55
              text-slate-600 dark:text-slate-400
              hover:border-blue-400 dark:hover:border-blue-500
              hover:text-slate-900 dark:hover:text-slate-100
              hover:shadow-lg hover:shadow-blue-100/60 dark:hover:shadow-blue-900/20"
          >
            <Code size={15} className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
            <span className="text-center">
              ¿Interesado en ver más?{' '}
              <span className="font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Visita mi GitHub
              </span>
            </span>
            <ArrowRight size={14} className="text-emerald-500 flex-shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
}
