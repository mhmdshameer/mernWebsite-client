import React from "react";
import styled from "styled-components";

const AboutUsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  height: 60vh;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    height: auto;
  }
`;

const Image = styled.img`
  display: flex;
  height: 100%;
  padding: 50px;
  @media (max-width: 768px) {
    height: 200px;
    padding: 10px;
  }
`;

const Content = styled.div`
  width: 45%;
  padding: 50px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #d4af37;
`;

const Name = styled.h1`
  font-family: "Lora", serif;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #0a2540;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  font-family: "Lora", serif;
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #60a5fa;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  font-family: "Lora", serif;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #f5f5dc;
  color: #0a2540;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eae8d5;
  }
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Image
        src={`${process.env.PUBLIC_URL}/images/doctorImg.png`}
        alt="About Us"
      />
      <Content>
        <Title>About Us</Title>
        <Name>DR. GEETA LAKSHMI</Name>
        <Paragraph>
          This is a description about us. We are committed to providing the best
          service.
        </Paragraph>
        <ButtonGroup>
          <Button>Learn More</Button>
          <Button>Contact Us</Button>
        </ButtonGroup>
      </Content>
    </AboutUsContainer>
  );
};

export default AboutUs;
