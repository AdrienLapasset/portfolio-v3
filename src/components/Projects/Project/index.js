import React from 'react';
import styled from 'styled-components'

import Category from './Category';
import FeaturedImg from './FeaturedImg';

const Project = ({ project }) => {
  const categories = project.frontmatter.categories
  const categoriesRender = categories.map((category, index) => {
    return (
      <Category category={category} />
    )
  })

  return (
    <StyledContainer>
      <FeaturedImg project={project} />
      <StyledInfoContainer>
        <StyledCategoryContainer>
          {categoriesRender}
        </StyledCategoryContainer>
        <p>{project.frontmatter.description}</p>
      </StyledInfoContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.article`
  display: flex;
  margin-bottom: 100px;
  width: 100%;
  height: 280px;
`
const StyledInfoContainer = styled.aside`
  padding-left: 50px;
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

export default Project;
