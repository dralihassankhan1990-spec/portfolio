import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ExploreLinks from '@/components/ExploreLinks';
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#11071F]">
      <main className="relative z-10">
        <Navbar />
        <Hero />

        {/* Centered Content Wrapper */}
        <div className="w-full flex flex-col items-center">
          <WorkExperience />
          <Skills />
          <Projects />
          {/* Projects & Contact CTA Section */}
          <section id="projects-preview" className="w-full py-16" style={{ color: 'var(--text-primary)' }}>
            <div className="container mx-auto px-4">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore My Work</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                  Real projects, built end-to-end — from AI-powered apps to QA automation.
                </p>
                <ExploreLinks />
              </div>
            </div>
          </section>
          <Contact />
        </div>

        <Footer />
      </main>
    </div>
  );
}
