import css from "./ErrorMessage.module.css";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Error has occured!");

export default function ErrorMessage() {
  notify();
  return (
    <div>
      <p>error</p>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
    </div>
  );
}
