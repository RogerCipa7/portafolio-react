// src/App.jsx
import { useEffect, useState } from 'react';
import { useTheme } from './hooks/useTheme';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const { theme } = useTheme();
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleError = (e) => {
      console.error("Caught global error in App:", e);
      setError(e.error?.message || e.message || "An unexpected error occurred");
    };
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-8">
        <div className="max-w-md bg-slate-800 p-8 rounded-2xl border border-red-500/50 shadow-2xl">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Error de Aplicación</h1>
          <p className="text-slate-300 mb-6 font-mono text-sm break-words">{error}</p>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="px-6 py-2 bg-red-500 rounded-lg font-bold hover:bg-red-600 transition-colors w-full"
          >
            Limpiar Cache y Recargar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-primary-500 selection:text-white transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-12 text-center text-slate-500 dark:text-slate-500 text-sm border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Roger Cipagauta · Software Engineering Portfolio</p>
          <p className="mt-2 text-xs opacity-50">Construido con React, Tailwind CSS y Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;