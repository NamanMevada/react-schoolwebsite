import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

// Images
import bgImage from '../images/99c76c59f98d04c461dcc6d33cdc6ef2a3e695a5.png';
import logo from '../images/f18bb1a121031efe83e28fa04d8ec90b84886968.png';
import principalPhoto from '../images/aec82d96cf8f2f2ca7236259fc4793c6ebc9f8a8.png';

function About() {
    const milestones = [
        { year: '1990', title: 'Foundation', description: 'Greenfield High School was established with a vision to provide quality education.' },
        { year: '1995', title: 'First Expansion', description: 'Added new science laboratories and library facilities.' },
        { year: '2002', title: 'Sports Complex', description: 'Inaugurated state-of-the-art sports complex and swimming pool.' },
        { year: '2010', title: 'Digital Initiative', description: 'Launched smart classrooms and computer labs across all grades.' },
        { year: '2018', title: 'Excellence Award', description: 'Received National Award for Excellence in Education.' },
        { year: '2024', title: 'New Campus', description: 'Opened new wing with modern facilities and auditorium.' },
    ];

    const values = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
            ),
            title: 'Academic Excellence',
            description: 'We strive for the highest standards in education, encouraging intellectual curiosity and critical thinking.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: 'Inclusive Community',
            description: 'We celebrate diversity and create a welcoming environment where every student feels valued and respected.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ),
            title: 'Character Building',
            description: 'We focus on developing integrity, responsibility, and ethical behavior in all our students.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
            ),
            title: 'Holistic Development',
            description: 'We nurture the physical, emotional, and social well-being alongside academic growth.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
            ),
            title: 'Innovation',
            description: 'We embrace new teaching methods and technologies to prepare students for the future.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
            ),
            title: 'Lifelong Learning',
            description: 'We instill a passion for continuous learning that extends beyond the classroom.'
        },
    ];

    const leadership = [
        {
            name: 'Dr. Robert Anderson',
            position: 'Chairman',
            image: principalPhoto,
            description: 'Leading the board with 25 years of experience in education management.'
        },
        {
            name: 'Dr. Sarah Mitchell',
            position: 'Principal',
            image: principalPhoto,
            description: 'Dedicated to academic excellence and student welfare for over 15 years.'
        },
        {
            name: 'Mr. James Wilson',
            position: 'Vice Principal',
            image: principalPhoto,
            description: 'Overseeing academic programs and curriculum development.'
        },
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-background" style={{ backgroundImage: `url(${bgImage})` }}></div>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <span className="hero-badge">Est. 1990</span>
                    <h1>About Greenfield High School</h1>
                    <p>Inspiring Excellence, Nurturing Creativity, Building Tomorrow's Leaders for Over 30 Years</p>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span className="separator">/</span>
                        <span className="current">About Us</span>
                    </div>
                </div>
            </section>

            {/* Announcement Banner */}
            <section className="announcement-section">
                <div className="announcement-container">
                    <div className="announcement-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                    </div>
                    <div className="announcement-content">
                        <h3>Important Announcement</h3>
                        <p>
                            Welcome new students of Greenfield High School, Academic Year 2024–2025! 
                            Registration is now open.
                        </p>
                        <div className="announcement-dates">
                            <div className="date-item">
                                <span className="date-label">General Admission</span>
                                <span className="date-value">June 28 – July 2, 2024</span>
                            </div>
                            <div className="date-item">
                                <span className="date-label">Zoning Admission</span>
                                <span className="date-value">July 5 – July 9, 2024</span>
                            </div>
                        </div>
                    </div>
                    <Link to="/admissions" className="announcement-btn">
                        Apply Now
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="story-section">
                <div className="section-container">
                    <div className="story-grid">
                        <div className="story-image">
                            <div className="image-wrapper">
                                <img src={bgImage} alt="School Campus" />
                                <div className="experience-badge">
                                    <span className="years">30+</span>
                                    <span className="text">Years of Excellence</span>
                                </div>
                            </div>
                        </div>
                        <div className="story-content">
                            <span className="section-label">Our Story</span>
                            <h2>A Legacy of Excellence in Education</h2>
                            <div className="title-underline"></div>
                            <p>
                                Founded in 1990, Greenfield High School began with a simple yet powerful vision: 
                                to provide quality education that nurtures not just academic excellence, but also 
                                character, creativity, and compassion in every student.
                            </p>
                            <p>
                                Over the past three decades, we have grown from a small institution with just 
                                150 students to a thriving educational community of over 2,500 students. Our 
                                alumni have gone on to become leaders in various fields across the globe, 
                                carrying with them the values and knowledge instilled during their time here.
                            </p>
                            <p>
                                Today, Greenfield High School stands as a beacon of educational excellence, 
                                combining traditional values with modern teaching methodologies to prepare 
                                students for the challenges of tomorrow.
                            </p>
                            <div className="story-stats">
                                <div className="stat">
                                    <span className="stat-number">2500+</span>
                                    <span className="stat-label">Students</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">150+</span>
                                    <span className="stat-label">Faculty</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">15000+</span>
                                    <span className="stat-label">Alumni</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-vision-section">
                <div className="section-container">
                    <div className="mv-grid">
                        <div className="mv-card mission">
                            <div className="mv-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="12" r="6" />
                                    <circle cx="12" cy="12" r="2" />
                                </svg>
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To provide a comprehensive, student-centered education that develops 
                                intellectual curiosity, critical thinking skills, and a lifelong love 
                                of learning while fostering character development and social responsibility.
                            </p>
                        </div>
                        <div className="mv-card vision">
                            <div className="mv-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To be a leading educational institution recognized for academic excellence, 
                                innovative teaching practices, and producing well-rounded individuals who 
                                contribute positively to society and lead with integrity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="values-section">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-label">What We Stand For</span>
                        <h2>Our Core Values</h2>
                        <div className="title-underline center"></div>
                        <p className="section-description">
                            These principles guide everything we do at Greenfield High School
                        </p>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div className="value-card" key={index}>
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="timeline-section">
                <div className="section-container">
                    <div className="section-header light">
                        <span className="section-label">Our Journey</span>
                        <h2>Milestones & Achievements</h2>
                        <div className="title-underline center light"></div>
                    </div>
                    <div className="timeline">
                        {milestones.map((milestone, index) => (
                            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                                <div className="timeline-content">
                                    <span className="timeline-year">{milestone.year}</span>
                                    <h3>{milestone.title}</h3>
                                    <p>{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                        <div className="timeline-line"></div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="leadership-section">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-label">Meet Our Team</span>
                        <h2>School Leadership</h2>
                        <div className="title-underline center"></div>
                        <p className="section-description">
                            Dedicated professionals committed to educational excellence
                        </p>
                    </div>
                    <div className="leadership-grid">
                        {leadership.map((leader, index) => (
                            <div className="leader-card" key={index}>
                                <div className="leader-image">
                                    <img src={leader.image} alt={leader.name} />
                                </div>
                                <div className="leader-info">
                                    <h3>{leader.name}</h3>
                                    <span className="leader-position">{leader.position}</span>
                                    <p>{leader.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="leadership-cta">
                        <Link to="/teachers" className="btn-outline">
                            View All Faculty
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Accreditations Section */}
            <section className="accreditations-section">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-label">Recognition</span>
                        <h2>Accreditations & Affiliations</h2>
                        <div className="title-underline center"></div>
                    </div>
                    <div className="accreditations-grid">
                        <div className="accreditation-card">
                            <div className="acc-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="8" r="7" />
                                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                                </svg>
                            </div>
                            <h4>CBSE Affiliated</h4>
                            <p>Recognized by Central Board of Secondary Education</p>
                        </div>
                        <div className="accreditation-card">
                            <div className="acc-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <h4>ISO 9001:2015</h4>
                            <p>Certified for Quality Management System</p>
                        </div>
                        <div className="accreditation-card">
                            <div className="acc-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                            </div>
                            <h4>A+ Grade</h4>
                            <p>Rated A+ by National Education Assessment</p>
                        </div>
                        <div className="accreditation-card">
                            <div className="acc-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                            </div>
                            <h4>Safe School</h4>
                            <p>Certified Safe Campus by Safety Council</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta-section">
                <div className="cta-background"></div>
                <div className="cta-content">
                    <h2>Ready to Join Our Family?</h2>
                    <p>
                        Take the first step towards a bright future. Schedule a campus visit 
                        or apply for admission today.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/admissions" className="btn-primary">
                            <span>Apply Now</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link to="/contact" className="btn-secondary">Schedule a Visit</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;