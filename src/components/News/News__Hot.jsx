import { Component } from "react";

class HotNews extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="news__hot__feed">
        <h3>{this.props.title}</h3>
        <p className="text">{this.props.text}</p>
        <div className="news__hot__feed__author">
          <img src={this.props.avatar} alt="" />
          <div>
            <h5>{this.props.author}</h5>
            <span className="text">{this.props.role}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HotNews;
