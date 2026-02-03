import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-grid">
                {/* Brand Info */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>
                            Innover Star
                        </span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                        Your trusted gateway for importing premium Egyptian products to the UAE.
                        Quality, reliability, and excellence in every shipment.
                    </p>
                    <div className="social-links">
                        {[<Linkedin size={20} />, <Facebook size={20} />, <Instagram size={20} />].map((icon, i) => (
                            <a key={i} href="#" className="social-icon">
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>Quick Links</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {['Home', 'Services', 'Products', 'Why Us'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                                    style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                                    onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>Contact Us</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <MapPin style={{ color: 'var(--primary)', marginTop: '4px' }} size={20} />
                            <span style={{ color: 'var(--text-muted)' }}>
                                Dubai, United Arab Emirates
                            </span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Phone style={{ color: 'var(--primary)' }} size={20} />
                            <a href="tel:+971524369802" style={{ color: 'var(--text-muted)' }}>
                                +971 52 436 9802
                            </a>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Mail style={{ color: 'var(--primary)' }} size={20} />
                            <a href="mailto:sherif.rashed@innoverstar.com" style={{ color: 'var(--text-muted)' }}>
                                sherif.rashed@innoverstar.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <p>&copy; {new Date().getFullYear()} Innover Star. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
