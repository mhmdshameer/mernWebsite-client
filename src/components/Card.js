import React from "react";
import styled from "styled-components";
import cardData from "../data"; // Adjust the path based on your structure

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 50px;
  justify-content: center;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */

  @media (max-width: 768px) {
    padding: 20px;
    gap: 15px;
  }
`;

const Card = styled.div`
  border: none;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  display: flex;
  height: 350px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => (props.isEven ? "#E7F3FF" : "#FFFFFF")};

  @media (max-width: 768px) {
    width: 100%; /* Full width for smaller screens */
    height: auto; /* Auto height for flexible content */
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 100%; /* Full width for very small screens */
    padding: 10px;
  }
`;

const CardImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const CardParagraph = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
`;

const CardButton = styled.button`
  width: 150px;
  height: 50px;
  padding: 10px 15px;
  background-color: ${(props) => props.color};
  color: #0a2540;
  margin-bottom: 5px;
  border: none;
  cursor: pointer;
  border-radius: 50px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 40px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 35px;
    font-size: 0.8rem;
  }
`;

const Cards = () => {
  return (
    <CardContainer>
      {cardData.map((card, index) => (
        <Card key={index} isEven={index % 2 === 0}>
          <CardImage src={card.img} alt={card.title} />
          <CardTitle>{card.title}</CardTitle>
          <CardParagraph>{card.desc}</CardParagraph>
          <CardButton color={card.buttonColor}>Know More</CardButton>
        </Card>
      ))}
    </CardContainer>
  );
};

export default Cards;
