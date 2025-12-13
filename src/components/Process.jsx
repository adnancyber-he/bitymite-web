import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Requirement Analysis",
        desc: "We analyze your business needs, security requirements, and technical constraints."
    },
    {
        number: "02",
        title: "Design & Architecture",
        desc: "We create secure, scalable blueprints ensuring every component is optimized."
    },
    {
        number: "03",
        title: "Development & Testing",
        desc: "Agile development with continuous security integration (DevSecOps)."
    },
    {
        number: "04",
        title: "Deployment & Support",
        desc: "Smooth deployment with ongoing monitoring and maintenance."
    }
];

const Process = () => {
    return (
        <section id="process" className="section" style={{ background: '#020202' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">Our Process</h2>
                    <p className="section-subtitle">Streamlined. Transparent. Secure.</p>
                </div>

                <div className="process-grid">
                    {/* Connector Line (visible using CSS pseudo-elements if needed, here simplified) */}

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="process-card"
                        >
                            <span className="step-number">{step.number}</span>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.8rem' }}>{step.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
