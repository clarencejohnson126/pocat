'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomerBenefits from '@/components/CustomerBenefits';

export default function VorteilePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <CustomerBenefits />
      <Footer />
    </main>
  );
} 