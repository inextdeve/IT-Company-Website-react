import { Component } from "react";
import Button from "../Global__Components/Button";
import { RiSearchLine } from "react-icons/ri";
class Search extends Component {
  constructor() {
    super();
    this.state = { visible: false };
    this.toggleSearchBox = this.toggleSearchBox.bind(this);
  }
  toggleSearchBox() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    return (
      <div className={`search ${this.state.visible ? "visible" : ""}`}>
        <div className="search__container">
          <div className="search__button">
            <a href="#" onClick={this.toggleSearchBox}>
              <RiSearchLine />
            </a>
          </div>
          <div className={`search__box ${this.state.visible ? "visible" : ""}`}>
            <input type="text" />
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
