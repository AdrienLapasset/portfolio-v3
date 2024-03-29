import React from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Illustration = ({ className }) => {
  return (
    <StyledSvg
      className={className}
      width="484px"
      height="284px"
      viewBox="0 0 484 284"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
      >
        <g
          id="2019"
          transform="translate(-782.000000, -1186.000000)"
          strokeWidth="4"
          className="projectBorder"
        >
          <rect
            id="Rectangle"
            transform="translate(1024.000000, 1328.000000) rotate(-180.000000) translate(-1024.000000, -1328.000000) "
            x="784"
            y="1188"
            width="480"
            height="280"
            rx="20"
          ></rect>
        </g>
      </g>
    </StyledSvg>
  );
};

const StyledSvg = styled.svg`
  display: none;
  position: absolute;
  top: 0px;
  left: 0px;
  stroke-dasharray: 1260;
  stroke-dashoffset: 0;
  transition: stroke-dasharray 0.4s ease-out;
  ${breakpoint("sm")`
    display: block;
  `}
`;

export default Illustration;
