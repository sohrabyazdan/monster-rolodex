import React, { Fragment, useEffect, useState, ChangeEvent } from "react";
import { HeaderStyle, H1Style, MainStyle, ContainerStyle } from "./App.styles";

import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";
import { Monster } from "./utils/types";

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const monstersURL = "https://jsonplaceholder.typicode.com/users";
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("Monster Rolodex");

  useEffect(() => {
    try {
      (async () => {
        const data = await getData<Monster[]>(monstersURL);
        setMonsters(data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchField = event.target.value;
    setSearchField(searchField);
    searchField.length !== 0
      ? setTitle(searchField)
      : setTitle("Monster Rolodex");
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <Fragment>
      <HeaderStyle>
        <H1Style>{title}</H1Style>
        <SearchBox
          type="search"
          className="input-search"
          placeholder="Enter monster name"
          onChangeHandler={onChangeHandler}
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
