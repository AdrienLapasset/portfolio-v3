import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import styled from "styled-components";

const StyledRay = styled.aside`
  height: 2px;
  width: 28px;
  background-color: black;
  position: absolute;
  transform: rotate(${(props) => props.angle}deg);
`;

const StyledRaysContainer = styled.div`
  transition: all 0.4s;
  transform: translate(-1px, 13px);
  scale: 1;
  height: 25px;
  width: 25px;
`;

const StyledCheckbox = styled.label`
  position: relative;
  cursor: pointer;
  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    &:checked {
      & ~ div {
        &:after {
          width: 14px;
          height: 14px;
          background-color: black;
        }
        &:before {
          background-color: white;
        }
      }
      & ~ ${StyledRaysContainer} {
        scale: 0;
      }
    }
  }
`;

const StyledToggle = styled.div`
  &:before {
    content: "";
    position: absolute;
    top: 4px;
    left: 3px;
    width: 16px;
    height: 16px;
    background-color: black;
    border-radius: 100px;
    border: 2px solid white;
    transition: all 0.4s;
  }
  &:after {
    content: "";
    position: absolute;
    left: -1px;
    top: 4px;
    width: 0;
    height: 0;
    background-color: white;
    border-radius: 100px;
    transition: all 0.4s;
  }
`;

const DarkModeToggler = () => {
  const numberOfRays = 8;
  const angle = 360 / numberOfRays;
  let i = 0;
  let rays = [];
  let currentAngle = 0;
  while (i < numberOfRays) {
    rays.push(currentAngle);
    currentAngle = currentAngle + angle;
    i++;
  }

  const raysRender = rays.map((angle) => {
    return <StyledRay angle={angle} key={angle} />;
  });

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <StyledCheckbox>
          <input
            type="checkbox"
            onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          <StyledRaysContainer>{raysRender}</StyledRaysContainer>
          <StyledToggle />
        </StyledCheckbox>
      )}
    </ThemeToggler>
  );
};

export default DarkModeToggler;
