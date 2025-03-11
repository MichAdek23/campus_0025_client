import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const Info = styled.p`
  font-size: 14px;
  color: #555;
  margin: 5px 0;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  background: #007bff;
  color: white;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 15px;
  font-weight: bold;
`;

const Button = styled(Link)`
  background: #007bff;
  color: white;
  padding: 8px 12px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s;
  margin-top: auto;

  &:hover {
    background: #0056b3;
  }
`;

const ScholarshipCard = ({ scholarship }) => {
  const defaultImage =
    "https://img.freepik.com/free-photo/medium-shot-graduate-student-holding-diploma_23-2148950578.jpg?t=st=1741591846~exp=1741595446~hmac=796befc44e61bc838745c4523e88b45e15365adb55564103dc69512f0d1c8fb8&w=1800";

  // Debugging: Log the imageUrl
  console.log("Scholarship Image URL:", scholarship.imageUrl);

  return (
    <Card>
      {/* Use provided image or default */}
      <Image
        src={scholarship.imageUrl && scholarship.imageUrl.trim() !== "" ? scholarship.imageUrl : defaultImage}
        alt={scholarship.title || "Scholarship Image"}
      />

      <Title>{scholarship.title}</Title>
      <CategoryBadge>{scholarship.category}</CategoryBadge>
      <Info>
        <strong>Eligibility:</strong> {scholarship.eligibility}
      </Info>
      <Info>
        <strong>Deadline:</strong> {new Date(scholarship.deadline).toDateString()}
      </Info>

      <Button to={`/scholarships/${scholarship._id}`}>View Details</Button>
    </Card>
  );
};

export default ScholarshipCard;
