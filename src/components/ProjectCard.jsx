"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiInfo } from 'react-icons/fi';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ project, index }) => {
    const [showModal, setShowModal] = useState(false);
    const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

    const handleMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        setTilt({ rx: -py * 10, ry: px * 12 });
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50, rotateX: 8 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
                className="perspective-1200 h-100"
            >
                <div
                    className="card-3d preserve-3d h-100 d-flex flex-column overflow-hidden"
                    onMouseMove={handleMove}
                    onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
                    style={{ transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
                >
                    <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-100 h-100"
                            style={{ objectFit: 'cover' }}
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.4 }}
                        />
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to top, rgba(6,10,20,0.85) 0%, transparent 55%)' }} />
                    </div>
                    <div className="p-4 d-flex flex-column flex-grow-1">
                        <h5 className="fw-bold mb-2" style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: 1.35 }}>
                            {project.title}
                        </h5>
                        <p className="mb-3" style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {project.description}
                        </p>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                            {project.tags.slice(0, 3).map((t, i) => (
                                <span key={i} className="px-2 py-1 rounded-pill" style={{ fontSize: '0.7rem', background: 'rgba(34,211,238,0.1)', color: 'var(--purple-light)', border: '1px solid rgba(34,211,238,0.25)' }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="mt-auto d-flex flex-wrap gap-2">{!project.liveLink && <a className="btn btn-sm btn-outline-info" href={`/?item=${encodeURIComponent(project.title)}#contact`}>Request walkthrough</a>}
                            <button onClick={() => setShowModal(true)} className="btn btn-sm btn-glow-cyan d-flex align-items-center gap-1">
                                <FiInfo size={13} /> Details
                            </button>
                            {project.liveLink && (
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm d-flex align-items-center gap-1" style={{ border: '1px solid rgba(34,211,238,0.5)', color: 'var(--text-primary)' }}>
                                    <FiExternalLink size={13} /> {project.liveLink?.includes("drive.google.com") ? "Watch Demo" : "Open App"}
                                </a>
                            )}
                            {project.sourceCode && (
                                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="btn btn-sm d-flex align-items-center gap-1" style={{ border: '1px solid rgba(255,255,255,0.25)', color: 'var(--text-primary)' }}>
                                    <FiGithub size={13} /> Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
            <ProjectModal project={project} show={showModal} onHide={() => setShowModal(false)} />
        </>
    );
};

export default ProjectCard;
