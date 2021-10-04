import data from "./data.json";
import { Component } from "react";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnId: "search",
      inputFieldId: "searchBox",
    };
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
    document.getElementById(this.state.inputFieldId).value = item;
    document.getElementById(this.state.btnId).click();
  }
  getItems() {
    return this.props.data.map((item) => (
      <div key={item}>
        <p href="" id={item + "Link"} onClick={() => this.handleClick(item)}>
          {data[item].name}
        </p>
      </div>
    ));
  }
}

export default History;
