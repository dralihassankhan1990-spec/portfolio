"use client";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../app/globals.css";
import Image from 'next/image';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5} className="pe-5">
                        <div className="purple-radial-bg" style={{ position: 'relative', width: 'fit-content' }}>
                            <div className="profile-glow"></div>
                            <div style={{
                                width: '350px',
                                height: '350px',
                                position: 'relative',
                                zIndex: 2
                            }}>
                                <img
                                    src="/Me.jpg"
                                    alt="Muhammad Bilal"
                                    className="img-fluid rounded-circle"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        border: '3px solid rgba(139, 92, 246, 0.3)'
                                    }}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={7} className="ps-5">
                        <div className="profile-container">
                            <p className="greeting margin-bottom-4" style={{ color: 'var(--text-primary)' }}>
                                Hello! I am <span className="text-purple">Muhammad Bilal</span>
                            </p>
                            <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>
                                Program Officer / Project Coordinator at PITB
                            </p>
                            <h1 style={{ color: 'var(--text-primary)' }}>
                                Delivering GovTech<br />
                                <span className="highlight text-purple">digital transformation</span>...
                            </h1>
                            <p className="mt-4" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                8+ years turning requirements into working systems — from LIMS and QMS to AI-powered apps and test automation.
                            </p>
                        </div>
                    </Col>

                </Row>

                <Row className="justify-content-center mt-5">
                    <Col lg={8} className="text-center">
                        <div className="mt-5">
                            <h2 style={{ color: 'var(--text-primary)' }}>
                                I&apos;m an IT Project Coordinator.
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                                with hands-on experience in <span className="text-purple fw-semibold">GovTech delivery, web application development, and QA automation</span>.
                            </p>
                        </div>

                        <div className="mt-4">
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                I lead the PAFDA Laboratory Information Management System program — multi-module delivery spanning LIMS, QMS, HR, and storage management — from BRDs and UAT through go-live and beyond.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                Alongside delivery, I build: React and Node.js web applications, AI-powered tools using face recognition and gesture control, and Excel-driven Playwright test automation with narrated video reporting.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                My background in project coordination means every build starts from real requirements and ends with something users can actually adopt.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section >
    );
};

export default Hero;
