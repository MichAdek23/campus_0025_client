import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu
import Logo from "../assets/text (5).svg"; // Adjust path if needed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <LogoContainer>
        <img src={Logo} alt="Campus Guide Logo" />
      </LogoContainer>

      {/* Mobile Menu Button */}
      <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </MobileMenuButton>

      {/* Navigation Links */}
      <NavLinks className={menuOpen ? "open" : ""}>
        <NavItem to="/" onClick={() => setMenuOpen(false)}>Home</NavItem>
        <NavItem to="/news" onClick={() => setMenuOpen(false)}>News</NavItem>
        <NavItem to="/scholarships" onClick={() => setMenuOpen(false)}>Scholarships</NavItem>
        <NavItem to="/events" onClick={() => setMenuOpen(false)}>Events</NavItem>
        <NavItem to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavItem>
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky; /* Makes it stick */
  top: 0; /* Sticks to the top */
  z-index: 1000; /* Ensures it's above other content */
`;


const LogoContainer = styled.div`
  img {
    height: 50px;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  transition: all 0.4s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 50px;
    display: none;
    align-items: center;
    justify-content: center;

    &.open {
      display: flex;
    }
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 1.2rem;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #007bff;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 15px 0;
    width: 100%;
    text-align: center;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default Navbar;