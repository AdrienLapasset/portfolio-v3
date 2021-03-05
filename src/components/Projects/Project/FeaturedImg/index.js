import React from 'react';
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import breakpoint from 'styled-components-breakpoint';

import Illustration from './Illustration';

const FeaturedImg = ({ project }) => {
  return (
    <SyledHoverContainer>
      <StyledContainer>
        <Illustration />
        <StyledImageContainer preserveStackingContext fluid={project.featuredImage.childImageSharp.fluid}>
          <StyledDarken />
          <StyledTitle>{project.title}</StyledTitle>
        </StyledImageContainer>
      </StyledContainer>
    </SyledHoverContainer>
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
const StyledTitle = styled.h3`
  color: white;
  font-size: 44px;
  z-index: 1;
  transition: opacity .4s ease-out, transform .4s ease-out;
`
const StyledContainer = styled.div`
  position: relative;
  width: 468px;
  height: 280px;
  max-height: 100%;
  transition: padding .4s ease-out, width .4s ease-out, max-height .4s ease-out;
  cursor: pointer;
  ${breakpoint('sm')`
    padding: 8px 8px 0 8px;
  `}
`
const SyledHoverContainer = styled.div`
  height: 300px;
  &:hover ${StyledContainer} {
    max-height: 276px;
    width: 476px;
    padding: 4px 4px 0 4px;
    ${StyledDarken} {
      opacity: 0;
    }
     svg {
      stroke-dasharray: 1490;		
    }
    ${StyledTitle} {
      opacity: 0;
      transform: translateY(-20px);
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
  z-index: 1;
`

export default FeaturedImg;
