import React from 'react';
import styled from 'styled-components'

const Category = ({ category, className }) => {
  return (
    <StyledCategory className={className}>{category}</StyledCategory>
  );
}

const StyledCategory = styled.span`
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 14px;
  text-transform: uppercase;
`

export default Category;
