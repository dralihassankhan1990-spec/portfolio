"use client";
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectModal = ({ project, show, onHide }) => {
    if (!project) return null;
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton style={{ background: '#0b1120', color: 'var(--text-primary)', borderBottom: '1px solid var(--card-border)' }}>
                <Modal.Title style={{ fontSize: '1.2rem' }}>{project.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ background: '#0b1120', color: 'var(--text-secondary)' }}>
                {project.image && (
                    <img src={project.image} alt={project.title} className="w-100 rounded mb-4" style={{ maxHeight: '300px', objectFit: 'cover' }} />
                )}
                <div style={{ lineHeight: '1.7', whiteSpace: 'pre-wrap', fontSize: '0.95rem' }}>
                    <ReactMarkdown>{project.fullDescription || project.description}</ReactMarkdown>
                </div>
                <div className="d-flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 rounded-pill"
                            style={{ fontSize: '0.8rem', background: 'rgba(34,211,238,0.1)', color: 'var(--text-primary)', border: '1px solid rgba(34,211,238,0.3)' }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </Modal.Body>
            <Modal.Footer style={{ background: '#0b1120', borderTop: '1px solid var(--card-border)' }} className="d-flex justify-content-between">
                <div className="d-flex gap-2">
                    {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-glow-cyan d-flex align-items-center gap-1">
                            <FiExternalLink size={13} /> Live Demo
                        </a>
                    )}
                    {project.sourceCode && (
                        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="btn btn-sm d-flex align-items-center gap-1" style={{ border: '1px solid rgba(255,255,255,0.25)', color: 'var(--text-primary)' }}>
                            <FiGithub size={13} /> Source Code
                        </a>
                    )}
                </div>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProjectModal;
