import React, { useState } from "react";
import styled from "styled-components";
import { Search } from "lucide-react";
import api from "../utils/api"; 

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  background: transparent;

  &::placeholder {
    color: #888;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background: #007bff;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #0056b3;
  }
`;

const SearchBar = ({ setSearchQuery, onSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;

    setSearchQuery(query);

    try {
      // Fetch news, events, and scholarships from API.js
      const [newsResponse, eventsResponse, scholarshipsResponse] = await Promise.all([
        api.getNews(),
        api.getEvents(),
        api.getScholarships(),
      ]);

      // Combine results
      const combinedData = [...newsResponse, ...eventsResponse, ...scholarshipsResponse];

      // Filter results based on query
      const filteredResults = combinedData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );

      onSearchResults(filteredResults);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleSearch}>
        <Search size={18} />
      </Button>
    </SearchContainer>
  );
};

export default SearchBar;
