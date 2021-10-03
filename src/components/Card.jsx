import { Component } from "react";

function NewlineText(props) {
  const text = props.text;
  const newText = text.split("\n").map((str) => <p>{str}</p>);

  return newText;
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>{this.props.header}</h2>
        <img src={this.props.image} alt=""></img>
        <h3>{this.props.text === "" ? "" : "Zdolności"}</h3>
        <NewlineText text={this.props.text}></NewlineText>
      </div>
    );
  }
}

export default Card;
