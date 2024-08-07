import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./Loader";

export default function SearchBar({ setSearchText, loading }) {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputVal.trim() === "") {
      toast.error("Please enter a search term");
    } else {
      setSearchText(inputVal);
    }
  };

  return (
    <>
      <header className="search-bar">
        <form className="search-bar-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            autoComplete="off"
            autoFocus={true}
            placeholder="Search images and photos"
            className="search-bar-input"
          />
          <button type="submit" className="search-bar-button">Search</button>
        </form>
        {loading && <Loader />}
        <Toaster />
      </header>
    </>
  );
}
