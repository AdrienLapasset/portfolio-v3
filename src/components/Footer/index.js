import React from 'react';
import styled from 'styled-components'

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <StyleContainer>
      © {currentYear} Adrien Lapasset
    </StyleContainer>
  );
}

const StyleContainer = styled.section`
  color: ${props => props.theme.colors.grey};
  text-align: center;
  margin-bottom: 15px;
`

export default Footer;
