import React, { Component } from "react";
import { BsArrowUp } from "react-icons/Bs";
class ScrollToTop extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ isVisible: true });
    } else {
      this.setState({ isVisible: false });
    }
  };
  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  render() {
    return (
      <div>
        <button
          onClick={this.scrollToTop}
          id="myBtn"
          title="Go to top"
          style={{
            display: this.state.isVisible ? "block" : "none",
            position: "fixed",
            bottom: "10px",
            right: "30px",
            zIndex: "99",
            border: "none",
            outline: "none",
            cursor: "pointer",
          }}
        >
          <BsArrowUp className="w-7 h-16" />
        </button>
      </div>
    );
  }
}
export default ScrollToTop;
