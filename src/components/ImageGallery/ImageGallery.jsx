import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery() {
  return (
    <ul>
      {/* Набір елементів списку із зображеннями */}
      <li>
        <div>
          <img src="" alt="" />
        </div>
        <ImageCard />
      </li>
    </ul>
  );
}
