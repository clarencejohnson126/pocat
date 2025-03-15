'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const bindingTypes = [
  {
    id: 'spiral',
    name: 'Spiralbindung',
    description: 'Klassische Spiralbindung für flexible Dokumente, die flach aufliegen sollen.',
    price: 5.50,
    image: '/comb_bound_book_02-blak-150x150.png',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
      </svg>
    ),
  },
  {
    id: 'hardcover',
    name: 'Hardcover',
    description: 'Hochwertige Hardcover-Bindung für professionelle Präsentationen und Abschlussarbeiten.',
    price: 19.00,
    image: '/Hard-Cover-Book-01-Kopie-450x450.png',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
      </svg>
    ),
  },
  {
    id: 'softcover',
    name: 'Softcover',
    description: 'Flexible Softcover-Bindung mit Lederoptik für Berichte und Dokumentationen.',
    price: 8.50,
    image: '/B5-300x300.png',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
        <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 'leimbindung',
    name: 'Leimbindung',
    description: 'Professionelle Leimbindung für Dokumente mit vielen Seiten.',
    price: 7.99,
    image: '/B-300x300.png',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function BindingTypes() {
  const [selectedBinding, setSelectedBinding] = useState(bindingTypes[0]);

  return (
    <section id="bindungen" className="py-16 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="hidden lg:block absolute top-0 right-1/4 w-64 h-64 rounded-full bg-[#00c278]/5 opacity-30"></div>
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-[#00c278]/5 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Unsere Bindungsarten
          </h2>
          <div className="mt-2 flex justify-center">
            <div className="w-20 h-1 rounded-full bg-[#00c278] inline-flex"></div>
          </div>
          <p className="mt-4 max-w-2xl text-xl text-white mx-auto">
            Wählen Sie aus verschiedenen hochwertigen Bindungsarten für Ihre Dokumente.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {bindingTypes.map((binding, index) => (
            <motion.div 
              key={binding.id} 
              className={`group relative bg-gray-900 rounded-lg shadow-sm p-6 cursor-pointer transition-all duration-300 ${
                selectedBinding.id === binding.id 
                  ? 'ring-2 ring-[#00c278] transform scale-105 shadow-lg' 
                  : 'hover:shadow-md hover:border-[#00c278]/20 hover:bg-gray-800'
              }`}
              onClick={() => setSelectedBinding(binding)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-90 lg:h-80 lg:aspect-none">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black p-4 relative">
                  {selectedBinding.id === binding.id && (
                    <div className="absolute inset-0 bg-[#00c278] opacity-5 rounded-md"></div>
                  )}
                  <Image
                    src={binding.image}
                    alt={binding.name}
                    width={150}
                    height={150}
                    className="w-full h-full object-center object-contain transition-transform duration-300 transform group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white flex items-center">
                    <span className="text-[#00c278] mr-2">{binding.icon}</span>
                    {binding.name}
                  </h3>
                  <p className="text-lg font-medium text-[#00c278]">
                    {binding.price.toFixed(2)} €
                  </p>
                </div>
                <p className="mt-1 text-sm text-white">{binding.description}</p>
                
                {selectedBinding.id === binding.id && (
                  <div className="mt-4 flex justify-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#00c278]/20 text-[#00c278]">
                      <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Ausgewählt
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-gray-900 shadow-lg overflow-hidden sm:rounded-lg border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-gray-900 to-black">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-[#00c278]/20 rounded-full p-2 mr-3">
                {selectedBinding.icon}
              </div>
              <h3 className="text-lg leading-6 font-medium text-white">
                {selectedBinding.name} - Details
              </h3>
            </div>
            <p className="mt-1 max-w-2xl text-sm text-white">
              Alle Informationen zu Ihrer ausgewählten Bindungsart.
            </p>
          </div>
          <div className="border-t border-gray-800">
            <dl>
              <div className="bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#00c278]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  Bindungsart
                </dt>
                <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{selectedBinding.name}</dd>
              </div>
              <div className="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#00c278]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Beschreibung
                </dt>
                <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{selectedBinding.description}</dd>
              </div>
              <div className="bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#00c278]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Preis
                </dt>
                <dd className="mt-1 text-sm font-bold text-[#00c278] sm:mt-0 sm:col-span-2">{selectedBinding.price.toFixed(2)} €</dd>
              </div>
              <div className="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#00c278]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Lieferzeit
                </dt>
                <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">1-2 Werktage</dd>
              </div>
              <div className="bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#00c278]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                  Aktion
                </dt>
                <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                  <a 
                    href="#konfigurator" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#00c278] hover:bg-[#00a066] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00c278] transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Jetzt konfigurieren
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 