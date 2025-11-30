import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

// Images
import heroBg from '../images/99c76c59f98d04c461dcc6d33cdc6ef2a3e695a5.png';
import blogCardImg1 from '../images/a85de816b007f850bb19d6ccc9c71f1b7e5e4e72.jpg';
import blogCardImg2 from '../images/9efe4a4ca2cd8b61986457572fa7c65fe425adc6.png';
import blogCardImg3 from '../images/ba95afe00263cf29d3813271a98b2247489be42e.png';
import largeBlogImg from '../images/6bf5d2c8225856fab5b73476de8cf3f219c933cb.jpg';
import blogCardImg4 from '../images/66acaf5315268a4da64ef2cd2f6fb6470d00f5a0.jpg';

function Blogs() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { id: 'all', label: 'All Posts' },
        { id: 'news', label: 'School News' },
        { id: 'academics', label: 'Academics' },
        { id: 'events', label: 'Events' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'tips', label: 'Tips & Advice' }
    ];

    const featuredPost = {
        id: 1,
        title: 'Home-Based Teaching at Greenfield High School',
        excerpt: 'Greenfield High School successfully implemented home-based teaching strategies to ensure continuous learning during times when on-campus classes were not possible. Our teachers designed interactive and engaging lessons that kept students motivated and supported their academic growth. The initiative has been recognized as a model for other institutions.',
        image: largeBlogImg,
        category: 'news',
        author: 'Dr. Sarah Mitchell',
        authorRole: 'Principal',
        date: 'December 15, 2024',
        readTime: '8 min read'
    };

    const blogPosts = [
        {
            id: 2,
            title: 'Home-Based Learning Activities 2024',
            excerpt: 'Learn about how Greenfield High School adapted to remote learning and kept students engaged during challenging times with innovative approaches.',
            image: blogCardImg1,
            category: 'academics',
            author: 'Emily Johnson',
            date: 'December 10, 2024',
            readTime: '5 min read'
        },
        {
            id: 3,
            title: 'At-Home Learning Activities',
            excerpt: 'Explore our innovative approaches to home-based learning that allowed students to continue their education effectively and enjoyably.',
            image: blogCardImg2,
            category: 'tips',
            author: 'Michael Brown',
            date: 'December 8, 2024',
            readTime: '4 min read'
        },
        {
            id: 4,
            title: 'Learning from Home Guide',
            excerpt: 'Insights into our programs and strategies to ensure students remained active and motivated while learning remotely.',
            image: blogCardImg3,
            category: 'tips',
            author: 'Sarah Williams',
            date: 'December 5, 2024',
            readTime: '6 min read'
        },
        {
            id: 5,
            title: 'Annual Science Fair Success',
            excerpt: 'Our students showcased exceptional projects at this year\'s science fair, with three projects winning regional recognition.',
            image: blogCardImg4,
            category: 'achievements',
            author: 'David Wilson',
            date: 'December 1, 2024',
            readTime: '4 min read'
        },
        {
            id: 6,
            title: 'Sports Championship Victory',
            excerpt: 'Greenfield High School\'s basketball team brings home the championship trophy after an incredible season.',
            image: blogCardImg1,
            category: 'achievements',
            author: 'James Anderson',
            date: 'November 28, 2024',
            readTime: '3 min read'
        },
        {
            id: 7,
            title: 'New Computer Lab Inauguration',
            excerpt: 'State-of-the-art computer lab with 50 new workstations opens for students, enhancing our digital learning capabilities.',
            image: blogCardImg2,
            category: 'news',
            author: 'Olivia Martinez',
            date: 'November 25, 2024',
            readTime: '4 min read'
        },
        {
            id: 8,
            title: 'Parent-Teacher Conference Tips',
            excerpt: 'Make the most of upcoming parent-teacher conferences with these helpful tips and preparation strategies.',
            image: blogCardImg3,
            category: 'tips',
            author: 'Sophia Davis',
            date: 'November 20, 2024',
            readTime: '5 min read'
        },
        {
            id: 9,
            title: 'Winter Cultural Festival Announced',
            excerpt: 'Join us for our annual winter cultural festival featuring performances, exhibitions, and celebrations from around the world.',
            image: blogCardImg4,
            category: 'events',
            author: 'Daniel Thomas',
            date: 'November 15, 2024',
            readTime: '3 min read'
        }
    ];

    const recentTags = [
        'Remote Learning',
        'Science Fair',
        'Sports',
        'Technology',
        'Arts & Culture',
        'Parent Resources',
        'Student Life',
        'Announcements'
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="blogs-page">
            {/* Hero Section */}
            <section className="blogs-hero">
                <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }}></div>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <span className="hero-badge">Stay Updated</span>
                    <h1>News & Blog</h1>
                    <p>Latest news, updates, and stories from Greenfield High School</p>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span className="separator">/</span>
                        <span className="current">Blog</span>
                    </div>
                </div>
            </section>

            {/* Featured Post Section */}
            <section className="featured-section">
                <div className="featured-container">
                    <div className="featured-label">
                        <span className="label-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                        </span>
                        Featured Story
                    </div>
                    <div className="featured-post">
                        <div className="featured-image">
                            <img src={featuredPost.image} alt={featuredPost.title} />
                            <span className="featured-category">{featuredPost.category}</span>
                        </div>
                        <div className="featured-content">
                            <div className="post-meta">
                                <span className="post-date">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    {featuredPost.date}
                                </span>
                                <span className="post-read-time">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    {featuredPost.readTime}
                                </span>
                            </div>
                            <h2>{featuredPost.title}</h2>
                            <p>{featuredPost.excerpt}</p>
                            <div className="featured-footer">
                                <div className="author-info">
                                    <div className="author-avatar">
                                        {featuredPost.author.charAt(0)}
                                    </div>
                                    <div className="author-details">
                                        <span className="author-name">{featuredPost.author}</span>
                                        <span className="author-role">{featuredPost.authorRole}</span>
                                    </div>
                                </div>
                                <Link to={`/blog/${featuredPost.id}`} className="read-more-btn">
                                    Read Full Article
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Blog Section */}
            <section className="blogs-main-section">
                <div className="blogs-container">
                    {/* Sidebar */}
                    <aside className="blogs-sidebar">
                        {/* Search */}
                        <div className="sidebar-card search-card">
                            <h3>Search</h3>
                            <div className="search-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="M21 21l-4.35-4.35" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="sidebar-card categories-card">
                            <h3>Categories</h3>
                            <ul className="category-list">
                                {categories.map(category => (
                                    <li key={category.id}>
                                        <button
                                            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                                            onClick={() => setActiveCategory(category.id)}
                                        >
                                            <span className="category-name">{category.label}</span>
                                            <span className="category-count">
                                                {category.id === 'all' 
                                                    ? blogPosts.length 
                                                    : blogPosts.filter(p => p.category === category.id).length
                                                }
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Popular Tags */}
                        <div className="sidebar-card tags-card">
                            <h3>Popular Tags</h3>
                            <div className="tags-cloud">
                                {recentTags.map((tag, index) => (
                                    <button key={index} className="tag-btn">
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="sidebar-card newsletter-card">
                            <div className="newsletter-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <h3>Subscribe to Newsletter</h3>
                            <p>Get the latest updates delivered to your inbox</p>
                            <form className="newsletter-form">
                                <input type="email" placeholder="Your email address" />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </aside>

                    {/* Blog Posts Grid */}
                    <div className="blogs-content">
                        <div className="content-header">
                            <h2>
                                {activeCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === activeCategory)?.label}
                            </h2>
                            <p className="results-count">
                                Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                            </p>
                        </div>

                        {filteredPosts.length > 0 ? (
                            <div className="blog-grid">
                                {filteredPosts.map((post, index) => (
                                    <article 
                                        className="blog-card" 
                                        key={post.id}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="card-image">
                                            <img src={post.image} alt={post.title} />
                                            <span className="card-category">{post.category}</span>
                                            <div className="card-overlay">
                                                <Link to={`/blog/${post.id}`} className="overlay-btn">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <div className="card-meta">
                                                <span className="meta-date">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                        <line x1="16" y1="2" x2="16" y2="6" />
                                                        <line x1="8" y1="2" x2="8" y2="6" />
                                                        <line x1="3" y1="10" x2="21" y2="10" />
                                                    </svg>
                                                    {post.date}
                                                </span>
                                                <span className="meta-time">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <circle cx="12" cy="12" r="10" />
                                                        <polyline points="12 6 12 12 16 14" />
                                                    </svg>
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <h3>
                                                <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                            </h3>
                                            <p>{post.excerpt}</p>
                                            <div className="card-footer">
                                                <div className="author">
                                                    <div className="author-avatar small">
                                                        {post.author.charAt(0)}
                                                    </div>
                                                    <span>{post.author}</span>
                                                </div>
                                                <Link to={`/blog/${post.id}`} className="read-link">
                                                    Read More
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="no-results">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="M21 21l-4.35-4.35" />
                                    <line x1="8" y1="11" x2="14" y2="11" />
                                </svg>
                                <h3>No Articles Found</h3>
                                <p>Try adjusting your search or filter criteria</p>
                                <button 
                                    className="reset-btn"
                                    onClick={() => {
                                        setSearchTerm('');
                                        setActiveCategory('all');
                                    }}
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}

                        {/* Pagination */}
                        {filteredPosts.length > 0 && (
                            <div className="pagination">
                                <button className="page-btn prev" disabled>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                    Previous
                                </button>
                                <div className="page-numbers">
                                    <button className="page-num active">1</button>
                                    <button className="page-num">2</button>
                                    <button className="page-num">3</button>
                                    <span className="page-dots">...</span>
                                    <button className="page-num">8</button>
                                </div>
                                <button className="page-btn next">
                                    Next
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="blogs-cta-section">
                <div className="cta-background"></div>
                <div className="cta-content">
                    <h2>Have a Story to Share?</h2>
                    <p>
                        We welcome contributions from students, parents, and faculty. 
                        Share your experiences and insights with our community.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/submit-story" className="btn-primary">
                            <span>Submit Your Story</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                        </Link>
                        <Link to="/contact" className="btn-secondary">Contact Editorial Team</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Blogs;