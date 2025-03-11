import React, { useState } from "react";
import styled from "styled-components";
import EventCard from "./EventCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FilterWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background: ${({ active }) => (active ? "#007bff" : "#ddd")};
  color: ${({ active }) => (active ? "white" : "#333")};
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: ${({ active }) => (active ? "#0056b3" : "#bbb")};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const LoadMoreButton = styled.button`
  background: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 20px auto;
  display: block;

  &:hover {
    background: #218838;
  }
`;

const EventList = ({ events }) => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 events initially

  const filteredEvents = events
    .filter((e) => category === "All" || e.category === category)
    .filter((e) => e.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <FilterWrapper>
        {["All", "Seminar", "Sports", "Workshop", "Festival"].map((cat) => (
          <Button key={cat} active={category === cat} onClick={() => setCategory(cat)}>
            {cat}
          </Button>
        ))}
      </FilterWrapper>

      <Grid>
        {filteredEvents.slice(0, visibleCount).map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </Grid>

      {visibleCount < filteredEvents.length && (
        <LoadMoreButton onClick={() => setVisibleCount(visibleCount + 6)}>
          Load More
        </LoadMoreButton>
      )}
    </Container>
  );
};

export default EventList;
