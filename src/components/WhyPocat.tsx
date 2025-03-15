'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const reasons = [
  {
    id: 1,
    title: 'Tradition & Expertise',
    description: 'Seit über 15 Jahren sind wir der vertrauenswürdige Partner für Studierende, Professoren und Unternehmen in Heidelberg. Unsere langjährige Erfahrung spiegelt sich in der Qualität unserer Arbeit wider.',
    icon: (
      <svg className="h-10 w-10 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Zentrale Lage',
    description: 'Unser Geschäft befindet sich im Herzen von Heidelberg, nur wenige Gehminuten von der Universität entfernt. Ideal für Studierende und Akademiker, die schnell und unkompliziert ihre Arbeiten binden lassen möchten.',
    icon: (
      <svg className="h-10 w-10 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Höchste Qualitätsstandards',
    description: 'Wir verwenden ausschließlich Premium-Materialien und modernste Technologien, um sicherzustellen, dass Ihre Dokumente nicht nur gut aussehen, sondern auch langlebig sind.',
    icon: (
      <svg className="h-10 w-10 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Umfassendes Sortiment',
    description: 'Von Hardcover-Bindungen für Dissertationen bis hin zu hochwertigen Schreibutensilien – bei POCAT finden Sie alles, was Sie für Ihre akademischen und beruflichen Projekte benötigen.',
    icon: (
      <svg className="h-10 w-10 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Persönlicher Service',
    description: 'Bei uns sind Sie keine Nummer. Unser freundliches Team nimmt sich Zeit für Ihre individuellen Anforderungen und berät Sie kompetent zu allen Fragen rund um Bindungen und Schreibwaren.',
    icon: (
      <svg className="h-10 w-10 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Schnelle Bearbeitungszeiten',
    description: 'Zeit ist kostbar, besonders wenn Abgabefristen näher rücken. Mit unserem Express-Service können Sie Ihre gebundenen Dokumente oft noch am selben Tag abholen.',
    icon: (
      <svg className="h-10 w-10 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
    ),
  },
];

const stats = [
  { id: 1, value: '15+', label: 'Jahre Erfahrung' },
  { id: 2, value: '10.000+', label: 'Zufriedene Kunden' },
  { id: 3, value: '50.000+', label: 'Gebundene Dokumente' },
  { id: 4, value: '4.9/5', label: 'Durchschnittliche Bewertung' },
];

const testimonials = [
  {
    id: 1,
    quote: "Als Professor an der Universität Heidelberg verlasse ich mich seit Jahren auf POCAT für alle meine Bindungsbedürfnisse. Die Qualität und der Service sind unübertroffen.",
    author: "Prof. Dr. Thomas Müller",
    role: "Professor für Wirtschaftswissenschaften",
  },
  {
    id: 2,
    quote: "Meine Dissertation sieht dank der Premium-Hardcover-Bindung von POCAT absolut professionell aus. Der schnelle Service hat mir geholfen, meine Abgabefrist einzuhalten.",
    author: "Dr. Julia Weber",
    role: "Ehemalige Doktorandin",
  },
  {
    id: 3,
    quote: "POCAT ist meine erste Anlaufstelle für Schreibwaren und Bindungen. Das Team ist immer freundlich und hilfsbereit, und die Qualität der Produkte ist erstklassig.",
    author: "Michael Schmidt",
    role: "Regelmäßiger Kunde",
  },
];

export default function WhyPocat() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Warum POCAT die <span className="text-[#00c278]">Nr. 1</span> in Heidelberg ist
          </h1>
          <div className="mt-3 flex justify-center">
            <div className="w-24 h-1 rounded-full bg-[#00c278] inline-flex"></div>
          </div>
          <p className="mt-6 max-w-2xl text-xl text-white mx-auto">
            Entdecken Sie, warum Studierende, Professoren und Unternehmen in Heidelberg seit über 15 Jahren auf POCAT vertrauen.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div key={stat.id} className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-extrabold text-[#00c278]">{stat.value}</p>
                <p className="mt-2 text-lg text-white">{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Main Reasons Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Was uns zur ersten Wahl macht
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.id}
                className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="h-16 w-16 rounded-full bg-[#00c278]/20 flex items-center justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-white">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="relative h-96 mb-20 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <div className="text-center p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Unser Geschäft im Herzen von Heidelberg</h3>
              <p className="text-white max-w-2xl mx-auto">
                Besuchen Sie uns in unserer zentralen Lage in der Altstadt von Heidelberg, nur wenige Gehminuten von der Universität entfernt. Unser Team freut sich darauf, Sie persönlich zu beraten.
              </p>
              <div className="mt-6">
                <Link 
                  href="/kontakt" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#00c278] hover:bg-[#00a066] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00c278] transition-all duration-300"
                >
                  Kontakt & Anfahrt
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Was unsere Kunden sagen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <svg className="h-8 w-8 text-[#00c278] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-white italic mb-4">
                  {testimonial.quote}
                </blockquote>
                <div className="mt-4">
                  <p className="text-white font-bold">{testimonial.author}</p>
                  <p className="text-[#00c278] text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Unique Selling Points */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Was uns von anderen unterscheidet
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <svg className="h-6 w-6 text-[#00c278] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Nachhaltige Materialien
              </h3>
              <p className="text-white">
                Wir legen großen Wert auf Nachhaltigkeit. Daher verwenden wir, wo immer möglich, umweltfreundliche und recycelbare Materialien für unsere Bindungen und achten auf einen ressourcenschonenden Produktionsprozess.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <svg className="h-6 w-6 text-[#00c278] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Digitale Innovation
              </h3>
              <p className="text-white">
                Als modernes Unternehmen verbinden wir traditionelles Handwerk mit digitaler Innovation. Unser Online-Konfigurator ermöglicht es Ihnen, Ihre Bindung bequem von zu Hause aus zu gestalten und zu bestellen.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <svg className="h-6 w-6 text-[#00c278] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Lokale Produktion
              </h3>
              <p className="text-white">
                Alle unsere Bindungen werden direkt vor Ort in Heidelberg hergestellt. Das garantiert nicht nur kurze Lieferzeiten, sondern unterstützt auch die lokale Wirtschaft und reduziert den CO2-Fußabdruck.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <svg className="h-6 w-6 text-[#00c278] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Akademische Expertise
              </h3>
              <p className="text-white">
                Durch unsere enge Zusammenarbeit mit der Universität Heidelberg verstehen wir die spezifischen Anforderungen an akademische Arbeiten und können maßgeschneiderte Lösungen anbieten, die den höchsten Standards entsprechen.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Überzeugen Sie sich selbst
          </h2>
          <p className="text-white max-w-3xl mx-auto mb-8">
            Besuchen Sie uns in unserem Geschäft in Heidelberg oder konfigurieren Sie Ihre Bindung bequem online. Wir freuen uns darauf, Sie von unserer Qualität und unserem Service zu überzeugen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/konfigurator" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#00c278] hover:bg-[#00a066] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00c278] transition-all duration-300"
            >
              Jetzt konfigurieren
            </Link>
            <Link 
              href="/kontakt" 
              className="inline-flex items-center px-6 py-3 border border-[#00c278] text-base font-medium rounded-md shadow-sm text-[#00c278] bg-transparent hover:bg-[#00c278]/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00c278] transition-all duration-300"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 