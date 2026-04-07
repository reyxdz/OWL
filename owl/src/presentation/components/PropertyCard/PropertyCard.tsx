import React, { useState } from 'react';
import { Property } from '../../../domain/models/Property';
import './PropertyCard.css';

import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Link to={`/property/${property.id}`} style={{ textDecoration: 'none' }}>
      <div className="clay-card property-card">
        <div className="property-image-container">
        <img 
          src={property.images[currentImageIndex]} 
          alt={`${property.name} view`} 
          className="property-image"
        />
        
        {/* Navigation arrows appear on hover via CSS */}
        <button className="carousel-btn prev-btn clay-button secondary" onClick={prevImage}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="carousel-btn next-btn clay-button secondary" onClick={nextImage}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="carousel-indicators">
          {property.images.map((_, idx) => (
            <div 
              key={idx} 
              className={`indicator ${idx === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
      
      <div className="property-details">
        <h3 className="property-name">{property.name}</h3>
        <p className="property-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '4px', verticalAlign: 'text-bottom' }}>
            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {property.location}
        </p>
        <p className="property-price">{property.priceRange}</p>
      </div>
    </div>
    </Link>
  );
};
