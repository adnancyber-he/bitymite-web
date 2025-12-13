import { motion } from 'framer-motion';
import { Target, ShieldAlert, Award, Clock } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldAlert size={28} />,
    title: "Experienced Security Researchers",
    desc: "Our team consists of top-tier security experts and ethical hackers."
  },
  {
    icon: <Target size={28} />,
    title: "Secure-by-Design",
    desc: "Security is not an afterthought; it's integrated into every step."
  },
  {
    icon: <Award size={28} />,
    title: "Real-World Pentesting",
    desc: "We simulate real attacks to ensure your defenses are impenetrable."
  },
  {
    icon: <Clock size={28} />,
    title: "Fast Delivery & Transparency",
    desc: "Clear timelines, regular updates, and no hidden costs."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div className="why-us-grid">

          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Why Leading Businesses <br />
              <span className="text-gradient">
                Trust Bitymite
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}
            >
              In a digital world filled with threats, you need a partner who understands both creation and protection. We bridge the gap between innovation and security.
            </motion.p>

            <div className="feature-grid">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="feature-item"
                >
                  <div style={{ color: 'var(--accent-pink)', marginBottom: '1rem' }}>{reason.icon}</div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{reason.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{reason.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="stats-grid">
              <div className="stat-card" style={{ marginTop: '3rem' }}>
                <span className="stat-number">100+</span>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)' }}>Projects Secured</p>
              </div>
              <div className="stat-card">
                <span className="stat-number" style={{ color: 'var(--accent-cyan)' }}>99%</span>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)' }}>Client Satisfaction</p>
              </div>
              <div className="stat-card">
                <span className="stat-number" style={{ color: 'var(--accent-pink)' }}>24/7</span>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)' }}>Support & Monitoring</p>
              </div>
              <div className="stat-card" style={{ marginTop: '-3rem' }}>
                <span className="stat-number">0</span>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)' }}>Breaches Reported</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
