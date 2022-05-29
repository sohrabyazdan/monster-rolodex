import React from "react";
import PropTypes from "prop-types";
import "./card-list.style.scss";

import Card from "../card/card.components";

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster, index) => {
        return <Card key={index} monster={monster} />;
      })}
    </div>
  );
};
export default CardList;

CardList.propTypes = {
  monsters: PropTypes.any,
};
