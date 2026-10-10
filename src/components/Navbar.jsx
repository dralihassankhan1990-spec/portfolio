// In src/components/Navbar.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { usePathname } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getActiveSection = () => {
        if (typeof window === 'undefined') {
            return pathname === '/projects' ? 'projects' : 'home';
        }
        
        const hash = window.location.hash;
        if (pathname === '/') {
            if (hash === '#WorkExperience') return 'WorkExperience';
            if (hash === '#contact') return 'contact';
            if (hash === '#projects') return 'projects';
            return 'home';
        }
        if (pathname === '/projects') return 'projects';
        return 'home';
    };

    const handleNavClick = (e, path, isHashLink = false) => {
        if (isHashLink) {
            e.preventDefault();
            if (pathname === '/') {
                const element = document.querySelector(path);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.location.href = `/${path}`;
            }
        }
        // Close mobile menu when a link is clicked
        setExpanded(false);
    };

    return (
        <Navbar 
            expand="lg" 
            expanded={expanded}
            className={`navbar-custom fixed-top ${scrolled ? 'scrolled' : ''}`}
            style={{
                backgroundColor: scrolled ? 'rgba(17, 7, 31, 0.95)' : 'rgba(17, 7, 31, 0.8)',
                backdropFilter: 'blur(10px)',
                padding: '0.1rem 0',
                transition: 'all 0.3s ease'
            }}
        >
            <Container>
                <Navbar.Brand 
                    href="/" 
                    className="text-white fw-bold"
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        letterSpacing: '0.5px'
                    }}
                >
                    Muhammad Bilal
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    onClick={() => setExpanded(expanded ? false : true)}
                    style={{
                        border: 'none',
                        padding: '0.5rem',
                        outline: 'none',
                        boxShadow: 'none'
                    }}
                >
                    <span 
                        className="navbar-toggler-icon"
                        style={{
                            backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
                            width: '1.5em',
                            height: '1.5em'
                        }}
                    />
                </Navbar.Toggle>
                <Navbar.Collapse 
                    id="basic-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav 
                        className="align-items-lg-center"
                        style={{
                            padding: '0.1rem 0',
                            gap: '1rem'
                        }}
                    >
                        <Nav.Link 
                            href="/" 
                            className={getActiveSection() === 'home' ? 'active' : ''}
                            onClick={(e) => handleNavClick(e, '/')}
                            style={{
                                color: 'var(--text-primary)',
                                fontSize: '1rem',
                                fontWeight: '500',
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            href="/#WorkExperience" 
                            className={getActiveSection() === 'WorkExperience' ? 'active' : ''}
                            onClick={(e) => handleNavClick(e, '#WorkExperience', true)}
                            style={{
                                color: 'var(--text-primary)',
                                fontSize: '1rem',
                                fontWeight: '500',
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link 
                            href="#projects" 
                            className={getActiveSection() === 'projects' ? 'active' : ''}
                            onClick={(e) => handleNavClick(e, '#projects', true)}
                            style={{
                                color: 'var(--text-primary)',
                                fontSize: '1rem',
                                fontWeight: '500',
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Projects
                        </Nav.Link>

                        <Nav.Link 
                            href="#contact" 
                            className={getActiveSection() === 'contact' ? 'active' : ''}
                            onClick={(e) => handleNavClick(e, '#contact', true)}
                            style={{
                              color: 'var(--text-primary)',
                                fontSize: '1rem',
                                fontWeight: '500',
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;