import React from 'react';
import './Loading.css'; // Ensure to create this file for spinner styles

const LoadingIndicator = () => (
    <div className="spinner-container">
        <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    </div>
);

export default LoadingIndicator;
