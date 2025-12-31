import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-grid">

                    {}
                    <div className="hero-content">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="hero-badge"
                        >
                            <ShieldCheck size={16} color="var(--accent-cyan)" />
                            <span>Premium Cybersecurity & Software</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="hero-title"
                        >
                            Secure. <br />
                            Scale. <br />
                            <span className="text-gradient">
                                Succeed.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="hero-desc"
                        >
                            We build secure web applications, scalable software, and protect businesses from cyber threats with military-grade precision.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="hero-actions"
                        >
                            <a href="#contact" className="btn btn-primary">
                                Get a Free Consultation
                                <ArrowRight size={20} />
                            </a>
                            <a href="#services" className="btn btn-outline">
                                View Our Services
                            </a>
                        </motion.div>
                    </div>

                    {}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="hero-visual"
                    >
                        {}
                        <div style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(45deg, var(--accent-cyan), var(--accent-pink))',
                            filter: 'blur(80px)',
                            opacity: 0.3,
                            borderRadius: '50%',
                        }} />

                        <div className="hero-card">
                            <div style={{ margin: '0 auto 1.5rem auto', width: '80px', height: '80px', background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-pink))', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0, 242, 234, 0.3)' }}>
                                <ShieldCheck size={40} color="white" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Secure By Design</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Every line of code we write is tested.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
