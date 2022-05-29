import React from "react";
import PropTypes from "prop-types";
import "./card.styles.scss";

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="card-item">
      <img src={`https://robohash.org/${id}?set=set2`} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Card;

Card.propTypes = {
  monster: PropTypes.any,
  id: PropTypes.string,
  name: PropTypes.string,
};
