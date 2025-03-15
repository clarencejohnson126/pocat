'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Binding types data
const bindingTypes = [
  { 
    id: 'hardcover', 
    name: 'Premium Hardcover', 
    subtext: 'Heißkleberbindung',
    basePrice: 19.00, 
    image: '/Hard-Cover-Book-01-Kopie-450x450.png' 
  },
  { 
    id: 'softcover', 
    name: 'Softcover', 
    subtext: 'Heißkleberbindung',
    basePrice: 8.50, 
    image: '/B5-300x300.png' 
  },
  { 
    id: 'spiral', 
    name: 'Spiralbindung', 
    subtext: 'Metallspirale',
    basePrice: 5.50, 
    image: '/comb_bound_book_02-blak-150x150.png' 
  },
];

// Color options
const colorOptions = [
  { id: 'schwarz', name: 'Schwarz', color: '#000000' },
  { id: 'grau', name: 'Grau', color: '#808080' },
  { id: 'grün', name: 'Grün', color: '#00c278' },
  { id: 'blau', name: 'Blau', color: '#0000FF', textColor: 'text-white' },
];

// Type for cart items
type CartItem = {
  id: string;
  binding: typeof bindingTypes[0];
  color: typeof colorOptions[0];
  quantity: number;
  price: number;
};

