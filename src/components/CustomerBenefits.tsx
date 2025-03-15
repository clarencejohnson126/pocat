'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const benefits = [
  {
    id: 1,
    title: 'Qualität ohne Kompromisse',
    description: 'Bei POCAT verwenden wir nur hochwertige Materialien und modernste Technologien, um sicherzustellen, dass Ihre Dokumente professionell und langlebig gebunden werden.',
    icon: (
      <svg className="h-8 w-8 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Schneller Service',
    description: 'Zeit ist kostbar, besonders wenn Abgabefristen näher rücken. Unser Express-Service ermöglicht es Ihnen, Ihre gebundenen Dokumente oft noch am selben Tag zu erhalten.',
    icon: (
      <svg className="h-8 w-8 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Persönliche Beratung',
    description: 'Unser erfahrenes Team steht Ihnen mit Rat und Tat zur Seite, um die perfekte Bindungslösung für Ihre spezifischen Anforderungen zu finden.',
    icon: (
      <svg className="h-8 w-8 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Vielfältige Optionen',
    description: 'Von Premium-Hardcover bis zur praktischen Spiralbindung – wir bieten eine breite Palette an Bindungsarten, Farben und Materialien für jeden Anspruch und jedes Budget.',
    icon: (
      <svg className="h-8 w-8 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Bequemer Online-Service',
    description: 'Konfigurieren und bestellen Sie Ihre Bindung bequem online. Sie können Ihre Druckdaten hochladen oder später bereitstellen – ganz wie es Ihnen passt.',
    icon: (
      <svg className="h-8 w-8 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" />
        <path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" />
        <path fillRule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Kostenloser Versand',
    description: 'Profitieren Sie von unserem kostenlosen Versand für alle Bestellungen. Ihre gebundenen Dokumente werden sicher verpackt und zuverlässig geliefert.',
    icon: (
      <svg className="h-8 w-8 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
      </svg>
    ),
  },
];

const specialFeatures = [
  {
    id: 'premium',
    title: 'Premium-Materialien',
    description: 'Wir verwenden ausschließlich hochwertige Materialien für unsere Bindungen, von eleganten Hardcover-Einbänden bis zu robusten Spiralen.',
    image: '/premium-materials.jpg',
  },
  {
    id: 'expertise',
    title: 'Jahrelange Expertise',
    description: 'Mit über 15 Jahren Erfahrung in der Branche wissen wir genau, worauf es bei professionellen Bindungen ankommt.',
    image: '/expertise.jpg',
  },
  {
    id: 'satisfaction',
    title: '100% Zufriedenheitsgarantie',
    description: 'Wir sind erst zufrieden, wenn Sie es sind. Bei POCAT steht Ihre Zufriedenheit an erster Stelle.',
    image: '/satisfaction.jpg',
  },
];

export default function CustomerBenefits() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ihre Vorteile bei POCAT
          </h2>
          <div className="mt-2 flex justify-center">
            <div className="w-20 h-1 rounded-full bg-[#00c278] inline-flex"></div>
          </div>
          <p className="mt-4 max-w-2xl text-xl text-white mx-auto">
            Entdecken Sie, warum Kunden in Heidelberg und Umgebung POCAT für ihre Bindungen und Schreibutensilien wählen.
          </p>
        </motion.div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-16 w-16 rounded-full bg-[#00c278]/20 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-white">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Special Features Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Was uns besonders macht</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="relative overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-8 text-center">
                      <div className="h-16 w-16 rounded-full bg-[#00c278]/20 flex items-center justify-center mx-auto mb-4">
                        <svg className="h-8 w-8 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                      <p className="text-white">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customer Testimonial */}
        <motion.div 
          className="bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-800 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
              <div className="h-24 w-24 rounded-full bg-gray-800 flex items-center justify-center mx-auto">
                <svg className="h-12 w-12 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="md:w-2/3">
              <blockquote className="text-white italic text-lg mb-4">
                &quot;Als Doktorand an der Universität Heidelberg war ich auf der Suche nach einer professionellen Bindung für meine Dissertation. POCAT hat meine Erwartungen übertroffen – die Qualität der Hardcover-Bindung ist erstklassig, und der Service war schnell und freundlich. Ich kann POCAT jedem empfehlen, der Wert auf Qualität und Professionalität legt.&quot;
              </blockquote>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="text-white font-bold">Dr. Michael Schmidt</p>
                  <p className="text-[#00c278] text-sm">Universität Heidelberg</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Häufig gestellte Fragen</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-3">Wie lange dauert die Bindung meines Dokuments?</h4>
              <p className="text-white">In der Regel können wir Ihre Bindung innerhalb von 24 Stunden fertigstellen. Mit unserem Express-Service ist es oft sogar möglich, Ihre Bindung noch am selben Tag abzuholen.</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-3">Kann ich meine Druckdaten später hochladen?</h4>
              <p className="text-white">Ja, Sie können Ihre Bindung konfigurieren und bestellen und Ihre Druckdaten später hochladen oder per E-Mail senden. Wir beginnen mit der Produktion, sobald wir Ihre Daten erhalten haben.</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-3">Welche Bindungsart ist für meine Abschlussarbeit am besten geeignet?</h4>
              <p className="text-white">Für Abschlussarbeiten und Dissertationen empfehlen wir unsere Premium-Hardcover-Bindung. Sie bietet ein professionelles Erscheinungsbild und ist langlebig. Gerne beraten wir Sie auch persönlich zu den verschiedenen Optionen.</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800">
              <h4 className="text-lg font-medium text-white mb-3">Bieten Sie auch Druck- und Kopierservices an?</h4>
              <p className="text-white">Ja, neben unseren Bindungsservices bieten wir auch hochwertige Druck- und Kopierservices an. Wir können Ihre Dokumente in verschiedenen Formaten und auf verschiedenen Papierarten drucken.</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Überzeugen Sie sich selbst von unseren Vorteilen
          </h3>
          <p className="text-white max-w-3xl mx-auto mb-8">
            Starten Sie jetzt mit der Konfiguration Ihrer perfekten Bindung oder kontaktieren Sie uns für eine persönliche Beratung.
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