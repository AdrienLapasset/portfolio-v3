import React from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const Category = ({ category, className }) => {
  return (
    <StyledCategory className={className}>{category}</StyledCategory>
  );
}

const StyledCategory = styled.span`
  font-size: 10px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 3px 7px;
  text-transform: uppercase;
  ${breakpoint('sm')`
    border-radius: 8px;
    padding: 5px 10px;
    font-size: 14px;
  `}
`

export default Category;
