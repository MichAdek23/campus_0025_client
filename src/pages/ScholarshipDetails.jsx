import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import api from "../utils/api";

const Container = styled(motion.div)`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;

const Info = styled.p`
  font-size: 16px;
  color: #555;
  margin: 8px 0;
`;

const ApplyButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 12px 20px;
  background: #007bff;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.3s;
  
  &:hover {
    background: #0056b3;
  }
`;

const ScholarshipDetails = () => {
  const { id } = useParams();
  const [scholarship, setScholarship] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  api.get(`/scholarships/${id}`)  
    .then((response) => {
      setScholarship(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching scholarship:", error);
      setLoading(false);
    });
}, [id]);

  if (loading) return <p>Loading...</p>;
  if (!scholarship) return <p>Scholarship not found.</p>;

  const defaultImage =
    "https://img.freepik.com/free-photo/medium-shot-graduate-student-holding-diploma_23-2148950578.jpg?t=st=1741591846~exp=1741595446~hmac=796befc44e61bc838745c4523e88b45e15365adb55564103dc69512f0d1c8fb8&w=1800";

  return (
    <Container 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
    >
      <Image src={scholarship.imageUrl || defaultImage} alt={scholarship.title} />
      <Title>{scholarship.title}</Title>
      <Info><strong>Eligibility:</strong> {scholarship.eligibility}</Info>
      <Info><strong>Category:</strong> {scholarship.category}</Info>
      <Info><strong>Deadline:</strong> {new Date(scholarship.deadline).toLocaleDateString()}</Info>
      <ApplyButton
          href={scholarship.website.startsWith("http") ? scholarship.website : `https://${scholarship.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Here
      </ApplyButton>
    </Container>
  );
};

export default ScholarshipDetails;
