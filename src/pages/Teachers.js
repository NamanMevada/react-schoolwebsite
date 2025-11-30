import React, { useState, useMemo } from 'react';
import './Teachers.css';

// Hero image
import heroImage from '../images/99c76c59f98d04c461dcc6d33cdc6ef2a3e695a5.png';

// Teacher data
const teachers = [
    {
        name: 'John Smith',
        id: 'EMP001',
        subject: 'Mathematics',
        qualification: 'M.Sc. Mathematics, B.Ed',
        experience: '15 Years',
        email: 'john.smith@greenfield.edu',
        image: require('../images/03021c1508a6df32dfa0dc2d23d774b8aa5581f8.jpg'),
        department: 'science'
    },
    {
        name: 'Emily Johnson',
        id: 'EMP002',
        subject: 'Science',
        qualification: 'Ph.D. Physics',
        experience: '12 Years',
        email: 'emily.johnson@greenfield.edu',
        image: require('../images/7fe840666469b87699be114c7e2d3d899c7f2571.jpg'),
        department: 'science'
    },
    {
        name: 'Michael Brown',
        id: 'EMP003',
        subject: 'English',
        qualification: 'M.A. English Literature',
        experience: '10 Years',
        email: 'michael.brown@greenfield.edu',
        image: require('../images/c2bcc5d4bcdb6cebe60a5184c36d701215594e3e.jpg'),
        department: 'humanities'
    },
    {
        name: 'Sarah Williams',
        id: 'EMP004',
        subject: 'History',
        qualification: 'M.A. History, B.Ed',
        experience: '8 Years',
        email: 'sarah.williams@greenfield.edu',
        image: require('../images/d99b364dbce05cad2466847a1f0adcefffad4a9e.jpg'),
        department: 'humanities'
    },
    {
        name: 'David Wilson',
        id: 'EMP005',
        subject: 'Geography',
        qualification: 'M.Sc. Geography',
        experience: '11 Years',
        email: 'david.wilson@greenfield.edu',
        image: require('../images/0c7ed9f52e27db47fb55221bc8166938685834d8.jpg'),
        department: 'humanities'
    },
    {
        name: 'Olivia Martinez',
        id: 'EMP006',
        subject: 'Computer Science',
        qualification: 'M.Tech Computer Science',
        experience: '7 Years',
        email: 'olivia.martinez@greenfield.edu',
        image: require('../images/e230df68458739f97fd748b512f30e72718ac04b.jpg'),
        department: 'science'
    },
    {
        name: 'James Anderson',
        id: 'EMP007',
        subject: 'Physical Education',
        qualification: 'M.P.Ed',
        experience: '9 Years',
        email: 'james.anderson@greenfield.edu',
        image: require('../images/e3c63927ea078034299232019537fd5b47178779.jpg'),
        department: 'sports'
    },
    {
        name: 'Sophia Davis',
        id: 'EMP008',
        subject: 'Art & Design',
        qualification: 'M.F.A. Fine Arts',
        experience: '6 Years',
        email: 'sophia.davis@greenfield.edu',
        image: require('../images/890bb7e06d43771d98ef99ea4fe1448c96fbb9ad.jpg'),
        department: 'arts'
    },
    {
        name: 'Daniel Thomas',
        id: 'EMP009',
        subject: 'Music',
        qualification: 'M.A. Music',
        experience: '14 Years',
        email: 'daniel.thomas@greenfield.edu',
        image: require('../images/a27bb91afb0ec304610b4834f08a60cec93a7a06.jpg'),
        department: 'arts'
    },
];

