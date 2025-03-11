import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import api from "../utils/api";
import { Helmet } from "react-helmet-async";

const Container = styled(motion.div)`
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  background: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.h3`
  font-size: 20px;
  color: #333;
  margin: 10px 0;
`;

const Info = styled.p`
  font-size: 14px;
  color: #555;
  margin: 5px 0;
`;

const DetailsLink = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background: #007bff;
  color: white;
  font-size: 14px;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    background: #0056b3;
  }
`;

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/scholarships")
      .then((response) => {
        setScholarships(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching scholarships:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Helmet>
        <title>Find Scholarships - Campus Guide</title>
        <meta name="description" content="Discover scholarships available for students." />
        <meta name="keywords" content="scholarships, student funding, financial aid" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Find Scholarships - Campus Guide" />
        <meta property="og:description" content="Explore available scholarships for students." />
        <meta property="og:image" content="https://campusguide.ng/scholarship-image.jpg" />
        <meta property="og:url" content="https://campusguide.ng/scholarships" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Find Scholarships - Campus Guide" />
        <meta name="twitter:description" content="Explore available scholarships for students." />
        <meta name="twitter:image" content="https://campusguide.ng/scholarship-image.jpg" />
      </Helmet>
      <Container 
       initial={{ opacity: 0, y: 30 }} 
       animate={{ opacity: 1, y: 0 }} 
       transition={{ duration: 0.6 }}
      >
        <h2>Available Scholarships</h2>
        <Grid>
          {scholarships.map((scholarship) => (
            <Card key={scholarship._id}>
              <Image src={scholarship.imageUrl || "https://img.freepik.com/free-photo/medium-shot-graduate-student-holding-diploma_23-2148950578.jpg?t=st=1741591846~exp=1741595446~hmac=796befc44e61bc838745c4523e88b45e15365adb55564103dc69512f0d1c8fb8&w=1800"} alt={scholarship.title} />
              <Title>{scholarship.title}</Title>
              <Info><strong>Category:</strong> {scholarship.category}</Info>
              <Info><strong>Deadline:</strong> {new Date(scholarship.deadline).toLocaleDateString()}</Info>
              <DetailsLink to={`/scholarships/${scholarship._id}`}>View Details</DetailsLink>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Scholarships;