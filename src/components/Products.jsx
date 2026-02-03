import React from 'react';
import { motion } from 'framer-motion';

const products = [
    {
        id: 'marble',
        category: 'Marble',
        image: 'https://images.unsplash.com/photo-1618221591461-125032bb259f?q=80&w=2070&auto=format&fit=crop',
        items: ['Blocks, slabs & tiles', 'Custom finishes for projects'],
        desc: 'Premium Egyptian marble known for its durability and elegance.',
    },
    {
        id: 'granite',
        category: 'Granite',
        image: 'https://images.unsplash.com/photo-1624640107775-4d37c95a5f6e?q=80&w=2070&auto=format&fit=crop',
        items: ['Blocks & slabs', 'Polished, honed & flamed', 'Flooring & facades'],
        desc: 'Tough and versatile granite suitable for high-traffic areas.',
    },
    {
        id: 'fruits',
        category: 'Dried Fruits',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop',
        items: ['Dates, figs, raisins', 'Apricots', 'Bulk & private label'],
        desc: 'Naturally sweet and preserved fruits from the heart of Egypt.',
    },
    {
        id: 'spices',
        category: 'Spices',
        image: 'https://images.unsplash.com/photo-1532336414008-8296ee85f95f?q=80&w=2070&auto=format&fit=crop',
        items: ['Cumin, coriander', 'Chili, paprika, turmeric', 'Cleaned & graded'],
        desc: 'Aromatic spices essential for culinary excellence.',
    },
    {
        id: 'veg',
        category: 'Fresh Vegetables',
        image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=2070&auto=format&fit=crop',
        items: ['Fresh & chilled', 'Sourced from farms', 'Full cold chain'],
        desc: 'Farm-fresh vegetables delivered with optimal freshness.',
    },
];

const Products = () => {
    return (
        <section id="products" className="section" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <div className="section-header">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}
                    >
                        Our Portfolio
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Premium Egyptian <span className="accent-text">Products</span>
                    </motion.h2>
                </div>

                <div className="grid-3">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="product-card"
                        >
                            {/* Image Background */}
                            <div className="product-bg">
                                <img
                                    src={product.image}
                                    alt={product.category}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            {/* Product Content */}
                            <div className="product-content">
                                <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'white' }}>{product.category}</h3>
                                <p style={{ color: '#d1d5db', fontSize: '0.9rem', marginBottom: '1rem', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                                    {product.desc}
                                </p>
                                <ul style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                    {product.items.map((item, i) => (
                                        <li key={i} style={{ color: '#9ca3af', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)' }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="product-line" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
