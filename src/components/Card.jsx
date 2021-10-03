import { Component } from "react";

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
        <h3>Zdolności</h3>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Card;
