import React from 'react';
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import Illustration from './Illustration';

const FeaturedImg = ({ project }) => {
  return (
    <StyledContainer>
      <Illustration />
      <StyledImageContainer fluid={project.frontmatter.featuredImage.childImageSharp.fluid}>
        <StyledTitle>{project.frontmatter.title}</StyledTitle>
      </StyledImageContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: relative;
  flex: 0 0 454px;
  &:hover svg{
    stroke-dashoffset: 0;		
  }
  cursor: pointer;
`
const StyledImageContainer = styled(BackgroundImage)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  height: 100%;
`
const StyledTitle = styled.h3`
  color: white;
  font-size: 44px;
`

export default FeaturedImg;
