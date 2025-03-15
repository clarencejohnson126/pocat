'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BindingDetails from '@/components/BindingDetails';

export default function BindungenPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <BindingDetails />
      <Footer />
    </main>
  );
} 