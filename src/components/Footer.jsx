import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/text (5).svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <LogoSection>
          <img src={logo} alt="Campus Guide Logo" />
          <p>Your trusted source for campus news and updates.</p>
        </LogoSection>
        <QuickLinks>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/scholarships">Scholarships</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </QuickLinks>
        <Sponsors>
          <h4>Sponsors & Partners</h4>
          <p><a href="https://x.com/sorbadek" target="_blank" rel="noreferrer">Michadek23</a></p>
          <p>Coming Soon...</p>
        </Sponsors>
        <Address>
          <h4>Contact Us</h4>
          <p>109 Uniport Choba, Port Harcourt, Nigeria</p>
          <p>Email: info@campusguide.ng</p>
          <p>Phone: +234 813 627 4163</p>
          <SocialIcons>
            <a href="https://facebook.com/michadek23" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com/sorbadek" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com/michadek24" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com/sorbadek" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </SocialIcons>
        </Address>
      </FooterTop>
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Campus Guide. All rights reserved.</p>
        <p>Powered by <a href="https://x.com/sorbadek" target="_blank" rel="noreferrer">Michadek23</a></p>
      </FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: #1a1a1a;
  color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  text-align: left;
`;

const LogoSection = styled.div`
  img {
    width: 150px;
  }
  p {
    margin-top: 10px;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: #fff;
    text-decoration: none;
    margin: 5px 0;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Sponsors = styled.div`
  h4 {
    margin-bottom: 10px;
  }
`;

const Address = styled.div`
  h4 {
    margin-bottom: 10px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  font-size: 1.5rem;
  margin-top: 10px;

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: #f39c12;
    }
  }

  svg {
    cursor: pointer;
  }
`;

const FooterBottom = styled.div`
  margin-top: 1rem;
  text-align: center;
  width: 100%;
  border-top: 1px solid #444;
  padding-top: 1rem;

  a {
    color: #f39c12;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export default Footer;