export default function Configurator() {
  // State for configuration options
  const [selectedBinding, setSelectedBinding] = useState(bindingTypes[0]);
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentPrice, setCurrentPrice] = useState(0);
  
  // Shopping cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Calculate current configuration price
  useEffect(() => {
    const total = selectedBinding.basePrice * quantity;
    setCurrentPrice(parseFloat(total.toFixed(2)));
  }, [selectedBinding, quantity]);
  
  // Calculate total cart price
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(parseFloat(total.toFixed(2)));
  }, [cartItems]);
  
  // Add current configuration to cart
  const addToCart = () => {
    const newItem: CartItem = {
      id: `${Date.now()}`,
      binding: selectedBinding,
      color: selectedColor,
      quantity,
      price: currentPrice
    };
    
    setCartItems(prev => [...prev, newItem]);
  };
  
  // Remove item from cart
  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <section id="konfigurator" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-2">
            <Image 
              src="/POCAT-Logo-2021-Grün.png" 
              alt="POCAT Logo" 
              width={24} 
              height={24} 
              className="mr-2"
            />
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 text-sm text-white">5/5 Sterne</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Konfiguriere deine Wunschbindung
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-white mx-auto">
            Deine <span className="font-bold">Druckdaten</span> kannst du jederzeit nach Bestellabschluss und auch wahlweise von einem anderen Gerät hochladen.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center bg-[#00c278] bg-opacity-20 px-4 py-2 rounded-md">
              <svg className="w-5 h-5 mr-2 text-[#00c278]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white">Versand kostenfrei</span>
            </div>
            
            <div className="flex items-center bg-gray-800 px-4 py-2 rounded-md">
              <span className="text-white">Zustellung vsl. Samstag,<br/>wenn du jetzt bestellst</span>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
          {/* Configuration options */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Product Images */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[1, 2, 3, 4].map((img) => (
                <div key={img} className="relative aspect-square bg-gray-800 rounded-md overflow-hidden">
                  <Image
                    src={img === 1 ? '/Hard-Cover-Book-01-Kopie-450x450.png' : 
                         img === 2 ? '/B5-300x300.png' : 
                         img === 3 ? '/comb_bound_book_02-blak-150x150.png' : 
                         '/B-300x300.png'}
                    alt={`Product image ${img}`}
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                  <div className="absolute top-2 right-2 bg-gray-900 bg-opacity-70 p-1 rounded-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-white mb-8">
              BachelorHero steht für Premium-Qualität. Daher vertreiben wir <span className="font-bold">keine minderwertigen Klemmbindungen</span>. Bei Fragen stehen wir dir gerne persönlich zur Verfügung.
            </p>
            
            {/* Binding Type Selection */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {bindingTypes.map((type) => (
                <div
                  key={type.id}
                  className={`relative border rounded-md p-4 cursor-pointer transition-all ${
                    selectedBinding.id === type.id
                      ? 'border-[#00c278] bg-gray-900'
                      : 'border-gray-700 bg-gray-800 hover:border-gray-500'
                  }`}
                  onClick={() => setSelectedBinding(type)}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 mb-4">
                      <Image
                        src={type.image}
                        alt={type.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-medium text-white text-center">{type.name}</p>
                    <p className="text-sm text-white text-center">{type.subtext}</p>
                  </div>
                  
                  {selectedBinding.id === type.id && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-[#00c278] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-white mb-4">Farbe der Bindung</h3>
              <div className="flex flex-wrap gap-3">
                {colorOptions.map((color) => (
                  <div
                    key={color.id}
                    className={`relative border rounded-md px-4 py-2 cursor-pointer transition-all ${
                      selectedColor.id === color.id
                        ? 'border-[#00c278] bg-gray-900'
                        : 'border-gray-700 hover:border-gray-500'
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <div className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full mr-2" 
                        style={{ backgroundColor: color.color }}
                      ></div>
                      <span className="text-white">{color.name}</span>
                    </div>
                    
                    {selectedColor.id === color.id && (
                      <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#00c278] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Summary and Cart */}
          <motion.div 
            className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800 h-fit sticky top-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">Gesamt</h3>
                <p className="text-sm text-white">Ausführliche Berechnung öffnen</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">{totalPrice.toFixed(2)}€</p>
                <p className="text-sm text-white">inkl. 7% MwSt.</p>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-32 h-48 bg-gray-800 rounded-md flex items-center justify-center">
                  <Image
                    src={selectedBinding.image}
                    alt={selectedBinding.name}
                    width={100}
                    height={140}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center border border-gray-700 rounded-md">
                    <button 
                      className="px-3 py-1 text-white hover:bg-gray-800"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 bg-transparent border-x border-gray-700 text-center text-white py-1"
                    />
                    <button 
                      className="px-3 py-1 text-white hover:bg-gray-800"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <button
              type="button"
              onClick={addToCart}
              className="w-full py-3 bg-[#00c278] hover:bg-[#00a066] text-white font-medium rounded-md transition-colors"
            >
              In den Warenkorb
            </button>
            
            {cartItems.length > 0 && (
              <div className="mt-6 border-t border-gray-800 pt-4">
                <h4 className="text-lg font-medium text-white mb-3">Warenkorb</h4>
                <div className="space-y-3 max-h-[300px] overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
                      <div className="flex items-center">
                        <div className="w-10 h-10 mr-3">
                          <Image
                            src={item.binding.image}
                            alt={item.binding.name}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">{item.binding.name}</p>
                          <p className="text-xs text-white">
                            {item.color.name}, {item.quantity}x
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <p className="text-sm font-medium text-white mr-2">
                          {item.price.toFixed(2)}€
                        </p>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-white hover:text-[#00c278]"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-white font-medium">Gesamtpreis:</span>
                  <span className="text-xl font-bold text-white">{totalPrice.toFixed(2)}€</span>
                </div>
                
                <button
                  type="button"
                  className="w-full mt-4 py-3 bg-[#00c278] hover:bg-[#00a066] text-white font-medium rounded-md transition-colors"
                >
                  Zur Kasse
                </button>
              </div>
            )}
            
            <div className="mt-6 flex items-center justify-center space-x-4">
              {/* Payment Icons */}
              <div className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.554 9.488c.121.563.106 1.246-.04 2.051-.582 2.978-2.477 4.466-5.683 4.466h-.442a.666.666 0 0 0-.444.166.72.72 0 0 0-.239.427l-.041.189-.553 3.479-.021.151a.706.706 0 0 1-.247.426.666.666 0 0 1-.447.166H8.874a.395.395 0 0 1-.331-.15.457.457 0 0 1-.09-.363c.061-.373.148-.938.267-1.689.119-.75.217-1.37.297-1.859.079-.49.158-.97.238-1.42h.255c2.244 0 3.988-.516 5.233-1.548.859-.718 1.486-1.646 1.874-2.771.12-.343.21-.673.267-.99.057-.315.086-.573.086-.771 0-.198-.002-.387-.011-.58a7.19 7.19 0 0 1-.046-.552 4.35 4.35 0 0 1 .011-.553c.007-.187.007-.327 0-.424a3.98 3.98 0 0 0-.063-.318zm-5.281-5.001c.247 0 .515.017.8.046.285.03.522.08.708.151.185.072.369.155.552.252.183.096.308.228.371.393.064.166.115.343.154.534.04.19.063.414.075.67.01.256.007.511-.011.764-.017.254-.051.537-.097.849-.183 1.138-.56 2.13-1.128 2.969-.568.84-1.194 1.523-1.879 2.047-.684.525-1.4.912-2.146 1.159-.746.247-1.389.371-1.925.371-.536 0-1.022-.068-1.46-.203-.439-.134-.797-.317-1.079-.546-.281-.229-.498-.5-.648-.815-.151-.313-.217-.64-.2-.977.016-.338.095-.722.235-1.151.14-.43.294-.84.462-1.226.168-.387.343-.75.525-1.093.183-.343.343-.621.48-.835.137-.213.217-.331.24-.35l.063-.072a.738.738 0 0 1 .616-.329h1.441c.183 0 .336.06.457.178.122.12.156.271.103.457l-.401 1.564c-.137.53-.205.942-.205 1.237 0 .295.055.516.166.661.11.146.336.218.674.218.339 0 .698-.093 1.079-.28.381-.187.736-.437 1.063-.747.329-.311.617-.671.867-1.081.249-.41.44-.838.571-1.285.131-.446.197-.87.197-1.274 0-.403-.07-.736-.206-.995-.137-.259-.381-.388-.731-.388-.151 0-.365.023-.64.069-.274.046-.51.069-.708.069-.198 0-.377-.039-.537-.116a.61.61 0 0 1-.297-.313c-.064-.137-.11-.283-.143-.436a2.95 2.95 0 0 1-.051-.493c0-.164.021-.331.063-.5.041-.168.096-.326.16-.474.064-.147.167-.28.308-.4.14-.119.297-.178.468-.178h.674zm-4.098-3.018c.137-.258.335-.454.594-.582.259-.129.53-.193.811-.193h5.274c.152 0 .28.021.383.063a.681.681 0 0 1 .24.166c.064.07.11.153.143.252.033.099.05.198.05.297 0 .1-.017.198-.05.297a.872.872 0 0 1-.143.252.681.681 0 0 1-.24.166 1.008 1.008 0 0 1-.383.063H7.627c-.152 0-.312-.05-.48-.149-.168-.099-.275-.223-.32-.371l-.063-.371c-.016-.1-.016-.19 0-.274.016-.082.042-.16.08-.232z"/>
                </svg>
              </div>
              
              <div className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.343 18.031c.058.049.12.098.181.146-1.177.783-2.59 1.238-4.107 1.238C3.32 19.416 0 16.096 0 12c0-4.095 3.32-7.416 7.416-7.416 1.518 0 2.931.456 4.105 1.238-.06.051-.12.098-.165.15C9.6 7.489 8.595 9.688 8.595 12c0 2.311 1.001 4.51 2.748 6.031zm5.241-13.447c-1.52 0-2.931.456-4.105 1.238.06.051.12.098.165.15C14.4 7.489 15.405 9.688 15.405 12c0 2.31-1.001 4.507-2.748 6.031-.058.049-.12.098-.181.146 1.177.783 2.588 1.238 4.107 1.238C20.68 19.416 24 16.096 24 12c0-4.094-3.32-7.416-7.416-7.416zM12 6.174c-.096.075-.189.15-.28.231C10.156 7.764 9.169 9.765 9.169 12c0 2.236.987 4.236 2.551 5.595.09.08.185.158.28.232.096-.074.189-.152.28-.232 1.563-1.359 2.551-3.359 2.551-5.595 0-2.235-.987-4.236-2.551-5.595-.09-.08-.184-.156-.28-.231z"/>
                </svg>
              </div>
              
              <div className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 5H1v14h22V5zm-1 13H2V6h20v12zM4 11.1l.7-1.7h.7l-.9 2.1c0 .1-.1.1-.2.1H4c-.1 0-.2-.1-.2-.2l-.5-2h.8l.3 1.7h.6zm2.6-1.7h.7v2.1c0 .1-.1.1-.1.1h-.6c-.1 0-.1 0-.1-.1v-2.1zm3.8 1.5c0 .4-.2.7-.6.7-.1 0-.3 0-.3-.1v.1c0 .1-.1.1-.1.1h-.6c-.1 0-.1 0-.1-.1v-2.1h.7v.8c.1-.1.2-.1.3-.1.4-.1.7.2.7.7zm2.2-.8c0 .1-.1.1-.1.1h-.3c-.1 0-.1 0-.1.1v.2h.5c.1 0 .1 0 .1.1v.5c0 .1 0 .1-.1.1h-.5v.2c0 .1 0 .1.1h.3c.1 0 .1 0 .1.1v.5c0 .1 0 .1-.1.1h-1c-.1 0-.1 0-.1-.1v-2.1h1c.1 0 .1 0 .1.1v.5zm1.9 1.6c0 .1-.1.2-.2.2h-.3c-.1 0-.2-.1-.2-.2l-.5-2h.8l.3 1.2.3-1.2h.8l-.5 2c0 .1-.1.2-.2.2h-.3z"/>
                </svg>
              </div>
              
              <div className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.72 17.208a6.133 6.133 0 0 1-.603 1.09c-.318.48-.58.813-.786 1.001-.313.288-.65.436-1.01.445-.26 0-.572-.073-.938-.223-.366-.15-.702-.224-.91-.224-.29 0-.602.074-.936.224-.334.15-.604.228-.811.235-.313.013-.625-.137-.936-.452-.219-.201-.493-.545-.82-1.03-.352-.524-.641-1.131-.867-1.825-.226-.694-.34-1.365-.34-2.013 0-.938.203-1.75.61-2.435.32-.544.744-.973 1.276-1.288.531-.315 1.107-.475 1.726-.484.338 0 .782.105 1.335.31.552.205.907.31 1.063.31.116 0 .51-.122 1.18-.365.633-.224 1.168-.316 1.605-.279 1.186.096 2.078.566 2.67 1.413-1.061.643-1.585 1.544-1.573 2.698.01.9.335 1.647.976 2.243.29.276.615.49.976.642-.078.226-.16.442-.247.648zM15.113 4.5c0 .705-.259 1.363-.778 1.974-.625.728-1.383 1.15-2.202 1.082a2.228 2.228 0 0 1-.016-.267c0-.677.293-1.403.818-1.997.262-.3.595-.55 1-.75.404-.197.786-.306 1.145-.327.01.095.015.19.015.285z"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 