import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 10px;
`;

const Date = styled.p`
  color: #888;
  font-size: 0.9rem;
`;

const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const NewsDetails = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const response = await api.get(`/news/${id}`);
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news details:", error);
      }
    };

    fetchNewsDetails();
  }, [id]);

  if (!news) return <p>Something went wrong.</p>;

  return (
     <>
      <Helmet>
        <title>News Details - Campus Guide</title>
        <meta name="description" content={`Read more about this news article (ID: ${id}) on Campus Guide.`} />

        {/* Open Graph Tags */}
        <meta property="og:title" content="News Details - Campus Guide" />
        <meta property="og:description" content="Get in-depth details about this news update." />
        <meta property="og:image" content="https://campusguide.ng/news-details-image.jpg" />
        <meta property="og:url" content={`https://campusguide.ng/news/${id}`} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="News Details - Campus Guide" />
        <meta name="twitter:description" content="Get in-depth details about this news update." />
        <meta name="twitter:image" content="https://campusguide.ng/news-details-image.jpg" />
      </Helmet>

      <Container>
        <Image 
          src={imageError ? "/path/to/default-image.jpg" : news.imageUrl} 
          alt={news.title} 
          onError={() => setImageError(true)} 
        />
        <Title>{news.title}</Title>
        <Date>Published on {new window.Date(news.createdAt).toDateString()}</Date>
        <Content>{news.content}</Content>
      </Container>
    </>
  );
};

export default NewsDetails;
