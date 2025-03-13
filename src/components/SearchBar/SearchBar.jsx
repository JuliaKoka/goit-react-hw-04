import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

import css from "./SearchBar.module.css";

const notify = () => toast("Please enter an image name!");

export default function SearchBar({ onSubmit, setLoading, setError }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;

    const value = form.elements.search.value.trim();

    if (!value) {
      notify();
      return;
    }

    onSubmit(value, []);
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            query: value,
            client_id: import.meta.env.VITE_API_KEY,
            per_page: 12,
          },
        }
      );

      console.log(response.data);
      onSubmit(value, response.data.results);
    } catch (error) {
      console.error("Something went wrong", error);
      setError(true);
    } finally {
      setLoading(false);
    }

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
