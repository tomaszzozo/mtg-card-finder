import { Component } from "react";
import Card from "./Card";
import data from "./data.json";
import History from "./History";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: JSON.parse(JSON.stringify(data)),
      searchRequest: "blank",
      history: [],
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

        <br></br>

        <input
          id="clearHistoryBtn"
          type="button"
          value="Wyczyść historię"
          onClick={() => this.clearHistory()}
        />

        <History data={this.state.history}></History>
      </div>
    );
  }
  handleClick(input) {
    input = input.trim().toLowerCase();
    if (input === "") {
      return;
    } else if (!(input in this.state.cards)) {
      alert('Nie znaleziono karty "' + input + '"!');
      return;
    }
    this.setState(
      {
        searchRequest: input,
        history: this.state.history.includes(input)
          ? this.state.history
          : this.state.history.concat(input),
      },
      this.forceUpdate
    );
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
  clearHistory() {
    this.setState(
      {
        history: [],
      },
      this.forceUpdate
    );
  }
}

export default Body;
