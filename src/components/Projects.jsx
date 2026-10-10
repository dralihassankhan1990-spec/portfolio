"use client";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { projects } from '../data/projectsData';

const Projects = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleShow = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992); // lg breakpoint
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <Container style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project-wrapper position-relative mb-5 pb-5"
                        style={{
                            marginBottom: isMobile ? '60px' : '120px',
                            paddingBottom: isMobile ? '40px' : '80px'
                        }}
                    >
                        {/* Radial Glow Background - Only show on desktop */}
                        {!isMobile && (
                            <div className="purple-radial-bg" style={{
                                position: 'absolute',
                                top: '50%',
                                left: project.align === 'left' ? '20%' : '80%',
                                transform: 'translate(-50%, -50%)',
                                width: '100%',
                                height: '100%',
                                zIndex: 0
                            }}></div>
                        )}

                        <Row className={`align-items-center ${!isMobile && project.align === 'right' ? 'flex-row-reverse' : ''}`}>
                            {/* Image Column */}
                            <Col xs={12} lg={6} className="mb-4 mb-lg-0" style={{ position: 'relative', zIndex: 1 }}>
                                <div className="project-image-container" style={{
                                    position: 'relative',
                                    marginBottom: isMobile ? '30px' : '0'
                                }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="img-fluid rounded"
                                        style={{
                                            width: '100%',
                                            height: isMobile ? '300px' : '500px',
                                            objectFit: 'contain',
                                            border: '1px solid rgba(139, 92, 246, 0.2)',
                                            borderRadius: '15px',
                                            boxShadow: '0 15px 50px rgba(0, 0, 0, 0.4)'
                                        }}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            if (e.target.nextSibling) {
                                                e.target.nextSibling.style.display = 'flex';
                                            }
                                        }}
                                    />
                                    <div style={{
                                        display: 'none',
                                        width: '100%',
                                        height: isMobile ? '300px' : '500px',
                                        background: 'var(--card-bg)',
                                        border: '1px solid var(--card-border)',
                                        borderRadius: '15px',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--text-muted)'
                                    }}>
                                        Project Screenshot
                                    </div>
                                </div>
                            </Col>

                            {/* Description Column */}
                            <Col xs={12} lg={6} style={{
                                position: 'relative',
                                zIndex: 2,
                                ...(!isMobile && {
                                    marginLeft: project.align === 'left' ? '-80px' : '0',
                                    marginRight: project.align === 'right' ? '-80px' : '0',
                                })
                            }}>
                                <div className={`${!isMobile && (project.align === 'right' ? 'ps-lg-5' : 'pe-lg-5')}`} style={{
                                    background: 'var(--card-bg)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid var(--card-border)',
                                    borderRadius: '20px',
                                    padding: isMobile ? '25px' : '40px',
                                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
                                }}>
                                    <p className="text-purple mb-2" style={{
                                        fontSize: isMobile ? '0.9rem' : 'var(--font-size-body)',
                                        fontWeight: '600'
                                    }}>
                                        Featured Project
                                    </p>
                                    <h3 style={{
                                        fontSize: isMobile ? '1.5rem' : '2rem',
                                        color: 'var(--text-primary)',
                                        marginBottom: '15px'
                                    }}>
                                        {project.title}
                                    </h3>
                                    <div style={{
                                        background: 'var(--card-bg)',
                                        padding: isMobile ? '15px' : '20px',
                                        borderRadius: '10px',
                                        marginBottom: '20px'
                                    }}>
                                        <p style={{
                                            color: 'var(--text-secondary)',
                                            marginBottom: '20px',
                                            fontSize: isMobile ? '0.9rem' : '1rem',
                                            lineHeight: '1.7'
                                        }}>
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="d-flex flex-wrap gap-2 mb-3" style={{
                                        marginBottom: isMobile ? '15px' : '20px'
                                    }}>
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-pill"
                                                style={{
                                                    fontSize: isMobile ? '0.75rem' : '0.85rem',
                                                    background: 'rgba(139, 92, 246, 0.1)',
                                                    color: 'var(--text-primary)',
                                                    border: '1px solid rgba(139, 92, 246, 0.3)'
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="d-flex gap-3 flex-wrap">
                                        {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            className="btn btn-outline-primary btn-sm"
                                            style={{
                                                padding: isMobile ? '0.25rem 0.75rem' : '0.5rem 1.25rem',
                                                fontSize: isMobile ? '0.8rem' : '0.9rem'
                                            }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Project
                                        </a>
                                        )}
                                        {project.sourceCode && (
                                        <a
                                            href={project.sourceCode}
                                            className="btn btn-outline-secondary btn-sm"
                                            style={{
                                                padding: isMobile ? '0.25rem 0.75rem' : '0.5rem 1.25rem',
                                                fontSize: isMobile ? '0.8rem' : '0.9rem'
                                            }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Source Code
                                        </a>
                                        )}
                                        <Button
                                            variant="outline-info"
                                            size="sm"
                                            onClick={() => handleShow(project)}
                                            style={{
                                                padding: isMobile ? '0.25rem 0.75rem' : '0.5rem 1.25rem',
                                                fontSize: isMobile ? '0.8rem' : '0.9rem',
                                                color: 'var(--text-primary)',
                                                borderColor: 'var(--text-secondary)'
                                            }}
                                        >
                                            Read More
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                ))}
            </Container>

            <Modal show={showModal} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton style={{ background: 'var(--card-bg)', color: 'var(--text-primary)', borderBottom: '1px solid var(--card-border)' }}>
                    <Modal.Title>{selectedProject?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: 'var(--card-bg)', color: 'var(--text-secondary)' }}>
                    <div style={{ lineHeight: '1.7' }}>
                        <ReactMarkdown>{selectedProject?.fullDescription || selectedProject?.description}</ReactMarkdown>
                    </div>
                    <div className="d-flex flex-wrap gap-2 mt-4">
                        {selectedProject?.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 rounded-pill"
                                style={{
                                    fontSize: '0.85rem',
                                    background: 'rgba(139, 92, 246, 0.1)',
                                    color: 'var(--text-primary)',
                                    border: '1px solid rgba(139, 92, 246, 0.3)'
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ background: 'var(--card-bg)', borderTop: '1px solid var(--card-border)' }}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};

export default Projects;