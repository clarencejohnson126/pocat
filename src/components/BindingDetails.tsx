'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const bindingTypes = [
  {
    id: 'hardcover',
    name: 'Premium Hardcover',
    description: 'Die hochwertigste Bindungsart für Abschlussarbeiten, Dissertationen und wichtige Dokumente.',
    image: '/Hard-Cover-Book-01-Kopie-450x450.png',
    features: [
      'Elegante und professionelle Präsentation',
      'Langlebig und robust',
      'Verfügbar in verschiedenen Farben',
      'Goldprägung des Titels möglich',
      'Perfekt für Abschlussarbeiten und Dissertationen',
      'Hochwertige Heißkleberbindung'
    ],
    price: '19,00 €',
    suitable: ['Abschlussarbeiten', 'Dissertationen', 'Wichtige Geschäftsdokumente', 'Portfolios'],
    process: [
      'Auswahl der Farbe und Optionen',
      'Hochladen oder Mitbringen der Druckdaten',
      'Professioneller Druck auf hochwertigem Papier',
      'Sorgfältige Bindung mit Qualitätsmaterialien',
      'Qualitätskontrolle vor der Übergabe'
    ]
  },
  {
    id: 'softcover',
    name: 'Softcover',
    description: 'Eine flexible und kostengünstige Bindungsoption für Berichte, Handbücher und Broschüren.',
    image: '/B5-300x300.png',
    features: [
      'Leicht und flexibel',
      'Kostengünstige Option',
      'Professionelles Erscheinungsbild',
      'Verschiedene Farboptionen',
      'Ideal für Dokumente mit mittlerem Umfang',
      'Hochwertige Heißkleberbindung'
    ],
    price: '8,50 €',
    suitable: ['Seminararbeiten', 'Berichte', 'Handbücher', 'Broschüren', 'Präsentationen'],
    process: [
      'Auswahl der Farbe und Optionen',
      'Hochladen oder Mitbringen der Druckdaten',
      'Professioneller Druck auf Qualitätspapier',
      'Sorgfältige Bindung',
      'Qualitätskontrolle vor der Übergabe'
    ]
  },
  {
    id: 'spiral',
    name: 'Spiralbindung',
    description: 'Praktische Bindung für Dokumente, die flach aufliegen sollen, wie Handbücher und Präsentationen.',
    image: '/comb_bound_book_02-blak-150x150.png',
    features: [
      'Dokument liegt flach auf',
      'Seiten können um 360° umgeschlagen werden',
      'Robust und langlebig',
      'Ideal für den täglichen Gebrauch',
      'Verschiedene Spiralfarben verfügbar',
      'Hochwertige Metallspirale'
    ],
    price: '5,50 €',
    suitable: ['Handbücher', 'Kochbücher', 'Präsentationen', 'Skripte', 'Arbeitshefte'],
    process: [
      'Auswahl der Spiralfarbe und Optionen',
      'Hochladen oder Mitbringen der Druckdaten',
      'Professioneller Druck',
      'Präzises Stanzen und Spiralbindung',
      'Qualitätskontrolle vor der Übergabe'
    ]
  },
  {
    id: 'leimbindung',
    name: 'Leimbindung',
    description: 'Professionelle Bindung für Dokumente mit vielen Seiten, ideal für Bücher und umfangreiche Berichte.',
    image: '/B-300x300.png',
    features: [
      'Professionelles Erscheinungsbild',
      'Geeignet für Dokumente mit vielen Seiten',
      'Langlebig und robust',
      'Verschiedene Farboptionen für den Einband',
      'Kosteneffizient für größere Auflagen',
      'Hochwertige Klebebindung'
    ],
    price: '7,99 €',
    suitable: ['Bücher', 'Umfangreiche Berichte', 'Kataloge', 'Jahrbücher', 'Zeitschriften'],
    process: [
      'Auswahl der Einbandfarbe und Optionen',
      'Hochladen oder Mitbringen der Druckdaten',
      'Professioneller Druck',
      'Präzise Leimbindung',
      'Qualitätskontrolle vor der Übergabe'
    ]
  }
];

