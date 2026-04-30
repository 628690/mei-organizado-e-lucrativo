import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import ProductPresentation from './components/ProductPresentation';
import WhatYouLearn from './components/WhatYouLearn';
import Offer from './components/Offer';
import Author from './components/Author';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-indigo-100 italic-serif-headers">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <ProductPresentation />
        <WhatYouLearn />
        <Offer />
        <Author />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
