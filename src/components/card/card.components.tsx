import React from "react";

import { CartItem, H3Style } from "./card.style";
import { Monster } from "../../utils/types";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;
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
