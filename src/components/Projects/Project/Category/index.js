import React from 'react';
import styled, { css } from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const Category = ({ category, className }) => {

  const categories = [
    { name: 'react', url: 'https://fr.reactjs.org/' },
    { name: 'gatsby', url: 'https://www.gatsbyjs.com/' },
    { name: 'wordpress', url: 'https://fr.wordpress.org/' },
    { name: 'jamstack', url: 'https://jamstack.org/' },
    { name: 'styled components', url: 'https://styled-components.com/' },
  ]

  const thisCategory = categories.find(item => item.name === category)

  if (thisCategory !== undefined) {
    return <StyledCategoryLink href={thisCategory.url} className={className} target="_blank" rel="noopener noreferrer">{category}</StyledCategoryLink>
  } else {
    return <StyledCategory className={className}>{category}</StyledCategory>
  }
}

const StyledCategoryStyle = css`
  font-size: 10px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 3px 7px;
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 7px;
  ${breakpoint('sm')`
    border-radius: 8px;
    padding: 5px 10px;
    font-size: 11px;
  `}
`

const StyledCategory = styled.span`
  ${StyledCategoryStyle}
`
const StyledCategoryLink = styled.a`
  ${StyledCategoryStyle}
`

export default Category;
