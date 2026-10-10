"use client";
import React, { useState, Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiLock, FiCoffee, FiMail, FiSearch, FiX } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "../globals.css";

// Component registry — maps data file names to lazy components
const registry = {
    GlassmorphismCard: React.lazy(() => import('@/components/showcase/GlassmorphismCard')),
    Card3D: React.lazy(() => import('@/components/showcase/Card3D')),
    AnimatedButton: React.lazy(() => import('@/components/showcase/AnimatedButton')),
    ParticleHero: React.lazy(() => import('@/components/showcase/ParticleHero')),
    PricingCard: React.lazy(() => import('@/components/showcase/PricingCard')),
    ContactForm: React.lazy(() => import('@/components/showcase/ContactForm')),
    FeatureCard: React.lazy(() => import('@/components/showcase/FeatureCard')),
    Timeline: React.lazy(() => import('@/components/showcase/Timeline')),
    SkeletonLoader: React.lazy(() => import('@/components/showcase/SkeletonLoader')),
    Toast: React.lazy(() => import('@/components/showcase/Toast')),
    ModalDemo: React.lazy(() => import('@/components/showcase/ModalDemo')),
    TabsDemo: React.lazy(() => import('@/components/showcase/TabsDemo')),
    AccordionDemo: React.lazy(() => import('@/components/showcase/AccordionDemo')),
    ProgressBar: React.lazy(() => import('@/components/showcase/ProgressBar')),
    ToggleSwitch: React.lazy(() => import('@/components/showcase/ToggleSwitch')),
    Badge: React.lazy(() => import('@/components/showcase/Badge')),
    CarouselDemo: React.lazy(() => import('@/components/showcase/CarouselDemo')),
    Pricing3DFlip: React.lazy(() => import('@/components/showcase/Pricing3DFlip')),
    ScrollReveal: React.lazy(() => import('@/components/showcase/ScrollReveal')),
    CodeBlock: React.lazy(() => import('@/components/showcase/CodeBlock')),
    MagneticButton: React.lazy(() => import('@/components/showcase/MagneticButton')),
    NeonGlowCard: React.lazy(() => import('@/components/showcase/NeonGlowCard')),
    CountdownTimer: React.lazy(() => import('@/components/showcase/CountdownTimer')),
    TestimonialCard: React.lazy(() => import('@/components/showcase/TestimonialCard')),
};

import { componentsData } from '@/components/showcase/componentsData';

