import React, { Component } from "react";
import Observer from "fontfaceobserver";

import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  isFooterShowed = false;

  componentDidMount() {
    const font = new Observer("Regular-Semibold");
    font.load(null, 100000).then(() => {
      this.setState({ isFontLoaded: true });
    });

    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth < 992) {
      this.setState({ isMobile: true });
    }
    if (window.innerWidth >= 992) {
      this.setState({ isMobile: false });
    }
  }

  handleFooterShowed = (isFooterShowed) => {
    this.isFooterShowed = isFooterShowed;
  };

  render() {
    return (
      <div className="App">
        {this.state.isFontLoaded ? <Header /> : ""}
        <Home isFontLoaded={this.state.isFontLoaded} />
        {this.state.isFontLoaded ? (
          <>
            <Projects />
            <Footer />
          </>
        ) : null}
      </div>
    );
  }
}

export default App;
