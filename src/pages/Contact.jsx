import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <PageContainer>
      {/* Header Section */}
      <Header initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1>Contact Us</h1>
        <p>Have any questions? We'd love to hear from you.</p>
      </Header>

      <Content>
        {/* Contact Details */}
        <DetailsContainer initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <ContactItem>
            <Phone size={24} />
            <p>+234 813 627 4163</p>
          </ContactItem>
          <ContactItem>
            <Mail size={24} />
            <p>support@campusguide.ng</p>
          </ContactItem>
          <ContactItem>
            <MapPin size={24} />
            <p>University of Port Harcourt, Nigeria</p>
          </ContactItem>
        </DetailsContainer>

        {/* Contact Form */}
        <FormContainer initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <h2>Send Us a Message</h2>
          <Form
            action="https://formsubmit.co/adelekem600@gmail.com"
            method="POST"
          >
            {/* Hidden Input to Disable Captcha */}
            <input type="hidden" name="_captcha" value="false" />
          
            {/* Hidden Input to Redirect After Submission */}
            <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />
          
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="phone" name="phone" placeholder="Your phone" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required />
            <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Send Message <Send size={18} />
            </motion.button>
          </Form>
        </FormContainer>
      </Content>

      {/* Google Map */}
      <MapContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=University%20of%20Port%20Harcourt&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </MapContainer>
    </PageContainer>
  );
};

export default Contact;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
  text-align: center;
`;

const Header = styled(motion.div)`
  h1 {
    font-size: 2.5rem;
    color: #007bff;
    font-weight: bold;
  }
  p {
    font-size: 1.2rem;
    color: #555;
    margin-top: 10px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
`;

const DetailsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  color: #333;
`;

const FormContainer = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  input, textarea {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }

  textarea {
    height: 120px;
    resize: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #007bff;
    color: white;
    font-size: 1.1rem;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const MapContainer = styled(motion.div)`
  margin-top: 40px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
