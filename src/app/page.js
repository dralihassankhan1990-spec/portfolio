import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import Projects from '@/components/Projects';
import ComponentsPreview from '@/components/ComponentsPreview';
import ServicesCTA from '@/components/ServicesCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <main className="relative z-10">
        <Navbar />
        <Hero />

        <div className="w-full flex flex-col items-center">
          <WorkExperience />
          <Skills />
          <Projects preview={true} />
          <ComponentsPreview />
          <ServicesCTA />
          <Contact />
        </div>

        <Footer />
      </main>
    </div>
  );
}
