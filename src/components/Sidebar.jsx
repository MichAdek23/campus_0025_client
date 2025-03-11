import React, { useState } from "react";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ad1 from "../assets/ads1.png";
import ad2 from "../assets/ads2.png";
import ad3 from "../assets/ads3.png";

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const zoomEffect = keyframes`
  from { transform: scale(0.9); filter: blur(3px); opacity: 0; }
  to { transform: scale(1); filter: blur(0); opacity: 1; }
`;

const SidebarContainer = styled.div`
  width: 280px;
  padding: 25px;
  background: #ffffff;
  border-right: 1px solid #ddd;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${fadeIn} 0.6s ease-out;
`;

const CarouselContainer = styled.div`
  .slick-slide img {
    width: 100%;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
    animation: ${zoomEffect} 0.8s ease-in-out;
  }

  .slick-slide:hover img {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.6);
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  resize: none;
  height: 80px;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.6);
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Sidebar = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const images = [
    { src: ad1, link: "https://madeleke.netlify.app" },
    { src: ad2, link: "https://campusguideid.com.ng" },
    { src: ad3, link: "https://campusguide.ng" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    // TODO: Send form data to backend
  };

  return (
    <SidebarContainer>
      <SectionTitle>Sponsored Ads</SectionTitle>
      <CarouselContainer>
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img src={image.src} alt={`Promo ${index + 1}`} />
              </a>
            </div>
          ))}
        </Slider>
      </CarouselContainer>

      <SectionTitle>Contact Us</SectionTitle>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send</Button>
      </ContactForm>
    </SidebarContainer>
  );
};

export default Sidebar;
