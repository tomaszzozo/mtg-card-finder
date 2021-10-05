import { Component } from "react";

class NumericButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    };
  }
  render() {
    return (
      <div>
        <input
          type="button"
          value="1"
          onClick={() => this.handleClick("1")}
        ></input>
        <input
          type="button"
          value="2"
          onClick={() => this.handleClick("2")}
        ></input>
        <input
          type="button"
          value="3"
          onClick={() => this.handleClick("3")}
        ></input>
        <br></br>
        <input
          type="button"
          value="4"
          onClick={() => this.handleClick("4")}
        ></input>
        <input
          type="button"
          value="5"
          onClick={() => this.handleClick("5")}
        ></input>
        <input
          type="button"
          value="6"
          onClick={() => this.handleClick("6")}
        ></input>
        <br></br>
        <input
          type="button"
          value="7"
          onClick={() => this.handleClick("7")}
        ></input>
        <input
          type="button"
          value="8"
          onClick={() => this.handleClick("8")}
        ></input>
        <input
          type="button"
          value="9"
          onClick={() => this.handleClick("9")}
        ></input>
        <br></br>
        <input
          type="button"
          value="del"
          onClick={() => this.handleClick("delete")}
        ></input>
        <input
          type="button"
          value="0"
          onClick={() => this.handleClick("0")}
        ></input>
        <input
          type="button"
          value="⌫"
          onClick={() => this.handleClick("backspace")}
        ></input>
      </div>
    );
  }
  handleClick(number) {
    if (number === "delete") {
      document.getElementById(this.props.searchBoxId).value = "";
    } else if (number == "backspace") {
      document.getElementById(this.props.searchBoxId).value = document
        .getElementById(this.props.searchBoxId)
        .value.substring(
          0,
          document.getElementById(this.props.searchBoxId).value.length - 1
        );
    } else {
      document.getElementById(this.props.searchBoxId).value += number;
    }
  }
}

export default NumericButtons;
