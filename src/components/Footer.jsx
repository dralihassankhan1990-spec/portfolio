"use client";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg={12} className="text-center">
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                            © {new Date().getFullYear()} Muhammad Bilal · IT Project Coordinator — GovTech Digital Transformation
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                            Built with Next.js & React
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
