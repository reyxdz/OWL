import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProperties } from '../../../infrastructure/mockData/properties';
import './PropertyDetail.css';

export const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = mockProperties.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) {
    return (
      <main style={{ paddingTop: '140px', paddingBottom: '4rem', width: '90%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2>Property not found.</h2>
        <Link to="/" className="clay-button" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '1rem' }}>Go Back</Link>
      </main>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="property-detail-main">
      <div className="detail-header">
        <Link to="/" className="back-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
             <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Listings
        </Link>
      </div>

      <div className="detail-hero clay-card">
        <div className="hero-image-container">
          <img 
            src={property.images[currentImageIndex]} 
            alt={`${property.name} view`} 
            className="hero-image"
          />
          <button className="hero-carousel-btn prev-btn clay-button secondary" onClick={prevImage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="hero-carousel-btn next-btn clay-button secondary" onClick={nextImage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="hero-carousel-indicators">
            {property.images.map((_, idx) => (
              <div 
                key={idx} 
                className={`hero-indicator ${idx === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(idx)}
              />
            ))}
          </div>
        </div>

        <div className="detail-info">
          <div className="info-header">
            <div>
              <h1 className="detail-name">{property.name}</h1>
              <p className="detail-location">{property.location}</p>
            </div>
            <div className="detail-price-badge clay-card">
              {property.priceRange}
            </div>
          </div>

          <div className="info-section">
            <h3 className="section-title">Description</h3>
            <p className="section-content">{property.description}</p>
          </div>

          <div className="info-section">
            <h3 className="section-title">Inclusions</h3>
            <div className="inclusions-grid">
              {property.inclusions.map((inclusion, index) => (
                <div key={index} className="inclusion-pill">
                  {inclusion}
                </div>
              ))}
            </div>
          </div>
          
          <button className="clay-button book-btn">Schedule Viewing</button>
        </div>
      </div>
    </main>
  );
};
