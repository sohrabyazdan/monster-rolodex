import React, { ChangeEventHandler } from "react";
import { Input } from "./search-box.style";

type SearchBoxProps = {
  type?: string;
  className?: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox: React.FC<SearchBoxProps> = ({
  className,
  placeholder,
  onChangeHandler,
  ...otherProps
}) => {
  return (
    <Input
      placeholder={placeholder}
      className={className}
      onChange={onChangeHandler}
      {...otherProps}
    />
  );
};

export default SearchBox;
