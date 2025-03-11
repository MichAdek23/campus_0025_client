import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AdContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 320px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 15px;
  text-align: center;
  display: ${({ show }) => (show ? "block" : "none")};
  z-index: 1000;

  @media (min-width: 768px) {
    display: none; /* Hide on desktop */
  }
`;

const AdImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  margin-top: 8px;
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;

const PopupAd = ({ ads }) => {
  const [showAd, setShowAd] = useState(false);
  const [currentAd, setCurrentAd] = useState(null);

  useEffect(() => {
    if (ads.length === 0) return;

    const showRandomAd = () => {
      const randomAd = ads[Math.floor(Math.random() * ads.length)];
      setCurrentAd(randomAd);
      setShowAd(true);

      setTimeout(() => {
        setShowAd(false);
      }, 4000); // Hide after 4 seconds
    };

    // Show first ad after 30 minutes
    const adInterval = setInterval(showRandomAd, 30 * 60 * 1000);

    return () => clearInterval(adInterval);
  }, [ads]);

  return (
    <AdContainer show={showAd}>
      {currentAd && (
        <a href={currentAd.link} target="_blank" rel="noopener noreferrer">
          <AdImage src={currentAd.image} alt="Ad" />
        </a>
      )}
      <CloseButton onClick={() => setShowAd(false)}>Close</CloseButton>
    </AdContainer>
  );
};

export default PopupAd;
