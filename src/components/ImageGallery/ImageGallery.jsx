import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ searchedItem }) {
  return (
    <ul>
      {searchedItem.map((item) => {
        return (
          <li key={item.id}>
            <ImageCard
              url={item.urls.small}
              description={item.alt_description}
            />
          </li>
        );
      })}
    </ul>
  );
}