const ComponentCard = ({ item, index, onGetCode }) => {
    const Preview = registry[item.file];
    const isPro = item.tier === 'pro';
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            className="h-100"
        >
            <div className="card-3d h-100 d-flex flex-column overflow-hidden">
                <div className="d-flex justify-content-between align-items-center px-3 pt-3">
                    <span className={isPro ? 'badge-pro' : 'badge-free'}>{isPro ? '★ PRO' : 'FREE'}</span>
                    <div className="d-flex gap-1 flex-wrap justify-content-end">
                        {item.tags.slice(0, 2).map((t, i) => (
                            <span key={i} style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>#{t}</span>
                        ))}
                    </div>
                </div>
                <div className="p-3 d-flex align-items-center justify-content-center" style={{ minHeight: '220px', background: 'rgba(0,0,0,0.25)' }}>
                    <Suspense fallback={<div style={{ color: 'var(--text-muted)' }}>Loading…</div>}>
                        {Preview ? <Preview /> : <div style={{ color: 'var(--text-muted)' }}>Preview soon</div>}
                    </Suspense>
                </div>
                <div className="p-3 d-flex flex-column flex-grow-1">
                    <h6 className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>{item.name}</h6>
                    <p className="mb-3" style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{item.description}</p>
                    <div className="mt-auto">
                        {isPro ? (
                            <button onClick={() => onGetCode(item)} className="btn btn-sm btn-glow-gold w-100 d-flex align-items-center justify-content-center gap-2">
                                <FiLock size={13} /> Get This Code
                            </button>
                        ) : (
                            <button onClick={() => onGetCode(item)} className="btn btn-sm btn-glow-cyan w-100 d-flex align-items-center justify-content-center gap-2">
                                <FiCode size={13} /> View Code — Free
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function ComponentsPage() {
    const [filter, setFilter] = useState('all');
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState(null);

    const filtered = componentsData.filter(c => {
        const okTier = filter === 'all' || c.tier === filter;
        const okQ = !query || (c.name + ' ' + c.description + ' ' + c.tags.join(' ')).toLowerCase().includes(query.toLowerCase());
        return okTier && okQ;
    });

    const handleGetCode = (item) => {
        if (item.tier === 'pro') {
            // Redirect to contact with the component pre-selected
            window.location.href = `/#contact?item=${encodeURIComponent(item.name)}`;
        } else {
            setSelected(item);
        }
    };

    return (
        <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
            <Navbar />
            <main style={{ paddingTop: '110px' }}>
                <Container>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-5">
                        <h1 className="section-heading mb-3">UI <span className="text-gradient-gold">Component Store</span></h1>
                        <p className="mx-auto" style={{ color: 'var(--text-muted)', maxWidth: '660px' }}>
                            Production-ready React components I designed and built. <strong style={{ color: '#4ade80' }}>Free</strong> ones — take the code.
                            <strong className="text-gradient-gold"> Pro</strong> ones — message me and they&apos;re yours, with setup help included.
                        </p>
                        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                            {[['all', 'All'], ['free', 'Free'], ['pro', '★ Pro']].map(([v, label]) => (
                                <button key={v} onClick={() => setFilter(v)}
                                    className="px-4 py-2 rounded-pill"
                                    style={{
                                        fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
                                        color: filter === v ? '#062026' : 'var(--text-primary)',
                                        background: filter === v ? 'linear-gradient(120deg,#22d3ee,#38bdf8)' : 'rgba(34,211,238,0.08)',
                                        border: filter === v ? 'none' : '1px solid rgba(34,211,238,0.35)',
                                    }}>
                                    {label}
                                </button>
                            ))}
                            <div className="position-relative">
                                <FiSearch className="position-absolute" style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search components…"
                                    className="rounded-pill ps-5 pe-3 py-2"
                                    style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.35)', color: 'var(--text-primary)', outline: 'none', fontSize: '0.9rem' }} />
                            </div>
                        </div>
                    </motion.div>

                    <Row className="g-4 pb-5">
                        <AnimatePresence>
                            {filtered.map((item, i) => (
                                <Col key={item.id} lg={4} md={6}>
                                    <ComponentCard item={item} index={i} onGetCode={handleGetCode} />
                                </Col>
                            ))}
                        </AnimatePresence>
                    </Row>
                    {filtered.length === 0 && (
                        <p className="text-center pb-5" style={{ color: 'var(--text-muted)' }}>No components match your search.</p>
                    )}

                    {/* Earning CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="card-3d p-5 text-center mb-5 glow-gold"
                        style={{ border: '1px solid rgba(251,191,36,0.4)' }}
                    >
                        <h3 className="mb-3">Need the <span className="text-gradient-gold">full source</span> or something custom?</h3>
                        <p className="mx-auto mb-4" style={{ color: 'var(--text-muted)', maxWidth: '600px' }}>
                            Pro components come with the complete source, setup guidance, and customization help.
                            I also build custom components, landing sections, and dashboards on order — tell me what you need.
                        </p>
                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            <a href="/#contact" className="btn btn-glow-gold btn-lg px-4 d-inline-flex align-items-center gap-2">
                                <FiMail /> Contact Me
                            </a>
                            <a href="/#contact" className="btn btn-lg px-4 d-inline-flex align-items-center gap-2" style={{ border: '1px solid rgba(251,191,36,0.5)', color: 'var(--text-primary)' }}>
                                <FiCoffee /> Buy Me a Coffee
                            </a>
                        </div>
                    </motion.div>
                </Container>
            </main>

            {/* Free-code modal */}
            {selected && (
                <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3" style={{ zIndex: 2000, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }} onClick={() => setSelected(null)}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
                        className="card-3d p-4 position-relative" style={{ maxWidth: '520px', width: '100%' }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button onClick={() => setSelected(null)} className="btn btn-sm position-absolute" style={{ top: '12px', right: '12px', color: 'var(--text-muted)' }}>
                            <FiX size={18} />
                        </button>
                        <span className="badge-free mb-3 d-inline-block">FREE</span>
                        <h5 className="fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>{selected.name}</h5>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{selected.description}</p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            This component is free to use in your projects. Message me and I&apos;ll send you the complete source with setup instructions — no charge.
                        </p>
                        <a href={`/#contact?item=${encodeURIComponent(selected.name)}`} className="btn btn-glow-cyan w-100 mt-2">
                            Send Me the Code
                        </a>
                    </motion.div>
                </div>
            )}

            <Footer />
        </div>
    );
}
