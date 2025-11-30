import React, { useState } from 'react';
import './Gallery.css';

// Images
import img1 from '../images/image01.png';
import img2 from '../images/image02.png';
import img3 from '../images/image03.png';
import img4 from '../images/image04.png';
import img5 from '../images/image05.png';
import img6 from '../images/image06.png';
import img7 from '../images/Gemini_Generated_Image_4s1fa04s1fa04s1f.png';
import img8 from '../images/Gemini_Generated_Image_d1izzud1izzud1iz (5).png';
import img9 from '../images/Gemini_Generated_Image_4s1fa04s1fa04s1f (1).png';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');

    const galleryImages = [
        { id: 1, src: img1, title: 'Science Exhibition', category: 'events', year: '2024' },
        { id: 2, src: img2, title: 'Sports Championship', category: 'sports', year: '2024' },
        { id: 3, src: img3, title: 'School Play/Musical', category: 'events', year: '2023' },
        { id: 4, src: img4, title: 'Art Workshop', category: 'events', year: '2023' },
        { id: 5, src: img5, title: 'Library Week', category: 'academic', year: '2024' },
        { id: 6, src: img6, title: 'Cultural Day', category: 'academic', year: '2023' },
        { id: 7, src: img7, title: 'Field Trip', category: 'academic', year: '2024' },
        { id: 8, src: img8, title: 'Talent Show', category: 'events', year: '2023' },
        { id: 9, src: img9, title: 'Graduation Ceremony', category: 'academic', year: '2024' },
    ];

    const filters = [
        { id: 'all', label: 'All Photos' },
        { id: 'events', label: 'Events' },
        { id: 'academic', label: 'Academic' },
        { id: 'sports', label: 'Sports' },
    ];

    const filteredImages = activeFilter === 'all' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === activeFilter);

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const navigateImage = (direction) => {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        let newIndex;
        
        if (direction === 'next') {
            newIndex = (currentIndex + 1) % filteredImages.length;
        } else {
            newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        }
        
        setSelectedImage(filteredImages[newIndex]);
    };

    return (
        <div className="gallery-page">
            {/* Hero Banner */}
            <section className="gallery-hero">
                <div className="gallery-hero-overlay"></div>
                <div className="gallery-hero-content">
                    <span className="gallery-badge">Our Memories</span>
                    <h1>Photo Gallery</h1>
                    <p>Capturing moments of learning, growth, and celebration at Greenfield High School</p>
                    <div className="breadcrumb">
                        <a href="/">Home</a>
                        <span className="separator">/</span>
                        <span className="current">Gallery</span>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery-main">
                <div className="gallery-container">
                    {/* Section Header */}
                    <div className="gallery-header">
                        <div className="header-text">
                            <span className="section-label">Explore</span>
                            <h2>School Events & Activities</h2>
                            <div className="title-underline"></div>
                        </div>
                        
                        {/* Filter Buttons */}
                        <div className="gallery-filters">
                            {filters.map(filter => (
                                <button
                                    key={filter.id}
                                    className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(filter.id)}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="gallery-grid">
                        {filteredImages.map((image, index) => (
                            <div 
                                key={image.id} 
                                className={`gallery-item ${index === 0 || index === 5 ? 'large' : ''}`}
                                onClick={() => openLightbox(image)}
                            >
                                <img src={image.src} alt={image.title} loading="lazy" />
                                <div className="gallery-item-overlay">
                                    <div className="overlay-content">
                                        <span className="item-category">{image.category}</span>
                                        <h3>{image.title}</h3>
                                        <span className="item-year">{image.year}</span>
                                    </div>
                                    <div className="zoom-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="11" cy="11" r="8" />
                                            <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="gallery-load-more">
                        <button className="btn-load-more">
                            <span>Load More Photos</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 5v14M5 12l7 7 7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="gallery-stats">
                <div className="stats-container">
                    <div className="stat-box">
                        <span className="stat-icon">📸</span>
                        <span className="stat-number">500+</span>
                        <span className="stat-text">Photos</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-icon">🎉</span>
                        <span className="stat-number">50+</span>
                        <span className="stat-text">Events</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-icon">🏆</span>
                        <span className="stat-number">30+</span>
                        <span className="stat-text">Achievements</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-icon">📅</span>
                        <span className="stat-number">10+</span>
                        <span className="stat-text">Years of Memories</span>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="gallery-cta">
                <div className="cta-content">
                    <h2>Want to See More?</h2>
                    <p>Follow us on social media for the latest updates and photos from school events</p>
                    <div className="social-buttons">
                        <a href="#" className="social-btn facebook">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                            Facebook
                        </a>
                        <a href="#" className="social-btn instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                            Instagram
                        </a>
                        <a href="#" className="social-btn youtube">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
                            </svg>
                            YouTube
                        </a>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        
                        <button className="lightbox-nav prev" onClick={() => navigateImage('prev')}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        
                        <div className="lightbox-image-container">
                            <img src={selectedImage.src} alt={selectedImage.title} />
                            <div className="lightbox-info">
                                <h3>{selectedImage.title}</h3>
                                <div className="lightbox-meta">
                                    <span className="meta-category">{selectedImage.category}</span>
                                    <span className="meta-year">{selectedImage.year}</span>
                                </div>
                            </div>
                        </div>
                        
                        <button className="lightbox-nav next" onClick={() => navigateImage('next')}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;