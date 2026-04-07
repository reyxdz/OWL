import React from 'react';
import { PropertyCard } from '../../components/PropertyCard/PropertyCard';
import { mockProperties } from '../../../infrastructure/mockData/properties';

export const Home = () => {
  return (
    <main style={{ paddingTop: '140px', paddingBottom: '4rem', width: '90%', maxWidth: '1200px', margin: '0 auto' }}>
      {/* 
        Using CSS Grid directly inline for simplicity here. 
        Auto-fit ensures the cards resize beautifully and responsively. 
      */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '2rem' 
      }}>
        {mockProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </main>
  );
};
