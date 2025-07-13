import React from 'react';
import './Loader.css';

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <h2 className="loader-text">Loading Portfolio...</h2>
    </div>
  );
}
