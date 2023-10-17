import React from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import GithubIcon from "../../../assets/icons/github.js";
import ArrowIcon from "../../../assets/icons/arrowIcon.js";
import Category from "./Category";
import FeaturedImg from "./FeaturedImg";

const Project = ({ project, projectContent }) => {
  const categories = project.categories;
  const categoriesRender = categories.map((category, index) => {
    return <Category key={index} category={category} />;
  });

  return (
    <StyledContainer>
      {/* Left */}
      <StyledLink
        href={project.siteUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FeaturedImg project={project} />
      </StyledLink>

      {/* Right */}
      <StyledInfoContainer>
        <StyledCategoryContainer>{categoriesRender}</StyledCategoryContainer>
        <StyledDescription>{project.description}</StyledDescription>
        <StyledContent dangerouslySetInnerHTML={{ __html: projectContent }} />
        <StyledIconsContainer>
          <StyledIconContainer
            href={project.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowIcon />
          </StyledIconContainer>
          {project.repoUrl ? (
            <StyledIconContainer
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </StyledIconContainer>
          ) : null}
        </StyledIconsContainer>
      </StyledInfoContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
  width: 100%;
  ${breakpoint("lg")`
    height: 290px;
    flex-direction: row;
  `}
`;
const StyledInfoContainer = styled.aside`
  align-self: center;
  width: 100%;
  max-width: 464px;
  ${breakpoint("lg")`
    flex: 0 0 50%;
    padding-left: 20px;
  `}
`;
const StyledDescription = styled.p`
  margin-bottom: 2px;
  ${breakpoint("md")`
    font-size: 20px
  `}
`;
const StyledContent = styled.div`
  a {
    text-decoration: none;
  }
  ${breakpoint("md")`
    p, a {
      font-size: 16px
    }
  `}
`;
const StyledCategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  > :not(:last-child) {
    margin-right: 7px;
  }
`;
const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  ${breakpoint("sm")`
    margin-bottom: 10px;
  `}
  ${breakpoint("lg")`
    flex: 0 0 50%;
    justify-content: flex-end;
    margin-bottom: 0;
  `}
`;
const StyledIconContainer = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 38px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  fill: white;
  margin-right: 10px;
  svg {
    width: 18px;
  }
`;
const StyledIconsContainer = styled.div`
  margin-top: 30px;
  display: flex;
`;

export default Project;
