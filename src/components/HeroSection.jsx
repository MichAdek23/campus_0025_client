import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const HeroSection = ({ setSearchQuery, setSearchResults }) => { // Add setSearchResults
  return (
    <HeroContainer>
      <VideoBackground autoPlay loop muted>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Overlay />
      
      {/* SearchBar positioned at the top-right */}
      <SearchWrapper>
        <SearchBar setSearchQuery={setSearchQuery} onSearchResults={setSearchResults} /> {/* Pass setSearchResults */}
      </SearchWrapper>

      <Content>
        <h1>Welcome to Campus Guide</h1>
        <p>Your one-stop platform for campus news, events, and scholarships.</p>
        <ExploreButton>Explore Now</ExploreButton>
      </Content>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const SearchWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 3;
  width: calc(100% - 40px);
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 250px;
    top: 15px;
    right: 15px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    right: 10px;
    top: 10px;
    padding: 0 10px;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 20px;

  h1 {
    font-size: 3rem;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ExploreButton = styled.button`
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: bold;
  background: linear-gradient(135deg, #ff7b00, #ff4b2b);
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(255, 123, 0, 0.3);

  &:hover {
    background: linear-gradient(135deg, #e66a00, #d43f1a);
    transform: scale(1.05);
    box-shadow: 0px 6px 15px rgba(255, 75, 43, 0.4);
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

export default HeroSection;
