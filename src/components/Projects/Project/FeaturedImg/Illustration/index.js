import React from 'react';
import styled from 'styled-components'

const Illustration = ({ className }) => {
  return (
    <StyledSvg className={className} width="484px" height="284px" viewBox="0 0 484 284" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>Rectangle</title>
      <desc>Created with Sketch.</desc>
      <g id="Home" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g id="2019" transform="translate(-782.000000, -1186.000000)" stroke="#000000" stroke-width="4">
          <rect id="Rectangle" x="784" y="1188" width="480" height="280" rx="20"></rect>
        </g>
      </g>
    </StyledSvg>
  );
}

const StyledSvg = styled.svg`
  position: absolute;
  top: -15px;
  left: -15px;
  stroke-dasharray: 752;		
  stroke-dashoffset: 1910;
  transition: stroke-dashoffset .4s ease-out;		

`

export default Illustration;
