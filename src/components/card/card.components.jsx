import React from "react";
import PropTypes from "prop-types";
import { CartItem, H3Style } from "./card.style";

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <CartItem>
      <img src={`https://robohash.org/${id}?set=set2`} />
      <H3Style>{name}</H3Style>
      <p>{email}</p>
    </CartItem>
  );
};

export default Card;

Card.propTypes = {
  monster: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
};
