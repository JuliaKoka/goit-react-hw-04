import css from "./App.module.css";

import * as Spinners from "react-loader-spinner";
import axios from "axios";

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

  const handleSearch = (value, results) => {
    setSearchValue(value);
    setImages(results);
    setPage(1);
    // setImages([]);
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
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              query: searchValue,
              client_id: import.meta.env.VITE_API_KEY,
              per_page: 12,
              page: page, // теперь при изменении page загружаются новые картинки
            },
          }
        );

        console.log(response.data);
        setImages((prevImages) => [...prevImages, ...response.data.results]); // добавляем новые картинки в список
      } catch (error) {
        console.error("Something went wrong", error);
        setError(true);
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
