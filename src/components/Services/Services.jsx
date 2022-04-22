import { Component } from "react";
import Intro from "./Intro";
import ServicesComp from "./Services__Comp";
import "./style.css";
class Services extends Component {
  render() {
    return (
      <section id="services" className="container container__services">
        <Intro />
        <ServicesComp />
      </section>
    );
  }
}
export default Services;
