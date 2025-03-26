import css from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }) {
  return (
    <div>
      <p className={css.message}>{message}</p>
    </div>
  );
}