export default function BindingDetails() {
  const [selectedBinding, setSelectedBinding] = useState(bindingTypes[0]);

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
            Unsere Bindungsarten im Detail
          </h2>
          <div className="mt-2 flex justify-center">
            <div className="w-20 h-1 rounded-full bg-[#00c278] inline-flex"></div>
          </div>
          <p className="mt-4 max-w-2xl text-xl text-white mx-auto">
            Entdecken Sie die perfekte Bindung für Ihre Dokumente. Qualität und Professionalität für jeden Anspruch.
          </p>
        </motion.div>

        {/* Binding Type Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {bindingTypes.map((binding) => (
            <button
              key={binding.id}
              className={`px-6 py-3 rounded-md transition-all ${
                selectedBinding.id === binding.id
                  ? 'bg-[#00c278] text-white'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              onClick={() => setSelectedBinding(binding)}
            >
              {binding.name}
            </button>
          ))}
        </div>

        {/* Selected Binding Details */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          key={selectedBinding.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 shadow-lg">
              <div className="absolute inset-0 bg-[#00c278] opacity-5 rounded-lg"></div>
              <Image
                src={selectedBinding.image}
                alt={selectedBinding.name}
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column - Details */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{selectedBinding.name}</h3>
            <p className="text-white mb-6">{selectedBinding.description}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-[#00c278] mb-3">Eigenschaften:</h4>
              <ul className="space-y-2">
                {selectedBinding.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-[#00c278] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-[#00c278] mb-3">Geeignet für:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedBinding.suitable.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-[#00c278] mb-3">Unser Prozess:</h4>
              <ol className="space-y-2">
                {selectedBinding.process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-[#00c278] text-white text-xs mr-2 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-white">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-sm text-white">Preis ab</span>
                <p className="text-2xl font-bold text-[#00c278]">{selectedBinding.price}</p>
                <span className="text-xs text-white">inkl. MwSt.</span>
              </div>
              <Link 
                href="/konfigurator" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#00c278] hover:bg-[#00a066] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00c278] transition-all duration-300"
              >
                Jetzt konfigurieren
              </Link>
            </div>
          </div>
        </motion.div>
        
        {/* Why Choose POCAT */}
        <motion.div 
          className="mt-20 bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Warum POCAT die Nr. 1 in Heidelberg ist</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-[#00c278]/20 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Premium-Qualität</h4>
              <p className="text-white">Wir verwenden nur hochwertige Materialien und modernste Technologien für perfekte Ergebnisse.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-[#00c278]/20 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Schneller Service</h4>
              <p className="text-white">Express-Service verfügbar – Ihre Bindung kann in vielen Fällen noch am selben Tag fertiggestellt werden.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-[#00c278]/20 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Persönliche Beratung</h4>
              <p className="text-white">Unser erfahrenes Team berät Sie individuell, um die perfekte Bindungslösung für Ihre Bedürfnisse zu finden.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-[#00c278]/20 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Vielfältige Optionen</h4>
              <p className="text-white">Große Auswahl an Bindungsarten, Farben und Materialien für jeden Anspruch und jedes Budget.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-[#00c278]/20 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Zentrale Lage</h4>
              <p className="text-white">Unser Geschäft in Heidelberg ist leicht erreichbar und bietet bequeme Öffnungszeiten für Ihre Bindungsbedürfnisse.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-[#00c278]/20 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-[#00c278]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" />
                  <path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" />
                  <path fillRule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Online-Service</h4>
              <p className="text-white">Bequeme Online-Konfiguration und Bestellung mit der Option, Ihre Druckdaten hochzuladen oder später bereitzustellen.</p>
            </div>
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Bereit, Ihre Dokumente professionell zu binden?
          </h3>
          <p className="text-white max-w-3xl mx-auto mb-8">
            Nutzen Sie unseren Konfigurator, um Ihre perfekte Bindung zu erstellen, oder besuchen Sie uns in unserem Geschäft in Heidelberg für eine persönliche Beratung.
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