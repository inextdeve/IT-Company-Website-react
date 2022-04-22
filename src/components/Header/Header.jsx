import { Component } from "react";
import Contact from "./Contact";
import Socials from "./Socials";
import "./style.css";
class Header extends Component {
  render() {
    return (
      <header>
        <div className="container container__header">
          <Contact />
          <Socials />
        </div>
      </header>
    );
  }
}

export default Header;
