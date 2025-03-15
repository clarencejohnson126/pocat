'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialsComponent from '@/components/Testimonials';

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <TestimonialsComponent />
      <Footer />
    </main>
  );
} 