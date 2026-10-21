// In src/components/WorkExperience.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import { Briefcase, ClipboardCheck, Code2, Bot } from 'lucide-react';

const workExperiences = [
    { id: 1, icon: 'Briefcase', title: 'GovTech Program Delivery', description: 'Program Officer / Project Coordinator at PITB. Coordinating the PAFDA LIMS digital-transformation program — multi-module scope, BRDs, dashboards, and stakeholder coordination across client, senior management, and PMO.' },
    { id: 2, icon: 'ClipboardCheck', title: 'Business Analysis & UAT', description: 'Multi-module QMS BRDs with UI screens, test-case design, UAT planning and execution, go-live support, and training material — turning requirements into systems users actually accept.' },
    { id: 3, icon: 'Code2', title: 'Web & AI App Development', description: 'React and Node.js applications with AI integrations: face-recognition attendance, gesture-controlled interfaces, nutrition platforms, and lab systems — built end-to-end and deployed on Vercel.' },
    { id: 4, icon: 'Bot', title: 'QA Automation', description: 'Excel-driven Playwright automation with video evidence and narrated reporting — 5/5 scenarios passing. Repeatable, documented, and built for real QA workflows.' }
];

const WorkExperience = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="WorkExperience"
            style={{
                backgroundColor: 'var(--bg-primary)',
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                padding: isMobile ? '40px 0' : '80px 0'
            }}>
            {/* Centered Background Gradient Image */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: isMobile ? '100%' : '80%',
                height: isMobile ? '60%' : '80%',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: isMobile ? 0.3 : 0.5
            }}>
                <Image
                    src="/Gradient.jpg"
                    alt="Background Gradient"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                />
            </div>

            {/* Main Container */}
            <Container style={{
                maxWidth: '1200px',
                width: '100%',
                margin: '0 auto',
                padding: isMobile ? '0 16px' : '0 24px',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Section Title */}
                <div style={{
                    textAlign: isMobile ? 'center' : 'left',
                    marginBottom: isMobile ? '40px' : '60px'
                }}>
                    <h2 style={{
                        fontSize: isMobile ? '2rem' : 'var(--font-size-heading)',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        margin: 0,
                        lineHeight: '1.2'
                    }}>
                        Work Experience
                    </h2>
                </div>

                {/* Responsive Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                    gap: isMobile ? '24px' : '32px',
                    width: '100%',
                    maxWidth: '1100px',
                    margin: '0 auto',
                }}>
                    {workExperiences.map((exp) => (
                        <div key={exp.id} style={{
                            background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.6) 0%, rgba(59, 7, 100, 0.8) 100%)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(139, 92, 246, 0.25)',
                            borderRadius: '24px',
                            padding: isMobile ? '20px' : '28px',
                            height: isMobile ? 'auto' : '200px',
                            minHeight: isMobile ? '180px' : 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                if (!isMobile) {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(139, 92, 246, 0.2)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isMobile) {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                                }
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                gap: isMobile ? '16px' : '20px',
                                flex: 1,
                                flexDirection: isMobile ? 'row' : 'row'
                            }}>
                                <div style={{
                                    width: isMobile ? '70px' : '100px',
                                    height: isMobile ? '70px' : '100px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, rgba(168, 85, 247, 0.6) 100%)',
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 16px rgba(139, 92, 246, 0.3)',
                                    flexShrink: 0
                                }}>
                                    {exp.icon === 'Briefcase' && <Briefcase size={isMobile ? 40 : 60} color="#ffffff" strokeWidth={1.5} />}
                                    {exp.icon === 'ClipboardCheck' && <ClipboardCheck size={isMobile ? 40 : 60} color="#ffffff" strokeWidth={1.5} />}
                                    {exp.icon === 'Code2' && <Code2 size={isMobile ? 40 : 60} color="#ffffff" strokeWidth={1.5} />}
                                    {exp.icon === 'Bot' && <Bot size={isMobile ? 40 : 60} color="#ffffff" strokeWidth={1.5} />}
                                </div>
                                <div style={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div>
                                        <h3 style={{
                                            fontSize: isMobile ? '1.25rem' : 'var(--font-size-subheading)',
                                            color: 'white',
                                            fontWeight: '700',
                                            margin: '0 0 12px 0'
                                        }}>
                                            {exp.title}
                                        </h3>
                                        <p style={{
                                            fontSize: isMobile ? '0.9rem' : 'var(--font-size-body)',
                                            color: 'var(--text-secondary)',
                                            lineHeight: '1.6',
                                            margin: 0
                                        }}>
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <button style={{
                                background: 'rgba(139, 92, 246, 0.3)',
                                border: '1px solid rgba(139, 92, 246, 0.5)',
                                borderRadius: '10px',
                                padding: isMobile ? '8px 20px' : '10px 24px',
                                color: 'white',
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                marginTop: isMobile ? '16px' : 'auto',
                                alignSelf: 'center',
                                width: isMobile ? '100%' : 'auto'
                            }}
                                onMouseOver={(e) => {
                                    if (!isMobile) {
                                        e.target.style.background = 'rgba(139, 92, 246, 0.5)';
                                        e.target.style.transform = 'scale(1.05)';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (!isMobile) {
                                        e.target.style.background = 'rgba(139, 92, 246, 0.3)';
                                        e.target.style.transform = 'scale(1)';
                                    }
                                }}
                            >
                                LEARN MORE
                            </button> */}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WorkExperience;
