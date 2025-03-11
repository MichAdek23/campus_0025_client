import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Info } from "lucide-react";

const TermsContainer = styled(motion.div)`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Title = styled(motion.h1)`
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const Section = styled(motion.div)`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 10px;
`;

const IconWrapper = styled.span`
  margin-right: 10px;
  color: #007bff;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const TermsAndConditions = () => {
  return (
    <TermsContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Terms and Conditions</Title>
      <Text><strong>Last Updated: 3rd March 2025</strong></Text>

      <Section>
        <SectionTitle>
          <IconWrapper><FileText /></IconWrapper> 1. Definitions
        </SectionTitle>
        <Text>
          - <strong>"Campus Guide"</strong> refers to the website and mobile application offering student-focused news, events, scholarships, and other content.
          <br />
          - <strong>"User"</strong> refers to anyone accessing or using Campus Guide.
          <br />
          - <strong>"Content"</strong> refers to articles, news, events, scholarships, and user-generated content on the platform.
        </Text>
      </Section>

      <Section>
        <SectionTitle>
          <IconWrapper><ShieldCheck /></IconWrapper> 2. User Responsibilities
        </SectionTitle>
        <Text>
          - You must be at least 13 years old to use Campus Guide.
          <br />
          - You agree to use Campus Guide lawfully and ethically.
          <br />
          - You are responsible for the accuracy of any information you submit.
          <br />
          - Any misuse, such as posting harmful or misleading content, may result in account suspension or removal.
        </Text>
      </Section>
      
      <Section>
        <SectionTitle>
          <IconWrapper><Info /></IconWrapper> 3. Content and Intellectual Property
        </SectionTitle>
        <Text>
          - All original content on Campus Guide is owned by the platform or respective content creators.
          <br />
          - Users may not copy, distribute, or use content without permission.
          <br />
          - User-generated content must not violate copyright laws or infringe on others' rights.
          <br />
          - Campus Guide reserves the right to modify or remove any content that violates these terms.
        </Text>
      </Section>
      
      <Section>
        <Text><strong>For any questions, contact us at info@campusguide.ng</strong></Text>
      </Section>
    </TermsContainer>
  );
};

export default TermsAndConditions;