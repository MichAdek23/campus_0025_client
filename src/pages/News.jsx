import React, { useEffect, useState } from "react";
import api from "../utils/api";
import NewsCard from "../components/NewsCard";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get("/news");
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
     <>
      <Helmet>
        <title>Latest Campus News - Campus Guide</title>
        <meta name="description" content="Get the latest news updates from campuses near you." />
        <meta name="keywords" content="campus news, student news, university updates" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Latest Campus News - Campus Guide" />
        <meta property="og:description" content="Stay informed about what's happening on campuses." />
        <meta property="og:image" content="https://campusguide.ng/news-image.jpg" />
        <meta property="og:url" content="https://campusguide.ng/news" />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Latest Campus News - Campus Guide" />
        <meta name="twitter:description" content="Stay informed about what's happening on campuses." />
        <meta name="twitter:image" content="https://campusguide.ng/news-image.jpg" />
      </Helmet>

      
      <Container>
        {news.length > 0 ? (
          news.map((article) => <NewsCard key={article._id} news={article} />)
        ) : (
          <p>No news available.</p>
        )}
      </Container>
    </>  
  );
};

export default News;
