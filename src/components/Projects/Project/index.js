import React from 'react';
import styled from 'styled-components'

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
      <StyledLink href={project.siteUrl}>
        <FeaturedImg project={project} />
      </StyledLink>
      <StyledInfoContainer>
        <StyledCategoryContainer>
          {categoriesRender}
        </StyledCategoryContainer>
        <p>{project.description}</p>
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

export default Project;
