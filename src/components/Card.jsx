import { Component } from "react";

function NewlineText(props) {
  return props.text.split("\n").map((str) => (
    <p className="abilityText" key={str}>
      {str}
    </p>
  ));
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2 id="cardTitle"> {this.props.header}</h2>
        <img id="cardImage" src={this.props.image} alt=""></img>
        <h3 id="abilityHeader">{this.props.text === "" ? "" : "Zdolności"}</h3>
        <NewlineText text={this.props.text}></NewlineText>
      </div>
    );
  }
}

export default Card;
