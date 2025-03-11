import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Logo from "../assets/text (5).svg"; 

const Preloader = () => {
  return (
    <LoaderContainer>
      <motion.img
        src={Logo}
        alt="Campus Guide Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
      >
        Loading...
      </motion.h1>
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f8f9fa;
  color: #007bff;
  font-family: "Arial", sans-serif;
  text-align: center;
  overflow: hidden;

  img {
    width: 100px;
    height: auto;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
  }
`;

export default Preloader;
