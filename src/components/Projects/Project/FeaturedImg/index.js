import React from 'react';
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import Illustration from './Illustration';

const FeaturedImg = ({ project }) => {
  return (
    <StyledContainer>
      <Illustration />
      <StyledImageContainer fluid={project.frontmatter.featuredImage.childImageSharp.fluid}>
        <StyledDarken />
        <StyledTitle>{project.frontmatter.title}</StyledTitle>
      </StyledImageContainer>
    </StyledContainer>
  );
}

const StyledDarken = styled.div`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: all .2s linear;
`

const StyledContainer = styled.div`
  position: relative;
  flex: 0 0 464px;
  cursor: pointer;
  &:hover {
    ${StyledDarken} {
      opacity: 0;
    }
     svg {
      stroke-dashoffset: 1440;		
    }
  }
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
  z-index: 1;
`

export default FeaturedImg;
