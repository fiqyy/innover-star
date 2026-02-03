import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Globe, ClipboardCheck, Truck, Handshake } from 'lucide-react';

const services = [
    {
        icon: <Ship size={32} />,
        title: 'Import & Customs',
        description: 'Seamless import processes and expert customs clearance for hassle-free trade.',
    },
    {
        icon: <Globe size={32} />,
        title: 'Direct Sourcing',
        description: 'We connect you directly with trusted farms and quarries in Egypt.',
    },
    {
        icon: <ClipboardCheck size={32} />,
        title: 'Quality Inspection',
        description: 'Rigorous quality checks to ensure products meet UAE standards.',
    },
    {
        icon: <Truck size={32} />,
        title: 'Logistics',
        description: 'Complete logistics solutions including warehousing and cold chain transport.',
    },
    {
        icon: <Handshake size={32} />,
        title: 'B2B Supply',
        description: 'Reliable B2B contract supply for wholesalers and distributors.',
    },
];

const Services = () => {
    return (
        <section id="services" className="section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Our <span className="accent-text">Services</span>
                    </motion.h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Comprehensive trade solutions tailored for the UAE market.
                    </p>
                </div>

                <div className="grid-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel service-card"
                        >
                            <div className="icon-box">
                                {service.icon}
                            </div>
                            <h3 style={{ marginBottom: '0.75rem', fontWeight: 700 }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
