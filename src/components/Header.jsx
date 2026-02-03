import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Products', href: '#products' },
        { name: 'Why Us', href: '#features' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">
                    <img src="/logo.png" alt="Innover Star Logo" className="logo-img" style={{ height: '50px', width: 'auto' }} />
                    <span>Innover Star</span>
                </a>

                {/* Desktop Nav */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}

                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                <motion.div
                    initial={false}
                    animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
                >
                    <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mobile-link"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </nav>
    );
};

export default Header;
