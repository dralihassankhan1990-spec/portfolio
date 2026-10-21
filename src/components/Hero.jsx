"use client";
import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown, FiCpu, FiLayers, FiCheckCircle } from 'react-icons/fi';
import "../app/globals.css";

// Three.js scene is client-only — never rendered on the server.
const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });

const floatBadges = [
    { icon: <FiCpu />, label: 'AI Apps', x: '-12%', y: '8%', delay: 0 },
    { icon: <FiLayers />, label: 'Full-Stack', x: '88%', y: '22%', delay: 0.8 },
    { icon: <FiCheckCircle />, label: 'QA Automation', x: '-8%', y: '72%', delay: 1.6 },
];

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

    // Plain ref mirror of scroll progress — read inside the Three.js frame loop
    // without triggering React re-renders.
    const progressRef = useRef(0);
    useEffect(() => scrollYProgress.on('change', (v) => { progressRef.current = v; }), [scrollYProgress]);

    // Scroll-driven 3D transforms on the content layer.
    const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const imgRotate = useTransform(scrollYProgress, [0, 1], [0, -12]);
    const imgScale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 220]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
    const sceneOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.25]);

    return (
        <section id="home" ref={ref} className="hero-section position-relative overflow-hidden" style={{ minHeight: '100vh', paddingTop: '110px' }}>
            {/* 3D scroll-driven background */}
            <motion.div style={{ opacity: sceneOpacity }} className="position-absolute w-100 h-100 top-0 start-0" aria-hidden>
                <HeroScene progressRef={progressRef} />
            </motion.div>
            {/* Readability gradient over the 3D layer */}
            <div
                className="position-absolute w-100 h-100 top-0 start-0"
                style={{ background: 'linear-gradient(to bottom, rgba(6,10,20,0.25) 0%, rgba(6,10,20,0.55) 70%, var(--bg-primary) 100%)', pointerEvents: 'none' }}
                aria-hidden
            />

            <Container className="position-relative" style={{ zIndex: 2 }}>
                <Row className="align-items-center">
                    <Col lg={5} className="perspective-1200 mb-5 mb-lg-0">
                        <motion.div style={{ y: imgY, rotateY: imgRotate, scale: imgScale }} className="preserve-3d position-relative mx-auto" >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85, rotateY: -18 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                                className="position-relative"
                                style={{ width: 'min(340px, 80vw)', height: 'min(340px, 80vw)', margin: '0 auto' }}
                            >
                                <div className="position-absolute w-100 h-100 rounded-circle glow-cyan" style={{ filter: 'blur(28px)', opacity: 0.5 }} />
                                <motion.img
                                    src="/Me.jpg"
                                    alt="Muhammad Bilal"
                                    className="img-fluid rounded-circle position-relative"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', border: '3px solid rgba(34, 211, 238, 0.5)', zIndex: 2 }}
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                />
                                {/* Orbiting ring */}
                                <motion.div
                                    className="position-absolute rounded-circle"
                                    style={{ inset: '-18px', border: '1px dashed rgba(34,211,238,0.4)', zIndex: 1 }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                                />
                            </motion.div>

                            {/* Floating 3D badges */}
                            {floatBadges.map((b, i) => (
                                <motion.div
                                    key={i}
                                    className="position-absolute card-3d d-flex align-items-center gap-2 px-3 py-2"
                                    style={{ left: b.x, top: b.y, zIndex: 3, fontSize: '0.85rem', color: 'var(--text-primary)' }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: [0, -10, 0] }}
                                    transition={{ opacity: { delay: 0.6 + b.delay, duration: 0.6 }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: b.delay } }}
                                >
                                    <span style={{ color: 'var(--purple-primary)' }}>{b.icon}</span>
                                    <strong>{b.label}</strong>
                                </motion.div>
                            ))}
                        </motion.div>
                    </Col>

                    <Col lg={7}>
                        <motion.div style={{ y: textY, opacity: textOpacity }}>
                            <motion.p
                                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
                                className="mb-2" style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}
                            >
                                Hello! I am <span className="text-gradient-cyan fw-bold">Muhammad Bilal</span>
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                                className="mt-1 mb-3" style={{ color: 'var(--text-secondary)' }}
                            >
                                Program Officer / Project Coordinator at PITB
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                                style={{ color: 'var(--text-primary)', lineHeight: 1.15 }}
                            >
                                Delivering GovTech<br />
                                <span className="text-gradient-cyan">digital transformation</span>...
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
                                className="mt-4" style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '560px' }}
                            >
                                Turning requirements into working systems — from LIMS and QMS to AI-powered apps and test automation.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
                                className="mt-4 d-flex flex-wrap gap-3"
                            >
                                <a href="/projects" className="btn btn-glow-cyan btn-lg px-4">Explore Projects</a>
                                <a href="/components" className="btn btn-lg px-4" style={{ border: '1px solid rgba(34,211,238,0.5)', color: 'var(--text-primary)' }}>UI Components</a>
                            </motion.div>
                        </motion.div>
                    </Col>
                </Row>

                <Row className="justify-content-center mt-5">
                    <Col lg={8} className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{ color: 'var(--text-primary)' }}>I&apos;m an IT Project Coordinator.</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                                with hands-on experience in <span className="fw-semibold text-gradient-cyan">GovTech delivery, web application development, and QA automation</span>.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="mt-4"
                        >
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                I coordinate delivery work for the PAFDA Laboratory Information Management System program — multi-module delivery spanning LIMS, QMS, HR, and storage management — from BRDs and UAT through go-live and beyond.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                Alongside delivery, I build: React and Node.js web applications, AI-powered tools using face recognition and gesture control, and Excel-driven Playwright test automation with narrated video reporting.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                My background in project coordination means every build starts from real requirements and ends with something users can actually adopt.
                            </p>
                        </motion.div>
                    </Col>
                </Row>

                <motion.div
                    className="text-center mt-5 pb-4"
                    style={{ color: 'var(--text-muted)' }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <FiArrowDown size={26} />
                    <div style={{ fontSize: '0.8rem', letterSpacing: '0.2em' }}>SCROLL</div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Hero;
