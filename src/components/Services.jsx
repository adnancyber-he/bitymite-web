import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Shield, Bug, Lock, Server, Terminal, X, CheckCircle, DollarSign } from 'lucide-react';

const services = [
    {
        icon: <Globe size={32} />,
        title: "Web Application Development",
        shortDesc: "Scalable, high-performance web apps tailored to your business needs.",
        fullDesc: "We build world-class web applications using the latest technologies like React, Next.js, and Node.js. Our focus is on performance, accessibility, and user engagement, ensuring your digital presence stands out.",
        features: ["Responsive Design", "SEO Optimized", "CMS Integration", "Progressive Web App (PWA)"],
        cost: "Starting at $100",
        time: "2-4 Weeks"
    },
    {
        icon: <Terminal size={32} />,
        title: "Software Solutions",
        shortDesc: "Custom software that streamlines operations and drives growth.",
        fullDesc: "From internal dashboards to complex automation tools, we develop custom software tailored to your specific operational workflows. Increase efficiency and reduce manual errors with our bespoke solutions.",
        features: ["Workflow Automation", "Data Visualization", "Cross-Platform Support", "Legacy System Integration"],
        cost: "Custom Quote",
        time: "4-8 Weeks"
    },
    {
        icon: <Shield size={32} />,
        title: "Cybersecurity & Pentesting",
        shortDesc: "Comprehensive security audits to identify and fix vulnerabilities.",
        fullDesc: "Protect your assets with our military-grade security assessments. We perform rigorous penetration testing and security audits to find weak points before attackers do.",
        features: ["Vulnerability Assessment", "Penetration Testing", "Security Reporting", "Remediation Support"],
        cost: "Starting at $200",
        time: "1-2 Weeks"
    },
    {
        icon: <Bug size={32} />,
        title: "Bug Bounty & VAPT",
        shortDesc: "Proactive vulnerability assessment and penetration testing.",
        fullDesc: "Launch a managed bug bounty program or conduct specialized VAPT (Vulnerability Assessment and Penetration Testing) to continuously secure your platforms against evolving threats.",
        features: ["Managed Programs", "Real-time Reporting", "Ethical Hacking Team", "Zero-False Positives"],
        cost: "Starting at $300",
        time: "Ongoing / Project"
    },
    {
        icon: <Server size={32} />,
        title: "API & Backend Development",
        shortDesc: "Robust, secure backend systems that power your digital infrastructure.",
        fullDesc: "Power your applications with high-performance, secure APIs. We design scalable microservices and backend architectures that handle high traffic loads with ease.",
        features: ["REST & GraphQL", "Database Design", "Authentication (OAuth/JWT)", "Cloud Deployment (AWS/Azure)"],
        cost: "Starting at $200",
        time: "3-5 Weeks"
    },
    {
        icon: <Lock size={32} />,
        title: "Secure Architecture",
        shortDesc: "Designing systems with security as a core foundational element.",
        fullDesc: "Security isn't an addon; it's a foundation. We consult on architecture design to ensure your system is secure by default, compliant with regulations (GDPR, HIPAA), and resilient.",
        features: ["Zero Trust Architecture", "Cloud Security", "Compliance Audits", "Infrastructure as Code"],
        cost: "Consultation Call",
        time: "Variable"
    }
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section id="services" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        We combine cutting-edge technology with industry-leading security practices to deliver exceptional results.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            layoutId={`card-${index}`}
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedService(service)}
                            className="service-card"
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                {service.shortDesc}
                            </p>
                            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: 600 }}>
                                Learn More <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Full Screen Overlay Details */}
            <AnimatePresence>
                {selectedService && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            style={{
                                position: 'fixed',
                                inset: 0,
                                background: 'rgba(0,0,0,0.8)',
                                backdropFilter: 'blur(8px)',
                                zIndex: 2000
                            }}
                        />
                        <motion.div
                            layoutId={`card-${services.indexOf(selectedService)}`}
                            className="fixed inset-0 z-[2001] flex items-center justify-center p-4"
                            style={{
                                position: 'fixed',
                                inset: 0,
                                zIndex: 2001,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '20px',
                                pointerEvents: 'none' // Allow clicks to pass through to backdrop for closing, re-enabled on card
                            }}
                        >
                            <motion.div
                                style={{
                                    background: '#111',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '24px',
                                    padding: '2rem',
                                    width: '100%',
                                    maxWidth: '800px',
                                    position: 'relative',
                                    pointerEvents: 'auto',
                                    maxHeight: '90vh',
                                    overflowY: 'auto'
                                }}
                            >
                                <button
                                    onClick={() => setSelectedService(null)}
                                    style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white' }}
                                >
                                    <X size={20} />
                                </button>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                    <div className="service-icon" style={{ marginBottom: 0, width: '64px', height: '64px' }}>
                                        {selectedService.icon}
                                    </div>
                                    <h3 style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.2 }}>{selectedService.title}</h3>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                                    <div>
                                        <h4 style={{ color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '1rem', fontSize: '1.2rem' }}>About this Service</h4>
                                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                            {selectedService.fullDesc}
                                        </p>

                                        <h4 style={{ color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '1rem', fontSize: '1.2rem' }}>What's Included</h4>
                                        <ul style={{ display: 'grid', gap: '0.8rem' }}>
                                            {selectedService.features.map((feature, i) => (
                                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)' }}>
                                                    <CheckCircle size={16} color="var(--accent-pink)" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', height: 'fit-content' }}>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <DollarSign size={20} color="var(--accent-cyan)" /> Investment
                                        </h4>

                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Estimated Cost</span>
                                            <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>{selectedService.cost}</span>
                                        </div>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Timeframe</span>
                                            <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'white' }}>{selectedService.time}</span>
                                        </div>

                                        <a
                                            href="#contact"
                                            onClick={() => setSelectedService(null)}
                                            className="btn-submit"
                                            style={{ width: '100%', textAlign: 'center', textDecoration: 'none' }}
                                        >
                                            Enquire Now
                                        </a>
                                    </div>
                                </div>

                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;
