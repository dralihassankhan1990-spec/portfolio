"use client";
import React from 'react';

const ExploreLinks = () => {
    const scrollTo = (selector) => {
        const el = document.querySelector(selector);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const cardStyle = {
        flex: '1',
        minWidth: '250px',
        maxWidth: '340px',
        padding: '2rem 1.5rem',
        borderRadius: '16px',
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    };

    return (
        <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <div
                onClick={() => scrollTo('#projects')}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = ''; }}
                style={{
                    ...cardStyle,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    boxShadow: '0 8px 24px rgba(102, 126, 234, 0.35)'
                }}
            >
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🚀</div>
                <h3 style={{ color: 'white', fontWeight: '700', marginBottom: '8px' }}>View Projects</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', margin: 0 }}>
                    8 builds — AI apps, automation, platforms
                </p>
            </div>
            <div
                onClick={() => scrollTo('#contact')}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = ''; }}
                style={{
                    ...cardStyle,
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #3b0764 100%)',
                    boxShadow: '0 8px 24px rgba(139, 92, 246, 0.35)'
                }}
            >
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🤝</div>
                <h3 style={{ color: 'white', fontWeight: '700', marginBottom: '8px' }}>Get in Touch</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', margin: 0 }}>
                    Open to PM roles and collaborations
                </p>
            </div>
        </div>
    );
};

export default ExploreLinks;
