import React, { Fragment, useEffect, useState } from "react";
import { HeaderStyle, H1Style, MainStyle, ContainerStyle } from "./App.styles";

import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("Monster Rolodex");

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const jsonData = await response.json();
        setMonsters(jsonData);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onChangeHandler = (event) => {
    const searchField = event.target.value;
    setSearchField(searchField);
    searchField.length !== 0
      ? setTitle(searchField)
      : setTitle("Monster Rolodex");
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.includes(searchField)
  );

  console.log(filteredMonsters.length);

  return (
    <Fragment>
      <HeaderStyle>
        <H1Style>{title}</H1Style>
        <SearchBox
          onchange={onChangeHandler}
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
};
export default App;
