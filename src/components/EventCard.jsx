// components/EventCard.js
import React from "react";
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
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
`;

const EventCard = ({ event }) => {
  return (
    <Card>
      {event.imageUrl && <Image src={event.imageUrl} alt={event.title} />}
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <small>📅 {new Date(event.date).toDateString()}</small>
      <span>📍 {event.location}</span>
    </Card>
  );
};

export default EventCard;