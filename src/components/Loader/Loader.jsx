import css from "./Loader.module.css";

import * as Spinners from "react-loader-spinner";
import { InfinitySpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}
