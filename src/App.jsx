import React, { Component, Fragment } from "react";
import "./App.scss";

import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    try {
      (async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const jsonData = await response.json();
        await this.setState({ monsters: jsonData });
      })();
    } catch (error) {
      console.log(error);
    }
  }

  onChangeHandler = (event) => {
    this.setState(
      {
        searchField: event.target.value,
      },
      () => console.log(this.state)
    );
  };

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    if (this.state.monsters.length === 0) {
      return <div className="loading">Loading</div>;
    }
    return (
      <Fragment>
        <header>
          <h1>Monster Rolodex</h1>
          <SearchBox onchange={this.onChangeHandler} />
        </header>
        <CardList monsters={filteredMonsters} />
      </Fragment>
    );
  }
}
export default App;
