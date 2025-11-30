import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import heroBackgroundImage from '../images/99c76c59f98d04c461dcc6d33cdc6ef2a3e695a5.png';
import principalPhoto from '../images/aec82d96cf8f2f2ca7236259fc4793c6ebc9f8a8.png';
import facilitiesImg from '../images/6bc60e010122763e0b165f5161383a768b2efd22.png';
import locationImg from '../images/251ace58fcbf2abc54160f8f61cbfac033c07b51.png';
import historyImg from '../images/e22e0414a8622906692c452a3a2455381fd0fcfc (2).png';
import auditoriumImg from '../images/Auditorium.jpg';
import cafeteriaImg from '../images/Cafeteria.jpg';
import schoolBuildingImg from '../images/main-bulding.jpg';
import playgroundImg from '../images/playground.jpg';
import libraryImg from '../images/00cd3f1131197b61ecefa68d20aab8fb04117b8f.png';
import galleryImg1 from '../images/ae6b62296c51e9c3e8622832317244cff583e971.png';
import galleryImg2 from '../images/6649141308301bfe0d5748a97e968467424c5922.png';
import galleryImg3 from '../images/3f4ad796e4430f32ff625c7f3dfbb9de31e650cc.png';
import galleryImg4 from '../images/067274ccb85889373df836cacab863d0a33856b7.png';
import galleryImg5 from '../images/a0beca2ead5cd9a1891e67b8f03ec1f7e057fdea.png';
import galleryImg6 from '../images/43685bbbfc0d5537958bf1580dd59e4acbfeadcd.png';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const campusImages = [
        { img: auditoriumImg, title: 'Auditorium', desc: 'State-of-the-art facility for events' },
        { img: cafeteriaImg, title: 'Cafeteria', desc: 'Healthy meals in a welcoming space' },
        { img: schoolBuildingImg, title: 'Main Building', desc: 'Historic architecture since 1990' },
        { img: playgroundImg, title: 'Playground', desc: 'Safe spaces for recreation' },
        { img: libraryImg, title: 'Library', desc: 'Over 50,000 books and resources' },
    ];

    const stats = [
        { number: '30+', label: 'Years of Excellence' },
        { number: '2500+', label: 'Students Enrolled' },
        { number: '150+', label: 'Expert Faculty' },
        { number: '98%', label: 'Success Rate' },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % campusImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + campusImages.length) % campusImages.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-background" style={{ backgroundImage: `url(${heroBackgroundImage})` }}></div>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-badge">Est. 1990</div>
                    <h1 className="hero-title">
                        Welcome to<br />
                        <span>Greenfield High School</span>
                    </h1>
                    <p className="hero-subtitle">
                        Inspiring Excellence, Nurturing Creativity, Building Tomorrow's Leaders
                    </p>
                    <div className="hero-buttons">
                        <Link to="/Contact" className="btn-primary">
                            <span>Contact Us</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link to="/about" className="btn-secondary">
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className="hero-scroll-indicator">
                    <span>Scroll Down</span>
                    <div className="scroll-arrow"></div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stats-container">
                    {stats.map((stat, index) => (
                        <div className="stat-item" key={index}>
                            <span className="stat-number">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Principal's Message */}
            <section className="principal-section">
                <div className="section-container">
                    <div className="principal-grid">
                        <div className="principal-image-wrapper">
                            <div className="image-frame">
                                <img src={principalPhoto} alt="Principal" className="principal-photo" />
                            </div>
                            <div className="decorative-element"></div>
                        </div>
                        <div className="principal-content">
                            <span className="section-label">From Our Principal</span>
                            <h2 className="section-title">A Message of Welcome</h2>
                            <div className="title-underline"></div>
                            <blockquote className="principal-quote">
                                "At Greenfield High School, we are committed to providing a nurturing environment
                                where every student can discover their potential, grow in knowledge, and prepare
                                for a successful future. Our dedicated faculty and comprehensive curriculum ensure
                                that each child receives the attention and guidance they deserve."
                            </blockquote>
                            <div className="principal-signature">
                                <span className="signature-name">Dr. Sarah Mitchell</span>
                                <span className="signature-title">Principal, Greenfield High School</span>
                            </div>
                            <Link to="/about" className="btn-outline">
                                Read Full Message
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-label">Why Choose Us</span>
                        <h2 className="section-title">Explore Our School</h2>
                        <div className="title-underline center"></div>
                        <p className="section-description">
                            Discover what makes Greenfield High School the perfect place for your child's education
                        </p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <img src={facilitiesImg} alt="Facilities" />
                            </div>
                            <h3>Modern Facilities</h3>
                            <p>State-of-the-art classrooms, laboratories, sports grounds, and digital learning spaces equipped with the latest technology.</p>
                            <Link to="/facilities" className="feature-link">
                                Explore Facilities
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <img src={locationImg} alt="Location" />
                            </div>
                            <h3>Prime Location</h3>
                            <p>Located in a safe and accessible area, connected by major transport routes with ample parking facilities for parents.</p>
                            <Link to="/contact" className="feature-link">
                                Get Directions
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <img src={historyImg} alt="History" />
                            </div>
                            <h3>Rich Heritage</h3>
                            <p>A proud tradition of academic excellence spanning over 30 years, producing leaders in various fields across the globe.</p>
                            <Link to="/about" className="feature-link">
                                Our Story
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campus Tour Section */}
            <section className="campus-section">
                <div className="section-container">
                    <div className="section-header light">
                        <span className="section-label">Virtual Tour</span>
                        <h2 className="section-title">Our Campus</h2>
                        <div className="title-underline center light"></div>
                    </div>
                    <div className="campus-slider">
                        <button className="slider-btn prev" onClick={prevSlide}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <div className="slider-container">
                            <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                {campusImages.map((item, index) => (
                                    <div className="slide" key={index}>
                                        <img src={item.img} alt={item.title} />
                                        <div className="slide-overlay">
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="slider-btn next" onClick={nextSlide}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                    <div className="slider-dots">
                        {campusImages.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            ></button>
                        ))}
                    </div>
                    <div className="campus-thumbnails">
                        {campusImages.map((item, index) => (
                            <button
                                key={index}
                                className={`thumbnail ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            >
                                <img src={item.img} alt={item.title} />
                                <span>{item.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-label">Memories</span>
                        <h2 className="section-title">Photo Gallery</h2>
                        <div className="title-underline center"></div>
                        <p className="section-description">
                            Capturing moments of learning, growth, and celebration
                        </p>
                    </div>
                    <div className="gallery-grid">
                        <div className="gallery-item large">
                            <img src={galleryImg1} alt="School Event 1" />
                            <div className="gallery-overlay">
                                <span>Annual Day 2024</span>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src={galleryImg2} alt="School Event 2" />
                            <div className="gallery-overlay">
                                <span>Sports Meet</span>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src={galleryImg3} alt="School Event 3" />
                            <div className="gallery-overlay">
                                <span>Science Fair</span>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src={galleryImg4} alt="School Event 4" />
                            <div className="gallery-overlay">
                                <span>Cultural Program</span>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src={galleryImg5} alt="School Event 5" />
                            <div className="gallery-overlay">
                                <span>Graduation Day</span>
                            </div>
                        </div>
                        <div className="gallery-item large">
                            <img src={galleryImg6} alt="School Event 6" />
                            <div className="gallery-overlay">
                                <span>Independence Day</span>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-cta">
                        <Link to="/gallery" className="btn-primary">
                            <span>View Full Gallery</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-background"></div>
                <div className="cta-content">
                    <h2>Begin Your Journey With Us</h2>
                    <p>Admissions are now open for the academic year 2024-25</p>
                    <div className="cta-buttons">
                        <Link to="/admissions" className="btn-white">Apply Now</Link>
                        <Link to="/contact" className="btn-outline-white">Schedule a Visit</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;