'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background overlay with subtle pattern */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-[url('/POCAT-Logo-2021-Grün.png')] bg-center bg-no-repeat opacity-5 z-0 bg-[length:600px_auto]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center justify-center text-center">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/POCAT-Logo-2021-Grün.png"
            alt="POCAT Logo"
            width={300}
            height={100}
            className="h-auto w-auto max-w-[300px]"
            priority
          />
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block text-white">Hochwertige Bindungen</span>
          <span className="block text-[#00c278]">zum kleinen Preis</span>
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-xl md:text-2xl max-w-3xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Professionelle Bindungen für Ihre Dokumente, Abschlussarbeiten und mehr.
          Konfigurieren Sie Ihre individuelle Bindung in wenigen Schritten.
        </motion.p>
        
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#konfigurator"
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00c278] hover:bg-[#00a066] md:py-4 md:text-lg md:px-10 transition-colors"
          >
            Jetzt konfigurieren
          </a>
          
          <a
            href="#bindungen"
            className="px-8 py-3 border border-[#00c278] text-base font-medium rounded-md text-[#00c278] bg-transparent hover:bg-gray-900 md:py-4 md:text-lg md:px-10 transition-colors"
          >
            Mehr erfahren
          </a>
        </motion.div>
        
        {/* Payment methods */}
        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-4 opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="text-white bg-black px-4 py-2 rounded text-sm font-medium border border-[#00c278]/20">
            PayPal
          </div>
          <div className="text-white bg-black px-4 py-2 rounded text-sm font-medium border border-[#00c278]/20">
            Klarna
          </div>
          <div className="text-white bg-black px-4 py-2 rounded text-sm font-medium border border-[#00c278]/20">
            Giropay
          </div>
          <div className="text-white bg-black px-4 py-2 rounded text-sm font-medium border border-[#00c278]/20">
            Apple Pay
          </div>
          <div className="text-white bg-black px-4 py-2 rounded text-sm font-medium border border-[#00c278]/20">
            MasterCard
          </div>
          <div className="text-white bg-black px-4 py-2 rounded text-sm font-medium border border-[#00c278]/20">
            Visa
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-[#00c278] opacity-70" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
} 