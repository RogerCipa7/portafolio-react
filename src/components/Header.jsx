// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Wrench, Mail, Github, Linkedin, Sun, Moon, Code } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'inicio',     label: 'Inicio',     icon: <Home    className="w-4 h-4" /> },
    { id: 'sobre-mi',  label: 'Sobre mí',   icon: <User    className="w-4 h-4" /> },
    { id: 'skills',    label: 'Skills',     icon: <Wrench  className="w-4 h-4" /> },
    { id: 'proyectos', label: 'Proyectos',  icon: <Code    className="w-4 h-4" /> },
    { id: 'contacto',  label: 'Contacto',   icon: <Mail    className="w-4 h-4" /> },
  ];

  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, href: 'https://github.com/rogercipa7', label: 'GitHub' },
    { icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/in/roger-cipagauta-b1626b329/', label: 'LinkedIn' },
  ];

  const handleMenuClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-800'
            : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/50'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Menu Desktop */}
            <ul className="hidden md:flex items-center gap-2 mx-auto">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuClick(item.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 font-medium ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg shadow-blue-500/30'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="hidden lg:block">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Social + Theme + CTA (Desktop) */}
            <div className="hidden md:flex items-center gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}

              <button
                onClick={toggleTheme}
                aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>

              <button
                onClick={() => handleMenuClick('contacto')}
                className="ml-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
              >
                Contrátame
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuClick(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg shadow-blue-500/30'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex justify-center gap-3 mb-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}

                <button
                  onClick={toggleTheme}
                  aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
                >
                  {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
              </div>

              <button
                onClick={() => handleMenuClick('contacto')}
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
              >
                Contrátame
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="h-16 md:h-20"></div>
    </>
  );
}

export default Header;
