import React from "react";
import PropTypes from "prop-types";
import { CartItem, H3Style } from "./card.style";

const Card = ({ monster: { id, name, email } }) => {
  return (
    <CartItem>
      <img
        src={`https://robohash.org/${id}?set=set2`}
        width="200"
        height="200"
      />
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
