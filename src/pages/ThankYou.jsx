import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <PageContainer
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <IconContainer>
        <CheckCircle size={80} color="#28a745" />
      </IconContainer>
      <h1>Thank You!</h1>
      <p>Your message has been sent successfully. We will get back to you soon.</p>

      <BackButton to="/">
        Back to Home
      </BackButton>
    </PageContainer>
  );
};

export default ThankYou;

// Styled Components
const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: #f8f9fa;
  padding: 20px;

  h1 {
    font-size: 2.5rem;
    color: #007bff;
    margin-top: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-top: 10px;
  }
`;

const IconContainer = styled.div`
  background: #d4edda;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackButton = styled(Link)`
  margin-top: 30px;
  padding: 12px 20px;
  font-size: 1.1rem;
  background: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: #0056b3;
  }
`;
