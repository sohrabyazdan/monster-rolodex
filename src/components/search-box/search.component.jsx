import React from "react";
import PropTypes from "prop-types";

import "./search.style.scss";

const SearchBox = ({ onchange }) => {
  return (
    <input type="search" placeholder="Enter monster name" onChange={onchange} />
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onchange: PropTypes.any,
};
