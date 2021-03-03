import React from 'react';
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import Illustration from './Illustration';

const FeaturedImg = ({ project }) => {
  return (
    <StyledContainer>
      <Illustration />
      <StyledImageContainer fluid={project.featuredImage.childImageSharp.fluid}>
        <StyledDarken />
        <StyledTitle>{project.title}</StyledTitle>
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
  width: 464px;
  height: 100%;
  padding: 10px 10px 0 10px;
  max-height: 100%;
  transition: padding .4s ease-out, width .4s ease-out, max-height .4s ease-out;
  cursor: pointer;
  &:hover {
    max-height: 276px;
    width: 476px;
    padding: 4px 4px 0 4px;
    ${StyledDarken} {
      opacity: 0;
    }
     svg {
      stroke-dasharray: 1490;		
    }
  }
`
const StyledImageContainer = styled(BackgroundImage)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  overflow: hidden;
  height: 100%;
`
const StyledTitle = styled.h3`
  color: white;
  font-size: 44px;
  z-index: 1;
`

export default FeaturedImg;
