import React from 'react';
import './styles/theme.css';
import { Navbar } from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { PropertyDetail } from './pages/PropertyDetail/PropertyDetail';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </div>
  );
}

export default App;
