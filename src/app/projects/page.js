import DeliveryJourney from '@/components/DeliveryJourney';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import "../globals.css";

export const metadata = {
    title: 'Projects | Muhammad Bilal',
    description: 'Real projects by Muhammad Bilal — AI apps, web platforms, and QA automation. Browse by category.',
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
            <Navbar />
            <main className="position-relative" style={{ zIndex: 1, paddingTop: '100px' }}>
                <DeliveryJourney /><Projects preview={false} />
            </main>
            <Footer />
        </div>
    );
}
