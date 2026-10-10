"use client";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // This runs only on the client side
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
        <section id="contact" className="section-padding">
            <Container>
                <h2 className="section-title">Contact</h2>

                <div className="text-center mb-5">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p style={{ 
                            fontSize: '1.2rem', 
                            color: 'var(--text-primary)',
                            lineHeight: '1.8',
                            marginBottom: '2rem'
                        }}>
                            I'm open to full-time Project Manager / Business Analyst / Implementation roles
                            and select collaborations.
                            Whether it's GovTech delivery, QA automation, or a web application build,
                            feel free to reach out — I'm always open to discussing new projects,
                            creative ideas, or opportunities to be part of your vision.
                        </p>
                        
                        <div style={{ 
                            width: '100%', 
                            maxWidth: '600px', 
                            margin: '2rem auto',
                            padding: '0 1rem'
                        }}>
                            <a 
                                href="mailto:dr.bilal492@gmail.com" 
                                style={{
                                    display: 'flex',
                                    flexDirection: isMobile ? 'column' : 'row',
                                    alignItems: 'center',
                                    background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
                                    padding: isMobile ? '1.5rem 1rem' : '1.25rem 2rem',
                                    borderRadius: '8px',
                                    marginBottom: '1.5rem',
                                    textDecoration: 'none',
                                    borderLeft: '4px solid var(--purple-primary)',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                                    textAlign: isMobile ? 'center' : 'left'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = '';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)';
                                }}
                            >
                                <div style={{
                                    background: 'var(--purple-primary)',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: isMobile ? 0 : '1.5rem',
                                    marginBottom: isMobile ? '1rem' : 0,
                                    flexShrink: 0
                                }}>
                                    <i className="bi bi-envelope-fill" style={{
                                        color: 'white',
                                        fontSize: '1.5rem'
                                    }}></i>
                                </div>
                                <div>
                                    <div style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--text-secondary)',
                                        marginBottom: '0.25rem',
                                        fontWeight: '500'
                                    }}>Email me at</div>
                                    <div style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '700',
                                        color: 'var(--text-primary)'
                                    }}>dr.bilal492@gmail.com</div>
                                </div>
                            </a>

                            <a 
                                href="tel:+923394056390" 
                                style={{
                                    display: 'flex',
                                    flexDirection: isMobile ? 'column' : 'row',
                                    alignItems: 'center',
                                    background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
                                    padding: isMobile ? '1.5rem 1rem' : '1.25rem 2rem',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    borderLeft: '4px solid #3b82f6',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                                    textAlign: isMobile ? 'center' : 'left'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = '';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)';
                                }}
                            >
                                <div style={{
                                    background: '#3b82f6',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: isMobile ? 0 : '1.5rem',
                                    marginBottom: isMobile ? '1rem' : 0,
                                    flexShrink: 0
                                }}>
                                    <i className="bi bi-telephone-fill" style={{
                                        color: 'white',
                                        fontSize: '1.5rem',
                                        transform: 'rotate(10deg)'
                                    }}></i>
                                </div>
                                <div>
                                    <div style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--text-secondary)',
                                        marginBottom: '0.25rem',
                                        fontWeight: '500'
                                    }}>Whatsapp</div>
                                    <div style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '700',
                                        color: 'var(--text-primary)'
                                    }}>+92 339 4056390</div>
                                </div>
                            </a>
                        </div>
                        
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            marginTop: '2rem',
                            fontStyle: 'italic'
                        }}>
                            I typically respond within 24 hours. Looking forward to connecting with you!
                        </p>
                    </div>
                </div>

                <div className="text-center mt-5 pt-4">
                    <div className="d-flex justify-content-center gap-4">
                        <a href="https://www.linkedin.com/in/bilal492/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }} title="LinkedIn">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="mailto:dr.bilal492@gmail.com" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.3s' }} title="Email">
                            <i className="bi bi-envelope"></i>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;