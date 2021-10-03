import { Component } from "react";
import Card from "./Card";
import data from "./data.json";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: JSON.parse(JSON.stringify(data)),
      searchRequest: "blank",
    };
    if (!(this.state.searchRequest in this.state.cards)) {
      alert(
        'Failure! Can not find key "' +
          this.state.searchRequest +
          '" in data.json file!'
      );
    }
  }
  render() {
    return (
      <div>
        <h1>Tłumacz kart MTG</h1>
        <p>Wpisz kod karty z lewego dolnego rogu</p>
        <input id="searchBox" placeholder="001/999" type="text"></input>
        <br></br>
        <input
          type="button"
          value="Szukaj"
          onClick={() =>
            this.handleClick(document.getElementById("searchBox").value)
          }
        ></input>
        <Card
          header={this.state.cards[this.state.searchRequest].name}
          image={this.state.cards[this.state.searchRequest].img}
          text={this.state.cards[this.state.searchRequest].text}
        ></Card>
      </div>
    );
  }
  handleClick(input) {
    console.log(this.state.expand);
    if (input === "") {
      return;
    }
    this.setState({
      searchRequest: input,
    });
    this.forceUpdate();
  }
}

export default Body;
