import React from 'react';
import styled from 'styled-components'

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

      <StyledLink href={project.siteUrl} target="_blank"
        rel="noopener noreferrer">
        <FeaturedImg project={project} />
      </StyledLink>

      <StyledInfoContainer>
        <StyledCategoryContainer>
          {categoriesRender}
        </StyledCategoryContainer>
        <p>{project.description}</p>

        <StyledIconsContainer>
          <StyledIconContainer href={project.repoUrl} target="_blank"
            rel="noopener noreferrer">
            <StyledGithubIcon />
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
  margin-bottom: 100px;
  width: 100%;
  height: 295px;
`
const StyledInfoContainer = styled.aside`
  align-self: center;
  p {
    font-size: 24px
  }
`
const StyledCategoryContainer = styled.div`
  margin-bottom: 15px;
  > :not(:last-child) {
    margin-right: 15px;
  }
`
const StyledLink = styled.a`
  display: block;
  flex: 0 0 540px;
  text-decoration: none;
`
const StyledGithubIcon = styled(GithubIcon)`
  fill: red;
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
