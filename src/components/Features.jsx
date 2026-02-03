import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, TrendingUp, ShieldCheck, Users } from 'lucide-react';

const features = [
    {
        icon: <ShieldCheck size={40} />,
        title: 'Specialized Expertise',
        desc: 'Deep knowledge of Egypt-UAE trade regulations and logistics.',
    },
    {
        icon: <Users size={40} />,
        title: 'Trusted Partners',
        desc: 'Direct access to certified quarries and organic farms.',
    },
    {
        icon: <TrendingUp size={40} />,
        title: 'Competitive Pricing',
        desc: 'Volume-based pricing without compromising on quality.',
    },
    {
        icon: <Clock size={40} />,
        title: 'On-Time Delivery',
        desc: 'Reliable shipping schedules and efficient customs clearance.',
    },
    {
        icon: <CheckCircle size={40} />,
        title: 'Dedicated Support',
        desc: 'Personalized account management for every B2B client.',
    },
];

const Features = () => {
    return (
        <section id="features" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Why Choose <span className="accent-text">Innover Star?</span>
                    </motion.h2>
                    <div style={{ height: '4px', width: '80px', backgroundColor: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }} />
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel feature-card"
                        >
                            <div style={{ marginBottom: '1rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'center' }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
