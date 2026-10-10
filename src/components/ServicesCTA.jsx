"use client";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiZap, FiMessageCircle } from 'react-icons/fi';

const services = [
    {
        icon: <FiCode size={28} />,
        title: 'Custom Components',
        desc: 'Need a specific UI piece for your site? I build it to your spec — animated, responsive, production-ready.',
        price: 'From $25',
    },
    {
        icon: <FiLayout size={28} />,
        title: 'Landing Sections',
        desc: 'Hero sections, pricing blocks, testimonials — conversion-focused sections that drop into any React site.',
        price: 'From $49',
    },
    {
        icon: <FiZap size={28} />,
        title: 'Full Project Builds',
        desc: 'Complete mini-systems: dashboards, booking flows, admin panels. Scoped, built, and documented.',
        price: "Let's talk",
    },
];

const ServicesCTA = () => (
    <section className="w-full py-5" style={{ color: 'var(--text-primary)' }}>
        <Container>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7 }}
                className="text-center mb-5"
            >
                <h2 className="section-heading mb-3">
                    Let&apos;s Build <span className="text-gradient-cyan">Something</span>
                </h2>
                <p className="mx-auto" style={{ color: 'var(--text-muted)', maxWidth: '620px' }}>
                    Beyond the free library — commission custom work. Every order includes source code, setup help, and one revision round.
                </p>
            </motion.div>

            <Row className="g-4 mb-5">
                {services.map((s, i) => (
                    <Col key={i} md={4}>
                        <motion.div
                            initial={{ opacity: 0, y: 40, rotateX: 6 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            className="card-3d p-4 h-100 text-center perspective-1200"
                        >
                            <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle glow-cyan"
                                style={{ width: '64px', height: '64px', background: 'rgba(34,211,238,0.12)', color: 'var(--purple-primary)' }}>
                                {s.icon}
                            </div>
                            <h5 className="fw-bold mb-2" style={{ color: 'var(--text-primary)' }}>{s.title}</h5>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{s.desc}</p>
                            <div className="mt-2 mb-3"><span className="text-gradient-gold fw-bold">{s.price}</span></div>
                            <a href="/#contact" className="btn btn-sm btn-glow-cyan d-inline-flex align-items-center gap-2">
                                <FiMessageCircle size={14} /> Order This
                            </a>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default ServicesCTA;
