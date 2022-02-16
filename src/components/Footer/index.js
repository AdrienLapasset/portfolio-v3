import React from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const StyleContainer = styled.section`
  color: ${props => props.theme.colors.grey};
  text-align: center;
  margin-bottom: 15px;
  font-size: 14px;
  a {
    color: ${props => props.theme.colors.grey};
    font-size: 14px;
  }
`
const StyledHeart = styled.span`
  font-size: 10px;
`
const StyledBr = styled.br`
  ${breakpoint('sm')`
    display: none;
  `}
`
const StyledAuthor = styled.span`
  display: inline-block;
  margin-top: 3px;
  ${breakpoint('sm')`
    margin-left: 10px;
  `}
`

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <StyleContainer>
      Made with <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby</a> and <StyledHeart role="img" aria-label="love">❤️</StyledHeart><StyledBr /><StyledAuthor>© {currentYear} Adrien Lapasset</StyledAuthor>
    </StyleContainer>
  );
}

export default Footer;
