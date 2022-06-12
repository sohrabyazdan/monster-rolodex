import React from "react";
import { GridStyle } from "./card-list.style";

import Card from "../card/card.components";
import { Monster } from "../../utils/types";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
  return (
    <GridStyle>
      {monsters.map((monster, index) => {
        return <Card key={index} monster={monster} />;
      })}
    </GridStyle>
  );
};
export default CardList;
