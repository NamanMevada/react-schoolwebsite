import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

// Images
import heroImage from '../images/99c76c59f98d04c461dcc6d33cdc6ef2a3e695a5.png';
import mapImage from '../images/image 31.png';
import cardImage from '../images/e7459cfd18b86210608a5a5ea7de1876a32632d1.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                inquiryType: 'general'
            });
            
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            title: 'Visit Us',
            lines: ['123 Greenfield Avenue', 'Springfield, State 12345', 'United States']
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            title: 'Call Us',
            lines: ['Main Office: (555) 123-4567', 'Admissions: (555) 123-4568', 'Fax: (555) 123-4569']
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            title: 'Email Us',
            lines: ['info@greenfieldhs.edu', 'admissions@greenfieldhs.edu', 'support@greenfieldhs.edu']
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
            title: 'Office Hours',
            lines: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed']
        }
    ];

    const inquiryTypes = [
        { value: 'general', label: 'General Inquiry' },
        { value: 'admissions', label: 'Admissions' },
        { value: 'academics', label: 'Academics' },
        { value: 'fees', label: 'Fees & Payments' },
        { value: 'transport', label: 'Transportation' },
        { value: 'other', label: 'Other' }
    ];

    const faqs = [
        {
            question: 'What are the admission requirements?',
            answer: 'Admission requirements include previous academic records, entrance test results, and an interview. Please visit our Admissions page for detailed information.'
        },
        {
            question: 'What is the fee structure?',
            answer: 'Our fee structure varies by grade level. Please contact our admissions office or visit the Fees section on our website for detailed information.'
        },
        {
            question: 'Do you provide transportation?',
            answer: 'Yes, we provide transportation services covering major areas of the city. Routes and fees can be discussed with our transport coordinator.'
        },
        {
            question: 'What extracurricular activities are offered?',
            answer: 'We offer a wide range of activities including sports, music, art, debate, robotics, and various clubs. Students can choose based on their interests.'
        }
    ];

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="hero-background" style={{ backgroundImage: `url(${heroImage})` }}></div>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <span className="hero-badge">Get in Touch</span>
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you. Reach out to us with any questions or inquiries.</p>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span className="separator">/</span>
                        <span className="current">Contact</span>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="contact-info-section">
                <div className="info-cards-container">
                    {contactInfo.map((info, index) => (
                        <div className="info-card" key={index}>
                            <div className="info-icon">{info.icon}</div>
                            <h3>{info.title}</h3>
                            <div className="info-lines">
                                {info.lines.map((line, idx) => (
                                    <p key={idx}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="contact-main-section">
                <div className="contact-container">
                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <div className="form-header">
                            <span className="section-label">Send a Message</span>
                            <h2>We're Here to Help</h2>
                            <div className="title-underline"></div>
                            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                        </div>

                        {submitSuccess && (
                            <div className="success-message">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <div>
                                    <h4>Message Sent Successfully!</h4>
                                    <p>Thank you for contacting us. We'll respond within 24-48 hours.</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        Full Name <span className="required">*</span>
                                    </label>
                                    <div className="input-wrapper">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        Email Address <span className="required">*</span>
                                    </label>
                                    <div className="input-wrapper">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="youremail@example.com"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div className="input-wrapper">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inquiryType">Inquiry Type</label>
                                    <div className="input-wrapper select-wrapper">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                            <line x1="12" y1="17" x2="12.01" y2="17" />
                                        </svg>
                                        <select
                                            id="inquiryType"
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleChange}
                                        >
                                            {inquiryTypes.map(type => (
                                                <option key={type.value} value={type.value}>
                                                    {type.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">
                                    Subject <span className="required">*</span>
                                </label>
                                <div className="input-wrapper">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="4" y1="9" x2="20" y2="9" />
                                        <line x1="4" y1="15" x2="20" y2="15" />
                                        <line x1="10" y1="3" x2="8" y2="21" />
                                        <line x1="16" y1="3" x2="14" y2="21" />
                                    </svg>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">
                                    Message <span className="required">*</span>
                                </label>
                                <div className="input-wrapper textarea-wrapper">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                    </svg>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Please provide details about your inquiry..."
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-footer">
                                <p className="form-note">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="16" x2="12" y2="12" />
                                        <line x1="12" y1="8" x2="12.01" y2="8" />
                                    </svg>
                                    Fields marked with <span className="required">*</span> are required
                                </p>
                                <button 
                                    type="submit" 
                                    className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="22" y1="2" x2="11" y2="13" />
                                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Map & Quick Info */}
                    <div className="contact-sidebar">
                        <div className="map-wrapper">
                            <div className="map-container">
                                <img src={mapImage} alt="School Location Map" className="map-image" />
                                <div className="map-overlay-card">
                                    <img src={cardImage} alt="Greenfield High School" className="school-thumb" />
                                    <div className="map-card-content">
                                        <h4>Greenfield High School</h4>
                                        <p>123 Greenfield Avenue, Springfield</p>
                                        <div className="rating">
                                            <div className="stars">
                                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                            </div>
                                            <span className="rating-text">4.8 (250 reviews)</span>
                                        </div>
                                        <a 
                                            href="https://maps.google.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="directions-btn"
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polygon points="3 11 22 2 13 21 11 13 3 11" />
                                            </svg>
                                            Get Directions
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="quick-links-card">
                            <h3>Quick Links</h3>
                            <ul>
                                <li>
                                    <Link to="/admissions">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <line x1="20" y1="8" x2="20" y2="14" />
                                            <line x1="23" y1="11" x2="17" y2="11" />
                                        </svg>
                                        Apply for Admission
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/calendar">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                            <line x1="16" y1="2" x2="16" y2="6" />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                        Academic Calendar
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/fees">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="12" y1="1" x2="12" y2="23" />
                                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                        </svg>
                                        Fee Structure
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/careers">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                        </svg>
                                        Career Opportunities
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="social-card">
                            <h3>Connect With Us</h3>
                            <p>Follow us on social media for updates and news</p>
                            <div className="social-links">
                                <a href="#" className="social-link facebook" aria-label="Facebook">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                                <a href="#" className="social-link twitter" aria-label="Twitter">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                    </svg>
                                </a>
                                <a href="#" className="social-link instagram" aria-label="Instagram">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </a>
                                <a href="#" className="social-link youtube" aria-label="YouTube">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
                                    </svg>
                                </a>
                                <a href="#" className="social-link linkedin" aria-label="LinkedIn">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="faq-container">
                    <div className="section-header">
                        <span className="section-label">Common Questions</span>
                        <h2>Frequently Asked Questions</h2>
                        <div className="title-underline center"></div>
                    </div>
                    <div className="faq-grid">
                        {faqs.map((faq, index) => (
                            <div className="faq-card" key={index}>
                                <div className="faq-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                        <line x1="12" y1="17" x2="12.01" y2="17" />
                                    </svg>
                                </div>
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                    <div className="faq-cta">
                        <p>Can't find what you're looking for?</p>
                        <a href="#contact-form" className="btn-outline">
                            Ask a Question
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="contact-cta-section">
                <div className="cta-background"></div>
                <div className="cta-content">
                    <h2>Visit Our Campus</h2>
                    <p>
                        Experience Greenfield High School firsthand. Schedule a campus tour 
                        and see why we're the right choice for your child's education.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/tour" className="btn-primary">
                            <span>Schedule a Tour</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                        </Link>
                        <a href="tel:+15551234567" className="btn-secondary">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Call Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;