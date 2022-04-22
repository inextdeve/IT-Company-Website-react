import { Component } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";
class About extends Component {
  constructor() {
    super();
    this.state = {
      percentage: 75
    };
  }
  render() {
    return (
      <section className="about__container">
        <div className="container">
          <div>
            <h1>Advance Innovation For IT Solutions</h1>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              eligendi molestiae ex harum, sed animi at aliquam quaerat odit
              repudiandae dicta veniam, beatae aliquid, voluptatum nostrum saepe
              doloribus excepturi. Facere!
            </p>
            <div className="about__buttons">
              <button className="btn btn-primary">Get In Touch</button>
              <a href="#services">
                <span>Our Services</span>
                <AiOutlineArrowDown />
              </a>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="about__image">
              <img
                src="https://st4.depositphotos.com/17586788/i/600/depositphotos_247586928-stock-photo-a-successful-business-girl-in.jpg"
                alt="about"
              />
            </div>
            <div className="about__progress">
              <div className="progress_bar">
                <CircularProgressbar
                  value={this.state.percentage}
                  text={`${this.state.percentage}%`}
                />
              </div>
              <h4>
                Business Growth
                <br />
                <small>Level is high</small>
              </h4>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
