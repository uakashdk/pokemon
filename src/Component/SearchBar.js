import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by ID or name"
        value={searchTerm}
        onChange={handleChange}
        className="w-40 border rounded-2xl text-black mt-10"
      />
      <button type="submit" className=" bg-cyan-600 text-white  border rounded-2xl w-20 py-1 ml-2">Search</button>
    </form>
  );
};

export default SearchBar;
