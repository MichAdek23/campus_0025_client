import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import NewsCard from "../components/NewsCard";
import EventCard from "../components/EventCard";
import ScholarshipCard from "../components/ScholarshipCard";
import api from "../utils/api";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const SidebarWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Popup = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #ff9800;
  color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: ${({ show }) => (show ? "block" : "none")};
  transition: opacity 0.5s;
`;

const Home = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchResults, setSearchResults] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsResponse = await api.get("/news");
        const eventsResponse = await api.get("/events");
        const scholarshipsResponse = await api.get("/scholarships");

        // Ensure correct categorization
        const formattedScholarships = scholarshipsResponse.data.map((scholarship) => ({
          ...scholarship,
          category: "Scholarship",
        }));

        const combinedData = [
          ...newsResponse.data,
          ...eventsResponse.data,
          ...formattedScholarships,
        ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setItems(combinedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 10000);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const filteredItems = (searchResults || items).filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Campus Guide - Your Student Companion</title>
        <meta name="description" content="Stay updated with campus news, scholarships, and events. Your go-to guide for everything student-related!" />
        <meta name="keywords" content="campus news, scholarships, university events, student life, student guide" />
        <meta name="author" content="Campus Guide" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content="Campus Guide - Your Student Companion" />
        <meta property="og:description" content="Stay updated with campus news, scholarships, and events!" />
        <meta property="og:image" content="https://campusguide.ng/og-image.jpg" />
        <meta property="og:url" content="https://campusguide.ng/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Campus Guide - Your Student Companion" />
        <meta name="twitter:description" content="Stay updated with campus news, scholarships, and events!" />
        <meta name="twitter:image" content="https://campusguide.ng/og-image.jpg" />
      </Helmet>

      <Container>
        <SidebarWrapper>
          <Sidebar setSelectedCategory={setSelectedCategory} />
        </SidebarWrapper>
        <MainContent>
          <HeroSection setSearchQuery={setSearchQuery} setSearchResults={setSearchResults} />
          <Grid>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) =>
                item.date ? (
                  <EventCard key={item._id} event={item} />
                ) : item.category === "Scholarship" ? (
                  <ScholarshipCard key={item._id} scholarship={item} />
                ) : (
                  <NewsCard key={item._id} news={item} />
                )
              )
            ) : (
              <p>No items found.</p>
            )}
          </Grid>
        </MainContent>

        <Popup show={showPopup}>
          <strong>Sponsored Product</strong>
          <p>Check out our latest deals!</p>
          <a
            href="https://madeleke.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            Click Here
          </a>
        </Popup>
      </Container>
    </>
  );
};

export default Home;
