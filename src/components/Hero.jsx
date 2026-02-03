import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Anchor } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            {/* Background Effect */}
            <div className="hero-bg">
                <div className="hero-overlay" />
                <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Background"
                    className="hero-img"
                />
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="tagline">
                        <Anchor size={16} />
                        <span>PREMIUM B2B IMPORT & EXPORT</span>
                    </div>
                    <h1 className="hero-title">
                        Trusted Trade. <br />
                        <span className="accent-text">Global Reach.</span>
                    </h1>
                    <p className="hero-desc">
                        Innover Star bridges the gap between trusted Egyptian producers and the UAE market.
                        From marble to spices, we deliver excellence.
                    </p>
                    <div className="hero-actions">
                        <a href="#products" className="btn-primary">
                            Explore Products
                            <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn-outline">
                            Contact Us
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-visual"
                >

                    {/* Decorative Elements (simulated with standard styles if needed, or kept simple) */}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
