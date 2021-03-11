import React from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <StyleContainer>
      Made with <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby</a> and <span>❤️</span> <StyledBr />© {currentYear} Adrien Lapasset
    </StyleContainer>
  );
}

const StyleContainer = styled.section`
  color: ${props => props.theme.colors.grey};
  text-align: center;
  margin-bottom: 15px;
  a {
    color: ${props => props.theme.colors.grey};
    font-size: 16px;
  }
  span {
    font-size: 12px;
  }
`
const StyledBr = styled.br`
  ${breakpoint('sm')`
    display: none;
  `}
`

export default Footer;
