import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";
import s from "./SearchBar.module.css"

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
      <header className={s.searchBar}>
        <form className={s.searchBarForm} onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            autoComplete="off"
            autoFocus={true}
            placeholder="Search images and photos"
            className={s.searchBarInput}
          />
          <button type="submit" className={s.searchBarButton}>Search</button>
        </form>
        {loading  && <Loader />}
        <Toaster />
      </header>
    </>
  );
}
