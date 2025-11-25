// styles object definition (moved up to ensure scope)
const styles = {
    cardContainer: {
        // Fix 🛠️: width 100% to take full width of its parent container
        width: '100%', 
        // Fix 🛠️: margin '20px 0' to remove extra space on the left/right
        margin: '20px 0', 
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        backgroundColor: '#fff',
        fontFamily: 'Arial, sans-serif',
        padding: '15px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
    },
    authorInfo: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '10px',
    },
    authorText: {
        display: 'flex',
        flexDirection: 'column',
    },
    authorName: {
        fontWeight: 'bold',
        fontSize: '0.9em',
        color: '#333',
    },
    date: {
        fontSize: '0.8em',
        color: '#666',
    },
    icons: {
        fontSize: '1.2em',
        color: '#888',
    },
    icon: {
        marginLeft: '10px',
    },
    title: {
        fontSize: '1.4em',
        fontWeight: '900',
        lineHeight: '1.3',
        margin: '10px 0',
        color: '#333',
    },
    imageWrapper: {
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '15px',
    },
    mainImage: {
        width: '100%',
        height: 'auto',
        display: 'block',
    },
    detailsSection: {
        marginBottom: '15px',
    },
    metaLine: {
        fontSize: '0.75em',
        color: '#777',
        lineHeight: '1.4',
        marginBottom: '8px',
    },
    snippet: {
        fontSize: '0.9em',
        color: '#555',
        lineHeight: '1.5',
        marginBottom: '5px',
    },
    readMore: {
        color: '#e74c3c',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '0.9em',
        display: 'inline-block',
        marginTop: '5px',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '10px',
        borderTop: '1px solid #eee',
    },
    rating: {
        display: 'flex',
        alignItems: 'center',
    },
    ratingNumber: {
        marginLeft: '5px',
        fontSize: '0.9em',
        color: '#666',
    },
    views: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.9em',
        color: '#666',
    }
};

// NewsCard Component
import React from 'react';

const NewsCard = ({ news }) => {
    // Helper function to format the date from 'YYYY-MM-DDTHH:mm:ss.000Z'
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        // Format as 'MM-DD-YYYY' 
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).replace(/\//g, '-'); 
    };

    // Rating star component for display
    const renderStars = (rating) => {
        const maxRating = 5;
        const stars = [];
        for (let i = 1; i <= maxRating; i++) {
            stars.push(
                <span key={i} style={{ color: i <= rating ? '#ffc107' : '#e4e5e9', fontSize: '1.2em' }}>
                    ★
                </span>
            );
        }
        return stars;
    };

    // Assuming a 'news' prop with 'author', 'rating', 'total_view', 'tags', etc.
    const publishedDate = news.author?.published_date ? formatDate(news.author.published_date) : 'Date Unknown';
    const displayedRating = news.rating?.number || 0;

    return (
        <div style={styles.cardContainer}>
            {/* Header Section */}
            <div style={styles.header}>
                <div style={styles.authorInfo}>
                    <img
                        src={news.author?.img || 'default-avatar.jpg'}
                        alt={news.author?.name}
                        style={styles.avatar}
                    />
                    <div style={styles.authorText}>
                        <span style={styles.authorName}>{news.author?.name}</span>
                        <span style={styles.date}>{publishedDate}</span>
                    </div>
                </div>
                <div style={styles.icons}>
                    {/* Placeholder for Bookmark/Share Icons */}
                    <span style={styles.icon}>&#9734;</span> 
                    <span style={styles.icon}>&#x22ee;</span> 
                </div>
            </div>

            {/* Title Section */}
            <h2 style={styles.title}>{news.title}</h2>

            {/* Image Section */}
            <div style={styles.imageWrapper}>
                <img
                    src={news.image_url}
                    alt={news.title}
                    style={styles.mainImage}
                />
            </div>

            {/* Details/Snippet Section */}
            <div style={styles.detailsSection}>
                <p style={styles.metaLine}>
                    {new Date(news.author?.published_date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })} | Tag Cloud Tags: {news.tags?.join(', ') || 'No Tags'}
                </p>
                <p style={styles.snippet}>
                    {news.details?.substring(0, 150) + '...' || 'No details available.'}
                </p>
                <a href="#" style={styles.readMore}>Read More</a>
            </div>

            {/* Footer Section */}
            <div style={styles.footer}>
                <div style={styles.rating}>
                    {renderStars(displayedRating)}
                    <span style={styles.ratingNumber}>{displayedRating}.0</span>
                </div>
                <div style={styles.views}>
                    {/* Eye icon placeholder */}
                    <span style={{ marginRight: '5px', fontSize: '1em' }}>&#128065;</span>
                    {news.total_view || 0}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;