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
        <p>
          Wpisz kod karty z lewego dolnego rogu lub umiejętność po angielsku z
          małej litery bez kosztów many oraz innych liczb
        </p>
        <input id="searchBox" placeholder="Wpisz coś :)" type="text"></input>
        <br></br>
        <input
          id="search"
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
    input = input.trim();
    if (input === "") {
      return;
    } else if (!(input in this.state.cards)) {
      alert('Nie znaleziono karty "' + input + '"!');
      return;
    }
    this.setState({
      searchRequest: input,
    });
    this.forceUpdate();
  }
  componentDidMount() {
    document
      .getElementById("searchBox")
      .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.key === "Enter") {
          document.getElementById("search").click();
        }
      });
  }
}

export default Body;
