import css from "./App.module.css";

import * as Spinners from "react-loader-spinner";

import SearchBar from "../SearchBar/SearchBar";

import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

export default function App() {
  return (
    <div>
      <SearchBar />
      <ImageGallery />
      <Loader />
      {/* <ErrorMessage /> */}
      <LoadMoreBtn />
    </div>
  );
}
