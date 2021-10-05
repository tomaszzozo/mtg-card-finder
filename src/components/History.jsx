import data from "./data.json";
import { Component } from "react";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Historia wyszukiwania:</h3>
        {this.getItems()}
      </div>
    );
  }
  handleClick(item) {
    document.getElementById(this.props.inputFieldId).value = item;
    document.getElementById(this.props.btnId).click();
  }
  getItems() {
    return this.props.data.map((item) => (
      <div key={item}>
        <p
          class="historyLink"
          href=""
          id={item + "Link"}
          onClick={() => this.handleClick(item)}
        >
          {data[item].name}
        </p>
      </div>
    ));
  }
}

export default History;
