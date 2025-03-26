import css from "./App.module.css";

import * as Spinners from "react-loader-spinner";
import axios from "axios";
import Modal from "react-modal";
import { fetchInfo } from "../../images-api";

import SearchBar from "../SearchBar/SearchBar";

import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { useEffect, useState } from "react";
import ImageModal from "../ImageModal/ImageModal";

Modal.setAppElement("#root");

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLastPage, setIsLastPage] = useState(false);

  const handleSearch = (value) => {
    setSearchValue(value);
    setImages([]);
    setPage(1);
    setIsLastPage(false);
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

        if (imagePage.length < 12) {
          setIsLastPage(true);
        }
      } catch (error) {
        console.error("Something went wrong", error);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [searchValue, page]);

  const openTheImage = (imageUrl) => {
    setSelectedImage(imageUrl);

    openModal();
    console.log("Открытие модалки");
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    console.log("Closing модалки");
  }

  return (
    <div className={css.container}>
      <SearchBar
        onSubmit={handleSearch}
        setLoading={handleLoading}
        setError={handleError}
      />
      {images.length > 0 && (
        <ImageGallery searchedItem={images} showFullSize={openTheImage} />
      )}
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          selectedImage={selectedImage}
        />
      )}

      {loading && <Loader />}

      {error && (
        <ErrorMessage
          message={"Error has occurred - please refresh this page!"}
        />
      )}
      {/* {images.length > 0 && <LoadMoreBtn handleLoadMore={handlePage} />} */}
      {images.length > 0 && !isLastPage && (
        <LoadMoreBtn handleLoadMore={handlePage} />
      )}
    </div>
  );
}
