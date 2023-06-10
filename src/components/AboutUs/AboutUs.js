import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: #f8f8f8;
  padding: 40px;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin-right: 40px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AboutUsPage = () => {
  return (
    <AboutSection>
      <ImageWrapper>
        <Image
          src="https://th.bing.com/th/id/R.a4d3180d25ada4fdef2fea655d6d04dc?rik=%2fxTISoi6Rb6y4Q&riu=http%3a%2f%2fminifish.files.wordpress.com%2f2012%2f03%2fp1060716.jpg&ehk=NPvrb8dK9v9YR6lMCP9G2YOMQhYONr56f91D2ElQh2g%3d&risl=&pid=ImgRaw&r=0"
          alt="About Us"
        />
      </ImageWrapper>
      <div>
        <Title>About Us</Title>
        <Description>
          Welcome to our company! We are a team of passionate individuals
          dedicated to providing excellent services and products to our
          customers.
        </Description>
      </div>
    </AboutSection>
  );
};

export default AboutUsPage;
