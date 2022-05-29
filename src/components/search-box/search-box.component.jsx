import React from "react";
import PropTypes from "prop-types";
import { Input } from "./search-box.style";

const SearchBox = ({ onchange, placeholder, ...otherProps }) => {
  return (
    <Input
      className="search-input"
      type="search"
      onChange={onchange}
      placeholder={placeholder}
      {...otherProps}
    />
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onchange: PropTypes.func,
  placeholder: PropTypes.string,
};