const Teachers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedTeacher, setSelectedTeacher] = useState(null);

    const filters = [
        { id: 'all', label: 'All Faculty' },
        { id: 'science', label: 'Science & Math' },
        { id: 'humanities', label: 'Humanities' },
        { id: 'arts', label: 'Arts & Music' },
        { id: 'sports', label: 'Sports' },
    ];

    const filteredTeachers = useMemo(() => {
        return teachers.filter(teacher => {
            const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                teacher.subject.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = activeFilter === 'all' || teacher.department === activeFilter;
            return matchesSearch && matchesFilter;
        });
    }, [searchTerm, activeFilter]);

    const openModal = (teacher) => {
        setSelectedTeacher(teacher);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedTeacher(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="teachers-page">
            {/* Hero Section */}
            <section className="teachers-hero">
                <div 
                    className="hero-background" 
                    style={{ backgroundImage: `url(${heroImage})` }}
                ></div>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <span className="hero-badge">Our Team</span>
                    <h1>Meet Our Faculty</h1>
                    <p>Dedicated educators committed to nurturing young minds and inspiring excellence</p>
                    <div className="breadcrumb">
                        <a href="/">Home</a>
                        <span className="separator">/</span>
                        <span className="current">Faculty</span>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="faculty-stats">
                <div className="stats-wrapper">
                    <div className="stat-item">
                        <span className="stat-number">150+</span>
                        <span className="stat-label">Expert Teachers</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">95%</span>
                        <span className="stat-label">Post Graduate</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Avg. Experience</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">20+</span>
                        <span className="stat-label">Departments</span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="teachers-main">
                <div className="teachers-container">
                    {/* Section Header */}
                    <div className="section-header">
                        <div className="header-text">
                            <span className="section-label">Excellence in Teaching</span>
                            <h2>Our Distinguished Faculty</h2>
                            <div className="title-underline"></div>
                            <p className="section-description">
                                Our teachers bring passion, expertise, and dedication to every classroom, 
                                ensuring each student receives personalized attention and guidance.
                            </p>
                        </div>
                    </div>

                    {/* Search and Filter */}
                    <div className="search-filter-container">
                        <div className="search-box">
                            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search by name or subject..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                            {searchTerm && (
                                <button 
                                    className="clear-search"
                                    onClick={() => setSearchTerm('')}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            )}
                        </div>

                        <div className="filter-buttons">
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

                    {/* Results Count */}
                    <div className="results-info">
                        <span>Showing {filteredTeachers.length} of {teachers.length} faculty members</span>
                    </div>

                    {/* Teachers Grid */}
                    <div className="teachers-grid">
                        {filteredTeachers.length > 0 ? (
                            filteredTeachers.map((teacher, index) => (
                                <div 
                                    className="teacher-card" 
                                    key={teacher.id}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="card-image">
                                        <img src={teacher.image} alt={teacher.name} />
                                        <div className="card-overlay">
                                            <button 
                                                className="view-profile-btn"
                                                onClick={() => openModal(teacher)}
                                            >
                                                View Profile
                                            </button>
                                        </div>
                                        <span className="department-badge">{teacher.department}</span>
                                    </div>
                                    <div className="card-content">
                                        <h3 className="teacher-name">{teacher.name}</h3>
                                        <p className="teacher-subject">{teacher.subject}</p>
                                        <div className="teacher-meta">
                                            <div className="meta-item">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                                </svg>
                                                <span>{teacher.qualification.split(',')[0]}</span>
                                            </div>
                                            <div className="meta-item">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <polyline points="12 6 12 12 16 14" />
                                                </svg>
                                                <span>{teacher.experience}</span>
                                            </div>
                                        </div>
                                        <div className="card-actions">
                                            <a href={`mailto:${teacher.email}`} className="email-btn">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                    <polyline points="22,6 12,13 2,6" />
                                                </svg>
                                                Contact
                                            </a>
                                            <button 
                                                className="profile-btn"
                                                onClick={() => openModal(teacher)}
                                            >
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                    <circle cx="12" cy="7" r="4" />
                                                </svg>
                                                Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-results">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="M21 21l-4.35-4.35" />
                                    <line x1="8" y1="11" x2="14" y2="11" />
                                </svg>
                                <h3>No Teachers Found</h3>
                                <p>Try adjusting your search or filter criteria</p>
                                <button 
                                    className="reset-btn"
                                    onClick={() => {
                                        setSearchTerm('');
                                        setActiveFilter('all');
                                    }}
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Join Our Team CTA */}
            <section className="join-team-section">
                <div className="join-content">
                    <div className="join-text">
                        <span className="section-label light">Careers</span>
                        <h2>Join Our Teaching Family</h2>
                        <p>
                            We're always looking for passionate educators who want to make a difference. 
                            Explore current openings and become part of our dedicated team.
                        </p>
                    </div>
                    <div className="join-actions">
                        <a href="/careers" className="btn-primary">
                            <span>View Openings</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="/contact" className="btn-secondary">Contact HR</a>
                    </div>
                </div>
            </section>

            {/* Teacher Profile Modal */}
            {selectedTeacher && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        
                        <div className="modal-body">
                            <div className="modal-image">
                                <img src={selectedTeacher.image} alt={selectedTeacher.name} />
                                <span className="modal-badge">{selectedTeacher.department}</span>
                            </div>
                            
                            <div className="modal-info">
                                <h2>{selectedTeacher.name}</h2>
                                <p className="modal-subject">{selectedTeacher.subject} Teacher</p>
                                
                                <div className="modal-details">
                                    <div className="detail-row">
                                        <span className="detail-label">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                            </svg>
                                            Employee ID
                                        </span>
                                        <span className="detail-value">{selectedTeacher.id}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="detail-label">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                                <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                            </svg>
                                            Qualification
                                        </span>
                                        <span className="detail-value">{selectedTeacher.qualification}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="detail-label">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            Experience
                                        </span>
                                        <span className="detail-value">{selectedTeacher.experience}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="detail-label">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                <polyline points="22,6 12,13 2,6" />
                                            </svg>
                                            Email
                                        </span>
                                        <span className="detail-value">{selectedTeacher.email}</span>
                                    </div>
                                </div>

                                <div className="modal-bio">
                                    <h4>About</h4>
                                    <p>
                                        {selectedTeacher.name} is a dedicated {selectedTeacher.subject} teacher 
                                        with {selectedTeacher.experience} of experience in education. 
                                        With a strong academic background ({selectedTeacher.qualification}), 
                                        they bring passion and expertise to every classroom session.
                                    </p>
                                </div>

                                <div className="modal-actions">
                                    <a href={`mailto:${selectedTeacher.email}`} className="btn-primary">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                        Send Email
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Teachers;