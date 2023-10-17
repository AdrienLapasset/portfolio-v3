import React from "react";
import styled, { css } from "styled-components";

const Category = ({ category, className }) => {
  const categories = [
    { name: "react", url: "https://fr.reactjs.org/" },
    { name: "gatsby", url: "https://www.gatsbyjs.com/" },
    { name: "wordpress", url: "https://fr.wordpress.org/" },
    { name: "jamstack", url: "https://jamstack.org/" },
    { name: "styled components", url: "https://styled-components.com/" },
    { name: "contentful", url: "https://www.contentful.com" },
    { name: "figma", url: "http://figma.com" },
    { name: "sanity", url: "https://www.sanity.io" },
    { name: "netlify", url: "https://www.netlify.com" },
  ];

  const thisCategory = categories.find((item) => item.name === category);

  if (thisCategory !== undefined) {
    return (
      <StyledCategoryLink
        href={thisCategory.url}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {category}
      </StyledCategoryLink>
    );
  } else {
    return <StyledCategory className={className}>{category}</StyledCategory>;
  }
};

const StyledCategoryStyle = css`
  font-size: 10px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 3px 7px;
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 7px;
`;

const StyledCategory = styled.span`
  ${StyledCategoryStyle}
`;
const StyledCategoryLink = styled.a`
  ${StyledCategoryStyle}
`;

export default Category;
