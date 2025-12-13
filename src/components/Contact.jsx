import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // INSTRUCTIONS:
        // 1. Follow the guide in `backend/README.md` to deploy the Google Apps Script.
        // 2. Paste the Web App URL below.
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyA6iVPOQ0lKNKmO9D6ohOU8byRssRAm8kRCYI3_8XPBhorMTnjssiRkhsHHGh1PW140A/exec";

        if (SCRIPT_URL.includes("REPLACE")) {
            // Fallback for demo if user hasn't set it up yet
            console.warn("Script URL not set. Simulating success.");
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
            return;
        }

        try {
            // Use 'no-cors' mode for Google Apps Script
            // Note: We won't get a specific JSON response in 'no-cors' mode, 
            // but the request will go through if the URL is correct.
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);

        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section" style={{ position: 'relative' }}>
            {/* Background Gloam */}
            <div style={{
                position: 'absolute',
                right: 0, bottom: 0,
                width: '600px', height: '600px',
                background: 'rgba(255, 0, 80, 0.05)',
                borderRadius: '50%',
                filter: 'blur(120px)',
                pointerEvents: 'none',
                zIndex: -1
            }} />

            <div className="container">
                <div className="contact-container">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">
                            Let's Build Something <br />
                            <span className="text-gradient">
                                Secure Together.
                            </span>
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '400px' }}>
                            Ready to secure your digital assets or build next-gen software? Drop us a message and we'll get back to you within 24 hours.
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                                <Send size={20} />
                            </div>
                            <div>
                                <h5 style={{ fontWeight: 600 }}>Email Us</h5>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>BITYMITE@proton.me</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="contact-form"
                    >
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="btn-submit"
                                style={{ opacity: status === 'loading' || status === 'success' ? 0.7 : 1 }}
                            >
                                {status === 'loading' ? (
                                    <span>Sending...</span>
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle size={20} /> Message Sent!
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
