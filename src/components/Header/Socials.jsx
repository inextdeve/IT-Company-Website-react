import { Component } from "react";
import { CgInstagram } from "react-icons/cg";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

class Socials extends Component {
  render() {
    return (
      <div className="socials">
        <a href="https://instagram.com" target="_blank">
          <CgInstagram />
        </a>
        <a href="https://twitter.com" target="_blank">
          <AiFillTwitterSquare />
        </a>
        <a href="https://facebook.com" target="_blank">
          <AiFillFacebook />
        </a>
      </div>
    );
  }
}
export default Socials;
