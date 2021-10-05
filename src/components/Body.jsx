import { Component } from "react";
import Card from "./Card";
import data from "./data.json";
import History from "./History";
import NumericButtons from "./NumericButtons";

const searchBoxId = "searchBox";
const searchBtnId = "searchBtn";

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
        <h1>MTG assistant</h1>
        <input
          id={searchBoxId}
          placeholder="Kod lub zdolność karty"
          type="text"
        ></input>
        <br></br>
        <input
          id={searchBtnId}
          type="button"
          value="Szukaj"
          onClick={() =>
            this.handleClick(document.getElementById(searchBoxId).value)
          }
        ></input>
        <br></br>
        <br></br>
        <NumericButtons searchBoxId={searchBoxId}></NumericButtons>

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

        <History
          data={this.state.history}
          inputFieldId={searchBoxId}
          btnId={searchBtnId}
        ></History>
      </div>
    );
  }
  handleClick(input) {
    document.getElementById(searchBoxId).value = "";
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
      .getElementById(searchBoxId)
      .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.key === "Enter") {
          document.getElementById(searchBtnId).click();
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
