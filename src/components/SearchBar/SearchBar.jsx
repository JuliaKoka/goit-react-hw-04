import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

import css from "./SearchBar.module.css";

const notify = () => toast("Please enter an image name!");

export default function SearchBar({}) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;

    const value = form.elements.search.value;

    if (value === "") {
      {
        notify();
      }
    } else {
      console.log(value);
    }

    const response = await axios.get(
      "https://api.unsplash.com/photos/?client_id=dWvq-dBawTsMy2U-Qg8NlrlHG506RiMd5FokgNOn8DY"
    );
    console.log(response);

    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
    </header>
  );
}
