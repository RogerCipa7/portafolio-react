// src/App.js
import { useTheme } from './hooks/useTheme';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  
  useTheme();

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-600 dark:text-slate-500 text-sm border-t border-slate-200 dark:border-slate-800">
        © {new Date().getFullYear()} Roger Cipagauta · Ingeniería de Sistemas
      </footer>
    </div>
  );
}

export default App;