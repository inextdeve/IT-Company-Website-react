import { Component } from "react";
import "./style__work.css";
class Work extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="portfolio__work">
        <img src={this.props.img} alt="" />
        <h2>{this.props.title}</h2>
        <p className="text">{this.props.text}</p>
      </div>
    );
  }
}
export default Work;
