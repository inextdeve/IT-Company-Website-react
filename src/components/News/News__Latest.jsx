import { Component } from "react";

class LatestNews extends Component {
  render() {
    return (
      <div className="news__latest__feed">
        <img src={this.props.img} alt="" />
        <div>
          <div className="feed_info">
            <span>{this.props.date}</span>
            <span>By {this.props.author}</span>
          </div>
          <p className="text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default LatestNews;
