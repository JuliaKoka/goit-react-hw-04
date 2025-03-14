import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ handleLoadMore }) {
  return <button onClick={handleLoadMore}>Load more</button>;
}
