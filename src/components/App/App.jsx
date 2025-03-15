import css from "./App.module.css";

import * as Spinners from "react-loader-spinner";
import axios from "axios";
import { fetchInfo } from "../../images-api";

import SearchBar from "../SearchBar/SearchBar";

import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { useEffect, useState } from "react";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const handleSearch = (value) => {
    setSearchValue(value);
    setImages([]);
    setPage(1);
  };

  const handleLoading = (loadingStatus) => {
    setLoading(loadingStatus);
  };

  const handleError = (errorStatus) => {
    setError(errorStatus);
  };

  const handlePage = (loadMore) => {
    setPage(page + 1);
    console.log(page);
  };

  useEffect(() => {
    if (searchValue === "") {
      return;
    }

    async function fetchImages() {
      setLoading(true);
      try {
        const imagePage = await fetchInfo(searchValue, page);

        setImages((prevImages) => [...prevImages, ...imagePage]);
      } catch (error) {
        console.error("Something went wrong", error);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [searchValue, page]);

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
      {images.length > 0 && <LoadMoreBtn handleLoadMore={handlePage} />}
    </div>
  );
}
