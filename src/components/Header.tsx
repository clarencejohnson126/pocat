'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Produkte', href: '/products' },
    { name: 'Konfigurator', href: '/configurator' },
    { name: 'Über uns', href: '/about' },
    { name: 'Kontakt', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-md' : 'bg-black/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/POCAT-Logo-2021-Grün.png"
                  alt="POCAT Logo"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
            </Link>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#00c278] focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-[#00c278]'
                    : 'text-white hover:text-[#00c278]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              href="/login"
              className="whitespace-nowrap text-base font-medium text-white hover:text-[#00c278]"
            >
              Anmelden
            </Link>
            <Link
              href="/configurator"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#00c278] hover:bg-[#00c278]/80"
            >
              Jetzt konfigurieren
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-[#00c278]/20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === link.href
                  ? 'text-[#00c278] bg-black'
                  : 'text-white hover:text-[#00c278] hover:bg-black'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-3 border-t border-[#00c278]/20">
            <div className="flex items-center px-5">
              <Link
                href="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#00c278]"
                onClick={() => setIsOpen(false)}
              >
                Anmelden
              </Link>
              <Link
                href="/configurator"
                className="ml-auto block px-4 py-2 rounded-md text-base font-medium text-white bg-[#00c278] hover:bg-[#00c278]/80"
                onClick={() => setIsOpen(false)}
              >
                Jetzt konfigurieren
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
} 