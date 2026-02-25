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
  {
    title: "UFC Fan — Mundo del MMA",
    description: "Plataforma web dedicada a los amantes de las MMA. Explora luchadores, disciplinas, eventos y la historia del octágono con animaciones suaves y diseño 100% responsivo.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Lucide React"],
    github: "https://github.com/RogerCipa7/pag-ufc-next.js",
    live: "https://pag-ufc-next-js.vercel.app/",
    image: "https://www.estilomma.com/images/noticias/thumbnails/que%CC%81%20es%20la%20ufc_thumb_1300x725.jpg",
    featured: false,
    category: "Frontend",
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
        transition-all duration-400
        border
        ${project.featured
          ? 'md:col-span-2 border-indigo-500/30 dark:border-indigo-500/30 bg-gradient-to-br from-indigo-50/80 to-white/90 dark:from-indigo-950/60 dark:to-slate-950/95'
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
      <div className="h-52 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-[1.07]' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-slate-100/70 dark:from-black/10 dark:via-transparent dark:to-slate-950/82" />

        {/* Category chip */}
        <div className="absolute bottom-3.5 left-4 px-3 py-1 rounded-lg text-[10px] tracking-widest uppercase backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border border-indigo-200/60 dark:border-indigo-500/30 text-slate-600 dark:text-slate-300">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-extrabold tracking-tight leading-snug mb-2.5 text-slate-900 dark:text-slate-50">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-5 text-slate-500 dark:text-slate-400">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide
                bg-slate-100 dark:bg-slate-800/85
                border border-slate-200 dark:border-slate-700/90
                text-slate-600 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px mb-5 bg-slate-200 dark:bg-slate-700/50" />

        {/* Buttons */}
        <div className="flex gap-2.5">
          {/* Ghost — Código */}
          <button
            onClick={() => openLink(project.github)}
            disabled={!project.github}
            className={`
              flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-semibold
              border transition-all duration-200
              ${project.github
                ? 'cursor-pointer border-slate-300 dark:border-slate-600/70 bg-slate-50 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500'
                : 'cursor-not-allowed border-slate-200/60 dark:border-slate-700/30 bg-slate-50/50 dark:bg-slate-900/40 text-slate-400 dark:text-slate-600 opacity-60'
              }
            `}
          >
            <Github size={14} />
            Código
          </button>

          {/* Gradient — Demo */}
          <button
            onClick={() => openLink(project.live)}
            disabled={!project.live}
            className={`
              flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-semibold
              border-none transition-all duration-200
              ${project.live
                ? 'cursor-pointer bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-md shadow-blue-500/30 hover:from-blue-700 hover:to-emerald-600 hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-px'
                : 'cursor-not-allowed bg-gradient-to-r from-slate-400 to-slate-500 dark:from-slate-600 dark:to-slate-700 text-slate-200 dark:text-slate-400 opacity-60'
              }
            `}
          >
            <ExternalLink size={14} />
            Demo
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
      className="relative py-20 px-6 overflow-hidden
        bg-gradient-to-br from-slate-50 via-white to-blue-50
        dark:from-slate-900 dark:via-slate-900 dark:to-slate-950"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

        /* Blobs */
        .pj-blob { position:absolute; border-radius:50%; pointer-events:none; }
        .pj-blob-1 {
          width:600px; height:600px; top:-120px; left:-160px;
          background: radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 70%);
          animation: pjDriftA 14s ease-in-out infinite alternate;
        }
        .pj-blob-2 {
          width:480px; height:480px; bottom:-80px; right:-100px;
          background: radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%);
          animation: pjDriftB 17s ease-in-out infinite alternate;
        }
        .pj-blob-3 {
          width:320px; height:320px; top:40%; left:48%;
          transform:translate(-50%,-50%);
          background: radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%);
          animation: pjDriftA 20s ease-in-out infinite alternate-reverse;
        }
        @keyframes pjDriftA { from{transform:translate(0,0)} to{transform:translate(26px,16px)} }
        @keyframes pjDriftB { from{transform:translate(0,0)} to{transform:translate(-20px,12px)} }

        /* Subtle grid */
        .pj-grid-bg {
          position:absolute; inset:0; pointer-events:none;
          background-image:
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
          background-size:60px 60px;
        }
        :not(.dark) .pj-grid-bg {
          background-image:
            linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px);
        }

        /* Projects grid */
        .pj-cards {
          display:grid;
          grid-template-columns: repeat(2, 1fr);
          gap:20px;
          margin-bottom:56px;
        }
        @media(max-width:768px){
          .pj-cards { grid-template-columns:1fr; }
          .pj-cards > * { grid-column: span 1 !important; }
        }

        /* Badge pulse */
        .pj-badge { position:relative; display:inline-block; margin-bottom:20px; }
        .pj-badge::after {
          content:''; position:absolute; inset:-1px; border-radius:999px;
          background:linear-gradient(135deg,#818cf8,#34d399);
          z-index:-1; opacity:0.35;
          animation: pjBadge 3s ease-in-out infinite;
        }
        @keyframes pjBadge {
          0%,100%{opacity:0.25;transform:scale(1)}
          50%{opacity:0.55;transform:scale(1.02)}
        }

        /* CTA pill */
        .pj-cta {
          display:inline-flex; align-items:center; gap:10px;
          padding:13px 28px; border-radius:999px;
          font-size:14px; font-weight:500; font-family:inherit;
          cursor:pointer; text-decoration:none;
          backdrop-filter:blur(8px);
          transition:all 0.3s;
        }
      `}</style>

      {/* Background */}
      <div className="pj-blob pj-blob-1" />
      <div className="pj-blob pj-blob-2" />
      <div className="pj-blob pj-blob-3" />
      <div className="pj-grid-bg" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── HEADER ── */}
        <div className="text-center mb-14">
          <div className="pj-badge">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-semibold tracking-wide
              bg-indigo-100/80 dark:bg-indigo-500/10
              border border-indigo-200 dark:border-indigo-500/22
              text-indigo-700 dark:text-indigo-300
              backdrop-blur-md">
              <Sparkles size={14} />
              Mis Trabajos
            </div>
          </div>

          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-tight mb-4
              text-slate-900 dark:text-slate-50"
          >
            Proyectos{' '}
            <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              Destacados
            </span>
          </h2>

          <p className="text-base leading-relaxed max-w-md mx-auto text-slate-500 dark:text-slate-400">
            Una colección de trabajos recientes que muestran mi experiencia
            en desarrollo web moderno.
          </p>
        </div>

        {/* ── CARDS ── */}
        <div className="pj-cards">
          {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>

        {/* ── CTA ── */}
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
              hover:bg-white dark:hover:bg-slate-800
              hover:shadow-lg hover:shadow-blue-100/60 dark:hover:shadow-blue-900/20
              hover:-translate-y-0.5"
          >
            <Code size={16} className="text-blue-500 dark:text-blue-400" />
            <span>
              ¿Interesado en ver más?{' '}
              <span className="font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Visita mi GitHub
              </span>
            </span>
            <ArrowRight size={14} className="text-emerald-500" />
          </a>
        </div>

      </div>
    </section>
  );
}
