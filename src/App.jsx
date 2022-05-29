import React, { Component, Fragment } from "react";
import {
  HeaderStyle,
  H1Style,
  Loading,
  MainStyle,
  ContainerStyle,
} from "./App.styles";

import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.component";

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
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    if (this.state.monsters.length === 0) {
      return <Loading>Loading</Loading>;
    }
    return (
      <Fragment>
        <HeaderStyle>
          <H1Style>Monster Rolodex</H1Style>
          <SearchBox
            onchange={this.onChangeHandler}
            placeholder="Enter monster name"
          />
        </HeaderStyle>
        <MainStyle>
          <ContainerStyle>
            <CardList monsters={filteredMonsters} />
          </ContainerStyle>
        </MainStyle>
      </Fragment>
    );
  }
}
export default App;
