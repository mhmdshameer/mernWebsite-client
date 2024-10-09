import React from 'react';
import styled from 'styled-components';

const InstagramContainer = styled.div`
  max-width: 540px;
  margin: 1rem auto;
  padding: 0 20px; /* Add padding to ensure spacing on smaller screens */

  @media (max-width: 768px) {
    max-width: 100%; /* Take full width on smaller screens */
    padding: 0 10px;
  }
`;

const InstagramIframe = styled.iframe`
  width: 100%;
  height: 600px;
  border: none;

  @media (max-width: 768px) {
    height: 400px; /* Adjust the height for smaller screens */
  }

  @media (max-width: 480px) {
    height: 300px; /* Further adjust the height for very small screens */
  }
`;

const InstagramSection = () => {
  const reelId = "DA5cHsIyDTb"; // Reel ID extracted from the link

  return (
    <InstagramContainer>
      <h2>Latest from Instagram</h2>
      <InstagramIframe
        src={`https://www.instagram.com/reel/${reelId}/embed`}
        title="Instagram Reel Video"
        allow="encrypted-media"
      ></InstagramIframe>
    </InstagramContainer>
  );
};

export default InstagramSection;
