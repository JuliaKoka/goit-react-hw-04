import css from "./Loader.module.css";

import * as Spinners from "react-loader-spinner";
import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4d78a9"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
