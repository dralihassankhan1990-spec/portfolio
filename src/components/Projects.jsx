"use client";
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { projects, projectCategories } from '@/data/projectsData';
import ProjectCard from './ProjectCard';

const Projects = ({ preview = true }) => {
    const [activeCat, setActiveCat] = useState('ai');
    const shown = preview
        ? projects.filter(p => p.category === activeCat).slice(0, 3)
        : projects.filter(p => p.category === activeCat);

    return (
        <section id="projects" className="py-5" style={{ color: 'var(--text-primary)' }}>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-5"
                >
                    <h2 className="section-heading mb-3">
                        My <span className="text-gradient-cyan">Projects</span>
                    </h2>
                    <p className="mx-auto" style={{ color: 'var(--text-muted)', maxWidth: '640px' }}>
                        Real systems, built end-to-end — pick a category and dive in. Explore the project brief, available demos, and published source.
                    </p>
                </motion.div>

                {/* Category tabs */}
                <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
                    {projectCategories.map(cat => {
                        const count = projects.filter(p => p.category === cat.id).length;
                        const active = activeCat === cat.id;
                        return (
                            <motion.button
                                key={cat.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.96 }}
                                onClick={() => setActiveCat(cat.id)}
                                className="px-4 py-2 rounded-pill d-flex align-items-center gap-2"
                                style={{
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    color: active ? '#062026' : 'var(--text-primary)',
                                    background: active ? 'linear-gradient(120deg, #22d3ee, #38bdf8)' : 'rgba(34,211,238,0.08)',
                                    border: active ? 'none' : '1px solid rgba(34,211,238,0.35)',
                                    boxShadow: active ? '0 8px 28px rgba(34,211,238,0.4)' : 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                <span>{cat.icon}</span> {cat.label}
                                <span className="px-2 rounded-pill" style={{ fontSize: '0.72rem', background: active ? 'rgba(0,0,0,0.18)' : 'rgba(34,211,238,0.15)' }}>
                                    {count}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>

                <div key={activeCat}>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                    >
                        <p className="text-center mb-4" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                            {projectCategories.find(c => c.id === activeCat)?.blurb}
                        </p>
                        <Row className="g-4">
                            {shown.map((p, i) => (
                                <Col key={p.id} lg={4} md={6}>
                                    <ProjectCard project={p} index={i} />
                                </Col>
                            ))}
                        </Row>
                    </motion.div>
                </div>

                {preview && (
                    <div className="text-center mt-5">
                        <a href="/projects" className="btn btn-lg btn-glow-cyan px-5 d-inline-flex align-items-center gap-2">
                            View All {projects.length} Projects <FiArrowRight />
                        </a>
                    </div>
                )}
            </Container>
        </section>
    );
};

export default Projects;
