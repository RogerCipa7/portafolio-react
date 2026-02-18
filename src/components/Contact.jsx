import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useMemo } from 'react';

function Contact() {
  const contactInfo = useMemo(
    () => [
      {
        id: 'email',
        icon: <Mail className="w-5 h-5" aria-hidden="true" />,
        label: 'Email',
        value: 'rogercipagauta2003@gmail.com',
        link: 'mailto:rogercipagauta2003@gmail.com',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        id: 'phone',
        icon: <Phone className="w-5 h-5" aria-hidden="true" />,
        label: 'Teléfono',
        value: '+57 350 676 3349',
        link: 'tel:+573506763349',
        color: 'from-green-500 to-emerald-500',
      },
      {
        id: 'location',
        icon: <MapPin className="w-5 h-5" aria-hidden="true" />,
        label: 'Ubicación',
        value: 'Colombia',
        link: null,
        color: 'from-purple-500 to-pink-500',
      },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [
      {
        id: 'github',
        icon: <Github className="w-6 h-6" aria-hidden="true" />,
        label: 'GitHub',
        username: '@roger',
        link: 'https://github.com/RogerCipa7',
        hoverColor: 'group-hover:text-slate-900 dark:group-hover:text-white',
      },
      {
        id: 'linkedin',
        icon: <Linkedin className="w-6 h-6" aria-hidden="true" />,
        label: 'LinkedIn',
        username: 'Roger Cipagauta',
        link: 'https://www.linkedin.com/in/roger-cipagauta-b1626b329/',
        hoverColor: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
      },
    ],
    []
  );

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent"></div>
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl dark:bg-blue-900/20"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl dark:bg-emerald-900/20"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4" role="status">
            <span className="px-4 py-2 bg-blue-100 border border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800/50 dark:text-blue-400 text-sm font-medium">
              💬 Hablemos
            </span>
          </div>
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Contáctame a través de cualquiera de estos medios. ¡Estoy disponible para nuevos proyectos!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <div
                key={info.id}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-lg bg-gradient-to-r ${info.color} p-0.5`}>
                    <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[6px] flex items-center justify-center text-slate-900 dark:text-white">
                      {info.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-slate-900 dark:text-slate-100 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded"
                        aria-label={`Enlace a ${info.label}: ${info.value}`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-slate-900 dark:text-slate-100 font-medium">{info.value}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/30 transition-all duration-300">
            <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-4">Sígueme en redes</h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 group"
                  aria-label={`${social.label}: ${social.username}`}
                >
                  <div className={`text-slate-500 dark:text-slate-400 ${social.hoverColor}`}>
                    {social.icon}
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {social.label}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{social.username}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800/50 rounded-xl p-6 flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 dark:bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 dark:bg-green-400"></span>
              </span>
              <span className="text-green-700 dark:text-green-400 font-semibold text-lg">Disponible</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Actualmente disponible para proyectos freelance y oportunidades laborales
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
