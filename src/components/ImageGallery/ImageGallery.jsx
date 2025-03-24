import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ searchedItem, showFullSize }) {
  const handleClick = (imageUrl) => {
    showFullSize(imageUrl);
  };

  return (
    <ul className={css.container}>
      {searchedItem.map((item) => {
        return (
          <li key={item.id} className={css.card}>
            <ImageCard
              url={item.urls.small}
              description={item.alt_description}
              onClick={() => handleClick(item.urls.regular)}
            />
          </li>
        );
      })}
    </ul>
  );
}
