'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Prof. Dr. Müller',
    role: 'Universität Heidelberg',
    image: '/testimonial-1.jpg',
    quote: 'Als Professor an der Universität Heidelberg verlasse ich mich seit Jahren auf POCAT für alle meine Bindungsbedürfnisse. Die Qualität der Hardcover-Bindungen für meine Forschungsarbeiten ist unübertroffen.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Schmidt',
    role: 'Masterstudentin',
    image: '/testimonial-2.jpg',
    quote: 'Meine Masterarbeit sieht dank der Premium-Hardcover-Bindung von POCAT absolut professionell aus. Der schnelle Service hat mir in letzter Minute sehr geholfen!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Dr. Thomas Weber',
    role: 'Forschungsinstitut Heidelberg',
    image: '/testimonial-3.jpg',
    quote: 'Die Spiralbindungen von POCAT sind perfekt für unsere Laborhandbücher. Sie liegen flach auf und sind robust genug für den täglichen Gebrauch im Labor.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Julia Becker',
    role: 'Doktorandin',
    image: '/testimonial-4.jpg',
    quote: 'Der Konfigurator auf der Website machte es super einfach, genau die richtige Bindung für meine Dissertation auszuwählen. Die Qualität ist erstklassig!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Michael Hoffmann',
    role: 'Geschäftsführer',
    image: '/testimonial-5.jpg',
    quote: 'Wir nutzen POCAT für alle unsere Geschäftsberichte und Präsentationen. Die Softcover-Bindungen sind elegant und vermitteln einen professionellen Eindruck bei unseren Kunden.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Lisa Krause',
    role: 'Grafikdesignerin',
    image: '/testimonial-6.jpg',
    quote: 'Als Designerin ist die Qualität der Präsentation meiner Arbeiten entscheidend. Die Bindungen von POCAT unterstreichen die Professionalität meiner Portfolios perfekt.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Was unsere Kunden sagen
          </h2>
          <div className="mt-2 flex justify-center">
            <div className="w-20 h-1 rounded-full bg-[#00c278] inline-flex"></div>
          </div>
          <p className="mt-4 max-w-2xl text-xl text-white mx-auto">
            Erfahren Sie, warum POCAT die erste Wahl in Heidelberg für Bindungen und Schreibutensilien ist.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center mr-4">
                  {/* Fallback icon if image is not available */}
                  <svg className="h-8 w-8 text-[#00c278]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14.25c-2.347 0-4.25-1.903-4.25-4.25S9.653 5.75 12 5.75s4.25 1.903 4.25 4.25-1.903 4.25-4.25 4.25zm0-7.5c-1.795 0-3.25 1.455-3.25 3.25s1.455 3.25 3.25 3.25 3.25-1.455 3.25-3.25-1.455-3.25-3.25-3.25z" />
                    <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">{testimonial.name}</h3>
                  <p className="text-[#00c278]">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-white italic mb-4">&quot;{testimonial.quote}&quot;</p>
              
              <div className="flex justify-end">
                <div className="text-[#00c278] text-sm">
                  Verifizierter Kunde
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Werden Sie Teil unserer zufriedenen Kundschaft
          </h3>
          <a 
            href="/konfigurator" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#00c278] hover:bg-[#00a066] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00c278] transition-all duration-300"
          >
            Jetzt Bindung konfigurieren
          </a>
        </motion.div>
      </div>
    </section>
  );
} 