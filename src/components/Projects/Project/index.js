import React from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

import GithubIcon from '../../../assets/icons/github.js';
import ArrowIcon from '../../../assets/icons/arrowIcon.js';
import Category from './Category';
import FeaturedImg from './FeaturedImg';

const Project = ({ project }) => {
  const categories = project.categories
  const categoriesRender = categories.map((category, index) => {
    return (
      <Category category={category} />
    )
  })

  return (
    <StyledContainer>

      {/* Left */}
      <StyledLink href={project.siteUrl} target="_blank"
        rel="noopener noreferrer">
        <FeaturedImg project={project} />
      </StyledLink>

      {/* Right */}
      <StyledInfoContainer>
        <StyledCategoryContainer>
          {categoriesRender}
        </StyledCategoryContainer>
        <p>{project.description}</p>
        <StyledIconsContainer>
          <StyledIconContainer href={project.repoUrl} target="_blank"
            rel="noopener noreferrer">
            <GithubIcon />
          </StyledIconContainer>
          <StyledIconContainer href={project.siteUrl} target="_blank"
            rel="noopener noreferrer" >
            <ArrowIcon />
          </StyledIconContainer>
        </StyledIconsContainer>
      </StyledInfoContainer>

    </StyledContainer>
  );
}

const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
  width: 100%;
  ${breakpoint('lg')`
    flex-direction: row;
  `}
`
const StyledInfoContainer = styled.aside`
  align-self: center;
  width: 100%;
  max-width: 464px;
  ${breakpoint('lg')`
    flex: 0 0 50%;
    padding-left: 20px;
    p {
      font-size: 24px
    }
  `}
`
const StyledCategoryContainer = styled.div`
  margin-bottom: 15px;
  > :not(:last-child) {
    margin-right: 7px;
    ${breakpoint('lg')`
      margin-right: 15px;
    `}
  }
`
const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin-bottom: 30px;
  ${breakpoint('lg')`
    flex: 0 0 50%;
    padding-right: 20px;
    justify-content: flex-end;
    margin-bottom: 0;
  `}
`
const StyledIconContainer = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 38px;
  border: none;
  display: flex;
  justify-content:center;
  align-items: center;
  background-color: black;
  fill: white;
  margin-right: 10px;
`
const StyledIconsContainer = styled.div`
  margin-top: 20px;
  display: flex;
`

export default Project;
