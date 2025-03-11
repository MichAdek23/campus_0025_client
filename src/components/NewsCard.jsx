import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 0 0 10px;
`;

const Excerpt = styled.p`
  color: #666;
  font-size: 14px;
`;

const DateText = styled.small`
  font-size: 12px;
  color: #999;
`;

const ReadMore = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const NewsCard = ({ news }) => {
  const [imageError, setImageError] = useState(false);

  if (!news) return <p>Something went wrong.</p>;

  return (
    <Card>
      {news.imageUrl && (
        <Image
          src={imageError ? "../assets/text (5).svg" : news.imageUrl}
          alt={news.title}
          onError={() => setImageError(true)}
        />
      )}
      <Title>{news.title}</Title>
      <Excerpt>{news.excerpt}</Excerpt>
      <DateText>📅 {new Date(news.createdAt).toDateString()}</DateText>
      <ReadMore to={`/news/${news._id}`}>Read More</ReadMore>
    </Card>
  );
};

export default NewsCard;
