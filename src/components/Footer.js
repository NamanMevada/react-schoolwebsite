import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../images/f18bb1a121031efe83e28fa04d8ec90b84886968.png';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim()) {
            // Handle subscription logic
            console.log('Subscribing:', email);
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 5000);
        }
    };

    const quickLinks = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Admissions', path: '/admissions' },
        { label: 'Academics', path: '/academics' },
        { label: 'Faculty', path: '/teachers' },
        { label: 'Gallery', path: '/gallery' }
    ];

    const resourceLinks = [
        { label: 'Student Portal', path: '/portal' },
        { label: 'Parent Portal', path: '/parent-portal' },
        { label: 'Academic Calendar', path: '/calendar' },
        { label: 'Fee Structure', path: '/fees' },
        { label: 'Careers', path: '/careers' },
        { label: 'Downloads', path: '/downloads' }
    ];

    const supportLinks = [
        { label: 'Contact Us', path: '/contact' },
        { label: 'FAQs', path: '/faqs' },
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms of Service', path: '/terms' },
        { label: 'Sitemap', path: '/sitemap' }
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            url: 'https://facebook.com',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            )
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
            )
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            )
        },
        {
            name: 'YouTube',
            url: 'https://youtube.com',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            )
        }
    ];

    return (
        <footer className="footer">
            {/* Newsletter Section */}
            <div className="footer-newsletter">
                <div className="newsletter-container">
                    <div className="newsletter-content">
                        <div className="newsletter-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </div>
                        <div className="newsletter-text">
                            <h3>Subscribe to Our Newsletter</h3>
                            <p>Stay updated with the latest news, events, and announcements from Greenfield High School</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubscribe} className="newsletter-form">
                        {subscribed ? (
                            <div className="subscribe-success">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <span>Thank you for subscribing!</span>
                            </div>
                        ) : (
                            <>
                                <div className="input-group">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <button type="submit">
                                        Subscribe
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="privacy-note">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                    We respect your privacy. Unsubscribe at any time.
                                </p>
                            </>
                        )}
                    </form>
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer-main">
                <div className="footer-container">
                    {/* School Info */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src={logo} alt="Greenfield High School" />
                            <div className="logo-text">
                                <span className="school-name">Greenfield</span>
                                <span className="school-type">High School</span>
                            </div>
                        </Link>
                        <p className="school-description">
                            Inspiring excellence and nurturing creativity since 1990. 
                            We are committed to providing quality education that shapes 
                            tomorrow's leaders.
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <div>
                                    <span>123 Greenfield Avenue</span>
                                    <span>Springfield, State 12345</span>
                                </div>
                            </div>
                            <div className="contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <div>
                                    <a href="tel:+15551234567">(555) 123-4567</a>
                                    <a href="tel:+15551234568">(555) 123-4568</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <div>
                                    <a href="mailto:info@greenfieldhs.edu">info@greenfieldhs.edu</a>
                                    <a href="mailto:admissions@greenfieldhs.edu">admissions@greenfieldhs.edu</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.path}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="footer-links">
                        <h4>Resources</h4>
                        <ul>
                            {resourceLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.path}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="footer-links">
                        <h4>Support</h4>
                        <ul>
                            {supportLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.path}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Office Hours */}
                        <div className="office-hours">
                            <h5>Office Hours</h5>
                            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                            <p>Saturday: 9:00 AM - 1:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <div className="copyright">
                        <p>
                            © {new Date().getFullYear()} Greenfield High School. All Rights Reserved.
                        </p>
                        <p className="credits">
                            Designed with <span className="heart">♥</span> for Education
                        </p>
                    </div>
                    
                    <div className="footer-social">
                        {socialLinks.map((social, index) => (
                            <a 
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="social-link"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    <div className="footer-badges">
                        <div className="badge">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <span>CBSE Affiliated</span>
                        </div>
                        <div className="badge">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="8" r="7" />
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                            </svg>
                            <span>A+ Rated</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top */}
            <button 
                className="back-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 15l-6-6-6 6" />
                </svg>
            </button>
        </footer>
    );
};

export default Footer;