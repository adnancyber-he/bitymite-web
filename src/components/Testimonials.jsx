import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Bitymite's security audit saved us from a potential disaster. Their attention to detail is unmatched.",
        author: "Sarah Jenkins",
        role: "CTO, FinTech Startups"
    },
    {
        quote: "Professional, fast, and extremely knowledgeable. We scaled our SaaS platform with confidence thanks to their architecture.",
        author: "David Chen",
        role: "Founder, CloudScale"
    },
    {
        quote: "The best development partner we've worked with. They understand both business goals and security requirements.",
        author: "Elena Rodriguez",
        role: "Product Manager, Enterprise Corp"
    }
];

const Testimonials = () => {
    return (
        <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Patterns */}
            <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.2,
                backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                zIndex: -1
            }} />

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">Client Stories</h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="testimonial-card"
                        >
                            <Quote size={40} style={{ color: 'var(--accent-cyan)', opacity: 0.5, marginBottom: '1.5rem' }} />
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>"{t.quote}"</p>
                            <div>
                                <h4 style={{ fontWeight: 700, color: 'white' }}>{t.author}</h4>
                                <span style={{ fontSize: '0.9rem', color: '#666' }}>{t.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
