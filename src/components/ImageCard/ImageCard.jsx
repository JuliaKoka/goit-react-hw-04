import css from "./ImageCard.module.css";

export default function ImageCard({ url, description, onClick }) {
  return (
    <div className={css.galleryImage} onClick={onClick}>
      <img src={url} alt={description} />
    </div>
  );
}
