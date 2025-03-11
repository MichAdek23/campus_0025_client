// pages/EventsPage.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EventCard from "../components/EventCard";
import { Helmet } from "react-helmet-async";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://campus-0025-backend.onrender.com/events") 
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <>
      <Helmet>
        <title>Upcoming Events - Campus Guide</title>
        <meta name="description" content="Find out about upcoming campus events and activities." />
        <meta name="keywords" content="campus events, university activities, student gatherings" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Upcoming Events - Campus Guide" />
        <meta property="og:description" content="Find out about upcoming campus events and activities." />
        <meta property="og:image" content="https://campusguide.ng/events-image.jpg" />
        <meta property="og:url" content="https://campusguide.ng/events" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Upcoming Events - Campus Guide" />
        <meta name="twitter:description" content="Find out about upcoming campus events and activities." />
        <meta name="twitter:image" content="https://campusguide.ng/events-image.jpg" />
      </Helmet>
      <Container>
        {events.length > 0 ? (
          events.map((event) => <EventCard key={event._id} event={event} />)
        ) : (
          <p>No events available</p>
        )}
      </Container>
    </>
  );
};

export default EventsPage;