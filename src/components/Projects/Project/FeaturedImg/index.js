import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import breakpoint from "styled-components-breakpoint";

import Illustration from "./Illustration";

const FeaturedImg = ({ project }) => {
  return (
    <SyledHoverContainer>
      <StyledContainer>
        <Illustration />
        <StyledImageContainer
          style={{ backgroundPosition: "" }}
          preserveStackingContext
          fluid={project.featuredImage.childImageSharp.fluid}
        >
          <StyledDarken />
          <StyledTitle>{project.title}</StyledTitle>
        </StyledImageContainer>
      </StyledContainer>
    </SyledHoverContainer>
  );
};

const StyledDarken = styled.div`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.2s linear;
`;
const StyledTitle = styled.h3`
  text-align: center;
  text-transform: capitalize;
  color: white;
  font-size: 35px;
  font-weight: 400;
  z-index: 1;
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
`;
const StyledContainer = styled.div`
  position: relative;
  height: 280px;
  width: 100%;
  max-height: 100%;
  transition: padding 0.4s ease-out, width 0.4s ease-out,
    max-height 0.4s ease-out;
  cursor: pointer;
  margin: auto;
  ${breakpoint("sm")`
    width: 468px;
    padding: 8px 8px 0 8px;
  `}
`;
const SyledHoverContainer = styled.div`
  height: 300px;
  width: 100%;
  &:hover ${StyledContainer} {
    ${breakpoint("lg")`
    max-height: 276px;
    width: 476px;
    padding: 4px 4px 0 4px;
    svg {
      stroke-dasharray: 1490;		
    }
    `}

    ${StyledDarken} {
      opacity: 0;
    }

    ${StyledTitle} {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
`;
const StyledImageContainer = styled(BackgroundImage)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  overflow: hidden;
  height: 100%;
  z-index: 1;
  background-position: top;
`;

export default FeaturedImg;
