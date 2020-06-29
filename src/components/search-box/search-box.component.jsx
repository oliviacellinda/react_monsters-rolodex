import React from "react";

import "./search-box.styles.css";

// Functional components
// This component only gets props and then return some HTML
// It doesn't have access to constructor method, life cycle method like in class components

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
