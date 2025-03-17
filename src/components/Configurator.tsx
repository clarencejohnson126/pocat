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
  const [currentPrice, setCurrentPrice] = useState(selectedBinding.basePrice);
  
  // Shopping cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Calculate current configuration price
  useEffect(() => {
    const total = selectedBinding.basePrice * quantity;
    setCurrentPrice(parseFloat(total.toFixed(2)));
  }, [selectedBinding, quantity, selectedBinding.basePrice]);
  
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
            {/* Main Product Image */}
            <div className="mb-8 bg-gray-900 rounded-lg p-6 shadow-md border border-gray-800">
              <div className="relative aspect-video w-full overflow-hidden rounded-md">
                <Image
                  src="/B9-1536x1536.png"
                  alt="POCAT Bindungen"
                  width={800}
                  height={450}
                  className="object-contain w-full h-full"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/vercel.svg'; // Fallback image
                  }}
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-white text-sm">Unsere hochwertigen Bindungen für Ihre Dokumente</p>
              </div>
            </div>
            
            <p className="text-sm text-white mb-8">
              POCAT steht für Premium-Qualität. Daher vertreiben wir <span className="font-bold">keine minderwertigen Klemmbindungen</span>. Bei Fragen stehen wir dir gerne persönlich zur Verfügung.
            </p>
            
            {/* Binding Type Selection */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {bindingTypes.map((type) => (
                <div
                  key={type.id}
                  className={`relative border rounded-md p-4 cursor-pointer transition-all ${
                    selectedBinding.id === type.id
                      ? 'border-[#00c278] bg-black'
                      : 'border-white/20 bg-black hover:border-[#00c278]/50'
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
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = '/vercel.svg'; // Fallback image
                        }}
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
                        ? 'border-[#00c278] bg-black'
                        : 'border-white/20 hover:border-[#00c278]/50'
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
            className="bg-black p-6 rounded-lg shadow-md border border-[#00c278]/20 h-fit sticky top-4"
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
                <p className="text-2xl font-bold text-white">
                  {(cartItems.length > 0 ? totalPrice : currentPrice).toFixed(2)}€
                </p>
                <p className="text-sm text-white">inkl. 7% MwSt.</p>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="w-32 h-48 bg-black rounded-md flex items-center justify-center border border-[#00c278]/20">
                  <Image
                    src={selectedBinding.image}
                    alt={selectedBinding.name}
                    width={100}
                    height={140}
                    className="object-contain w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/vercel.svg'; // Fallback image
                    }}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center border border-[#00c278]/20 rounded-md">
                    <button 
                      className="px-3 py-1 text-white hover:bg-[#00c278]/10"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 bg-transparent border-x border-[#00c278]/20 text-center text-white py-1"
                    />
                    <button 
                      className="px-3 py-1 text-white hover:bg-[#00c278]/10"
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
                    <div key={item.id} className="flex justify-between items-center bg-black p-3 rounded-md border border-[#00c278]/20">
                      <div className="flex items-center">
                        <div className="w-10 h-10 mr-3">
                          <Image
                            src={item.binding.image}
                            alt={item.binding.name}
                            width={40}
                            height={40}
                            className="object-contain w-full h-full"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src = '/vercel.svg'; // Fallback image
                            }}
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
            
            {/* Debug information - remove in production */}
            <div className="mt-4 p-3 bg-black rounded-md text-xs text-white border border-[#00c278]/20">
              <p>Debug Info:</p>
              <p>Selected Binding: {selectedBinding.name} (Base Price: {selectedBinding.basePrice}€)</p>
              <p>Selected Color: {selectedColor.name}</p>
              <p>Quantity: {quantity}</p>
              <p>Current Price: {currentPrice.toFixed(2)}€</p>
              <p>Cart Items: {cartItems.length}</p>
              <p>Total Price: {totalPrice.toFixed(2)}€</p>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-white mb-2 text-center">Akzeptierte Zahlungsmethoden</p>
              <div className="flex flex-wrap justify-center gap-2">
                <div className="text-white bg-black px-3 py-1.5 rounded text-xs font-medium border border-[#00c278]/20">
                  PayPal
                </div>
                <div className="text-white bg-black px-3 py-1.5 rounded text-xs font-medium border border-[#00c278]/20">
                  Visa
                </div>
                <div className="text-white bg-black px-3 py-1.5 rounded text-xs font-medium border border-[#00c278]/20">
                  MasterCard
                </div>
                <div className="text-white bg-black px-3 py-1.5 rounded text-xs font-medium border border-[#00c278]/20">
                  Apple Pay
                </div>
                <div className="text-white bg-black px-3 py-1.5 rounded text-xs font-medium border border-[#00c278]/20">
                  Klarna
                </div>
                <div className="text-white bg-black px-3 py-1.5 rounded text-xs font-medium border border-[#00c278]/20">
                  Giropay
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 