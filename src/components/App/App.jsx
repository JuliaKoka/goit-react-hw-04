import css from "./App.module.css";

import * as Spinners from "react-loader-spinner";

import SearchBar from "../SearchBar/SearchBar";

import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { useState } from "react";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = (value, results) => {
    setSearchValue(value);
    setImages(results);
  };

  const handleLoading = (loadingStatus) => {
    setLoading(loadingStatus);
  };

  const handleError = (errorStatus) => {
    setError(errorStatus);
  };

  return (
    <div>
      <SearchBar
        onSubmit={handleSearch}
        setLoading={handleLoading}
        setError={handleError}
      />
      {images.length > 0 && <ImageGallery searchedItem={images} />}
      {loading && <Loader />}
      {error && (
        <ErrorMessage
          message={"Error has occurred - please refresh this page!"}
        />
      )}
      {images.length > 0 && <LoadMoreBtn />}
    </div>
  );
}
