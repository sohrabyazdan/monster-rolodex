import React from "react";
import PropTypes from "prop-types";
import { GridStyle } from "./card-list.style";

import Card from "../card/card.components";

export const CardList = ({ monsters }) => {
  return (
    <GridStyle>
      {monsters.map((monster, index) => {
        return <Card key={index} monster={monster} />;
      })}
    </GridStyle>
  );
};
export default CardList;

CardList.propTypes = {
  monsters: PropTypes.any,
};
