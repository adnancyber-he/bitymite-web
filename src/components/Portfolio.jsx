import { motion } from 'framer-motion';

const projects = [
    {
        title: "FinGuard Banking API",
        category: "FinTech Security",
        image: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        tags: ["API Security", "Node.js", "Encryption"]
    },
    {
        title: "E-Commerce Shield",
        category: "Web Application",
        image: "linear-gradient(135deg, #0f2027 0%, #203a43 100%)",
        tags: ["React", "Stripe", "WAF Integration"]
    },
    {
        title: "HealthChain",
        category: "MedTech / Blockchain",
        image: "linear-gradient(135deg, #000000 0%, #434343 100%)",
        tags: ["Blockchain", "Hipaa Compliance", "Smart Contracts"]
    },
    {
        title: "Alpha Threat Intel",
        category: "SaaS Platform",
        image: "linear-gradient(135deg, #232526 0%, #414345 100%)",
        tags: ["Threat Intelligence", "Python", "React"]
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="section" style={{ background: '#0a0a0a' }}>
            <div className="container">
                <div className="portfolio-header">
                    <div>
                        <h2 className="section-title">Featured Work</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Transforming ideas into secure digital assets.</p>
                    </div>
                    <button className="btn btn-outline">
                        View All Projects
                    </button>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="project-card"
                        >
                            {/* Abstract Placeholder Image */}
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: project.image,
                                    transition: 'transform 0.5s ease'
                                }}
                            />

                            {/* Overlay Content */}
                            <div className="project-overlay">
                                <div>
                                    <span style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>{project.category}</span>
                                    <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>{project.title}</h3>
                                    <div className="project-tags">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
