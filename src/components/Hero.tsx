import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[#00c278]/5 via-white to-[#00c278]/10 overflow-hidden">
      {/* Decorative elements */}
      <div className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 rounded-full bg-[#00c278]/10 opacity-50"></div>
      <div className="hidden lg:block absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full bg-[#00c278]/10 opacity-50"></div>
      <div className="hidden lg:block absolute top-1/2 left-1/4 transform -translate-y-1/2 w-40 h-40 rounded-full bg-[#00c278]/20 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Hochwertige Bindungen</span>{' '}
                <span className="block text-[#00c278] xl:inline">zum kleinen Preis</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Pocat bietet professionelle Bindungen für Ihre Dokumente in Heidelberg. 
                Konfigurieren Sie Ihre individuelle Bindung mit verschiedenen Covers und Bindungsarten.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#konfigurator"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00c278] hover:bg-[#00a066] md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Jetzt konfigurieren
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#bindungen"
                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                    Bindungen ansehen
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-br from-[#00c278]/5 to-white flex items-center justify-center p-4 lg:p-8">
          <div className="relative w-full h-full">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#00c278]/20 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#00c278]/20 rounded-full opacity-50"></div>
            <Image
              src="/B9-1536x1536.png"
              alt="Pocat Bindung"
              width={600}
              height={600}
              className="object-contain h-full w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
} 