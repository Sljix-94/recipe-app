import React, { useRef } from "react";
import { TFilter } from "../../IRecipe/IRecipe";

const Filter: React.FC<TFilter> = (props) => {
  const inputRef = useRef!<HTMLInputElement>(null);

  const onChangeFilter = () => {
    if (typeof inputRef.current?.value === "string") {
      props.onFilterHandler(inputRef.current.value);
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} onChange={onChangeFilter} />
    </div>
  );
};
export default Filter;
