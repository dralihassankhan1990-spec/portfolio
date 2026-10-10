"use client";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const skillGroups = [
    {
        title: 'Delivery & Management',
        skills: ['Project Management', 'Business Analysis', 'UAT & QA', 'Stakeholder Management', 'Change Management', 'Agile / Scrum', 'SDLC', 'Go-Live & Training']
    },
    {
        title: 'Development & Automation',
        skills: ['React', 'Node.js', 'TypeScript', 'JavaScript', 'Python', 'Playwright Automation', 'REST APIs', 'SQL (PostgreSQL)', 'MongoDB']
    },
    {
        title: 'AI & Domain',
        skills: ['AI Integrations (Gemini)', 'face-api.js', 'MediaPipe', 'LIMS', 'QMS', 'HIMS / HMIS', 'ERP', 'Food Safety (HACCP)']
    }
];

const certifications = [
    'Google Project Management Professional',
    'Scrum Master Professional',
    'Food Safety Level 3 & Level 4 (CIEH)'
];

const Skills = () => {
    return (
        <div className='align-text-center color-white'>
            <section id="skills" className="justify-content-center text-center" style={{ padding: '80px 0' }}>
                <Container className='py-3 py-md-4 py-lg-5' style={{ maxWidth: '1100px' }}>
                    <h2 style={{ color: 'var(--text-primary)', fontWeight: '700', marginBottom: '12px' }}>
                        Skills & Certifications
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '48px' }}>
                        What I bring to delivery — from requirements to working software.
                    </p>
                    <Row className="g-4">
                        {skillGroups.map((group) => (
                            <Col key={group.title} md={4}>
                                <div style={{
                                    background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.6) 0%, rgba(59, 7, 100, 0.8) 100%)',
                                    border: '1px solid rgba(139, 92, 246, 0.25)',
                                    borderRadius: '20px',
                                    padding: '28px 24px',
                                    height: '100%',
                                    textAlign: 'left'
                                }}>
                                    <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: '700', marginBottom: '18px' }}>
                                        {group.title}
                                    </h3>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {group.skills.map((skill) => (
                                            <span key={skill} style={{
                                                background: 'rgba(139, 92, 246, 0.18)',
                                                border: '1px solid rgba(139, 92, 246, 0.35)',
                                                color: 'var(--text-primary)',
                                                fontSize: '0.82rem',
                                                padding: '6px 12px',
                                                borderRadius: '999px'
                                            }}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div style={{ marginTop: '40px' }}>
                        <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: '700', marginBottom: '14px', textAlign: 'center' }}>
                            Certifications
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                            {certifications.map((cert) => (
                                <span key={cert} style={{
                                    background: 'rgba(59, 130, 246, 0.12)',
                                    border: '1px solid rgba(59, 130, 246, 0.4)',
                                    color: 'var(--text-primary)',
                                    fontSize: '0.88rem',
                                    padding: '8px 16px',
                                    borderRadius: '999px'
                                }}>
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Skills;
