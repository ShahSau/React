import { getSuggestedQuery } from "@testing-library/react";
import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters..."
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autofocus
        />
      </form>
    </section>
  );
};

export default Search;
