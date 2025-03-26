import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { fetchInfo } from "../../images-api";

import css from "./SearchBar.module.css";

const notify = () => toast("Please enter an image name!");
const notifyError = () =>
  toast.error("No images at your request! Please look for something else.");

export default function SearchBar({ onSubmit, setLoading, setError }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;

    const value = form.elements.search.value.trim();

    if (!value) {
      notify();
      return;
    }

    onSubmit(value);
    setLoading(true);

    try {
      const imageData = await fetchInfo(value);

      if (imageData.length === 0) {
        notifyError();
        console.log("it's empty!");
      }

      console.log("check", imageData);
    } catch (error) {
      console.error("Something went wrong", error);
      setError(true);
    } finally {
      setLoading(false);
    }

    form.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.container} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
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
