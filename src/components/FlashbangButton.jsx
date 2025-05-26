import React, { useState, useEffect } from 'react';
import './FlashbangButton.css';

const FlashbangButton = () => {
  const [isFlashing, setIsFlashing] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isFirstClick, setIsFirstClick] = useState(true);

  const triggerFlashbang = () => {
    setIsFlashing(true);
    
    // Reset the flash effect after 3.5 seconds to match the CSS animation
    setTimeout(() => {
      setIsFlashing(false);
      
      // Show popup after first click
      if (!isFirstClick) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
      }
      setIsFirstClick(false);
    }, 3500);
  };

  return (
    <div className="flashbang-container">
      <button 
        className={`flashbang-button ${isFlashing ? 'flashing' : ''}`}
        onClick={triggerFlashbang}
        aria-label="Flashbang effect trigger"
      >
        <svg
          className="moon-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
      {isFlashing && <div className="flash-overlay" />}
      {showPopup && (
        <div className="glass-popup">
          Once you go black, you can never go back
        </div>
      )}
    </div>
  );
};

export default FlashbangButton; 