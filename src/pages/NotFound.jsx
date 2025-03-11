import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Frown } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
const handleRedirect = () => {
    window.location.href = "/";
};

return (
    <Container>
        <IconContainer
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Frown size={80} color="#ff6b6b" />
        </IconContainer>
        <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            Oops! Page Not Found
        </Title>
        <Message
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
        >
            The page you're looking for doesn't exist or has been moved.
        </Message>
        <HomeButton
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleRedirect}
        >
            Go Home
        </HomeButton>
    </Container>
);
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
  color: #333;
  padding: 20px;
`;

const IconContainer = styled(motion.div)`
  margin-bottom: 20px;
`;

const Title = styled(motion.h1)`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Message = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const HomeButton = styled(Link)`
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default NotFound;
