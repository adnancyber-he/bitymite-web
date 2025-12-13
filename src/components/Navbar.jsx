import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Services', href: '#services' },
        { title: 'Why Us', href: '#why-us' },
        { title: 'Process', href: '#process' },
        { title: 'Portfolio', href: '#portfolio' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    {/* Logo */}
                    <a href="#" className="logo">
                        Bitymite<span style={{ color: 'var(--accent-cyan)' }}>.</span>
                    </a>

                    {/* Desktop Links */}
                    <div className="nav-links">
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="nav-link"
                            >
                                {link.title}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="btn btn-primary"
                            style={{ padding: '8px 20px', fontSize: '0.9rem' }}
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            background: '#0a0a0a',
                            padding: '2rem',
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ fontSize: '1.1rem', fontWeight: 500 }}
                            >
                                {link.title}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="btn btn-primary"
                            style={{ textAlign: 'center', justifyContent: 'center' }}
                        >
                            Contact Us
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
