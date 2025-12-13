import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">

                    <div>
                        <a href="#" className="logo" style={{ marginBottom: '1rem', display: 'block' }}>
                            Bitymite<span style={{ color: 'var(--accent-cyan)' }}>.</span>
                        </a>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Secure by design. Building the future of digital infrastructure with uncompromising security.
                        </p>
                    </div>

                    <div>
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-links">
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Cybersecurity</a></li>
                            <li><a href="#">Penetration Testing</a></li>
                            <li><a href="#">API Solutions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-links">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#process">Our Process</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-heading">Connect</h4>
                        <div className="social-links">
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                            <a href="#" className="social-icon"><Github size={20} /></a>
                            <a href="#" className="social-icon"><Mail size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} Bitymite Agency. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
