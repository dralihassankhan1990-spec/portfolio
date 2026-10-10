"use client";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiArrowRight, FiBox } from 'react-icons/fi';

const previewItems = [
    { name: '3D Tilt Card', desc: 'Mouse-tracking 3D card', tier: 'pro', emoji: '🃏' },
    { name: 'Particle Hero', desc: 'Animated particle header', tier: 'pro', emoji: '✨' },
    { name: 'Pricing Flip', desc: '3D flip pricing card', tier: 'pro', emoji: '🔄' },
    { name: 'Glassmorphism', desc: 'Frosted glass card', tier: 'free', emoji: '🪟' },
    { name: 'Neon Glow', desc: 'Neon-bordered card', tier: 'free', emoji: '💡' },
    { name: 'Countdown', desc: 'Live countdown timer', tier: 'free', emoji: '⏱️' },
];

const ComponentsPreview = () => (
    <section className="w-full py-5" style={{ color: 'var(--text-primary)' }}>
        <Container>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7 }}
                className="text-center mb-5"
            >
                <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill" style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.4)', fontSize: '0.8rem', color: 'var(--gold)' }}>
                    <FiBox /> COMPONENT STORE
                </div>
                <h2 className="section-heading mb-3">
                    UI Components, <span className="text-gradient-gold">Ready to Ship</span>
                </h2>
                <p className="mx-auto" style={{ color: 'var(--text-muted)', maxWidth: '620px' }}>
                    A growing library of hand-built React components. Free ones are yours for the asking — Pro ones come with full source and setup help.
                </p>
            </motion.div>

            <Row className="g-3 mb-4">
                {previewItems.map((c, i) => (
                    <Col key={i} lg={4} md={6}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                            className="card-3d p-4 d-flex align-items-center gap-3 h-100"
                        >
                            <div style={{ fontSize: '2rem' }}>{c.emoji}</div>
                            <div className="flex-grow-1">
                                <div className="d-flex align-items-center gap-2 mb-1">
                                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{c.name}</strong>
                                    <span className={c.tier === 'pro' ? 'badge-pro' : 'badge-free'}>{c.tier === 'pro' ? '★ PRO' : 'FREE'}</span>
                                </div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{c.desc}</div>
                            </div>
                        </motion.div>
                    </Col>
                ))}
            </Row>

            <div className="text-center">
                <a href="/components" className="btn btn-lg btn-glow-gold px-5 d-inline-flex align-items-center gap-2">
                    Browse All Components <FiArrowRight />
                </a>
            </div>
        </Container>
    </section>
);

export default ComponentsPreview;
