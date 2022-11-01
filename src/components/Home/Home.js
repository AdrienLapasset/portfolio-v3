import React, { Component } from "react";
import breakpoint from "styled-components-breakpoint";
import styled from "styled-components";

import "./Home.scss";
import Illustration from "../Illustration/Illustration";
import SwipeIcon from "./SwipeIcon/SwipeIcon";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
    };
  }

  render() {
    return (
      <div className="Home">
        <Illustration opacity={this.state.opacity} />
        {this.props.isFontLoaded ? (
          <StyledText
            className="Home__text"
            style={{ opacity: this.state.opacity }}
          >
            {/* <p className="Home__text__hello">Bonjour,</p> */}
            <p>Développeur et designer web indépendant.</p>
            <div className="Home__contact">
              <a
                className="Home__contact-btn"
                href="mailto:aflapasset@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Me contacter
              </a>
            </div>
          </StyledText>
        ) : null}
        {this.props.isMobile ? <SwipeIcon /> : null}
      </div>
    );
  }
}

const StyledText = styled.section`
  ${breakpoint("sm")`
    max-width: ${(props) => props.theme.breakpoints.sm}px;
  `}
  ${breakpoint("md")`
    max-width: ${(props) => props.theme.breakpoints.md}px;
  `}
  ${breakpoint("lg")`
    max-width: ${(props) => props.theme.breakpoints.lg}px;
  `}
  ${breakpoint("xl")`
    max-width: ${(props) => props.theme.breakpoints.xl}px;
  `}
`;

export default Home;
