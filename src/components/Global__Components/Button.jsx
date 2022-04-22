import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className="btn" onClick={this.props.click}>
        {this.props.content}
      </button>
    );
  }
}

export default Button;
