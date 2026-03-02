import { useState } from 'react';
import {
  Mail,
  MessageSquare,
  Send,
  Github,
  Linkedin,
  MapPin,
  Clock,
  Sparkles,
  ChevronRight,
  User,
  AtSign,
  Briefcase
} from 'lucide-react';
import { motion } from 'framer-motion';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    alert('Mensaje enviado con éxito (simulación)');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'rogercipagauta2003@gmail.com',
      href: 'mailto:rogercipagauta2003@gmail.com',
      color: 'text-blue-500',
      bg: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: 'https://linkedin.com/in/rogercipa',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'RogerCipa7',
      href: 'https://github.com/RogerCipa7',
      color: 'text-slate-900 dark:text-white',
      bg: 'bg-slate-100 dark:bg-slate-800'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contacto" className="relative py-32 px-4 sm:px-6 bg-white dark:bg-slate-950 overflow-hidden">
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
              <Send className="w-3 h-3" />
              Contacto Directo
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight"
            >
              ¿Tienes un <span className="text-primary-600">proyecto</span> en mente?
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 dark:text-slate-400 text-lg max-w-sm font-medium"
          >
            Disponible para nuevas oportunidades y colaboraciones técnicas.
          </motion.p>
        </div>

        <div className="flex justify-center">
          {/* Contact Info - Centered */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl w-full grid md:grid-cols-2 gap-8"
          >
            <div className="space-y-6 md:col-span-2">
              <motion.h3 variants={itemVariants} className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
                Información de contacto
              </motion.h3>
              <div className="grid md:grid-cols-3 gap-4">
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    variants={itemVariants}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center text-center p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary-500/30 transition-all shadow-sm hover:shadow-xl"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform shadow-inner mb-4`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-slate-900 dark:text-white font-bold group-hover:text-primary-600 transition-colors text-sm break-all">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div variants={itemVariants} className="md:col-span-2 p-8 rounded-[2.5rem] bg-primary-600 text-white relative overflow-hidden shadow-2xl shadow-primary-500/20 mt-8">
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center gap-2 mb-4 text-primary-200">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Disponibilidad</span>
                </div>
                <h4 className="text-2xl font-black mb-2">Abierto a nuevos desafíos</h4>
                <p className="text-primary-100 text-sm leading-relaxed mb-6 max-w-xl mx-auto">Actualmente aceptando solicitudes para desarrollo de software y colaboraciones técnicas de frontend.</p>
                <div className="flex items-center gap-2 text-xs font-bold bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl w-fit mx-auto">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  Respuesta Inmediata
                </div>
              </div>
              <Sparkles className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10 rotate-12" />
              <Sparkles className="absolute -top-4 -left-4 w-24 h-24 text-white/10 -rotate-12" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
