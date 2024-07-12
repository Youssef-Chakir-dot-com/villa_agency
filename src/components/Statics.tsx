import React from "react";
import { countes } from "../../utils/infos";
import Counter from "./Counter";
function Statics() {
  return (
    <div className="gap-x-28 mb-20 flex justify-center items-center mt-[240px] w-[80vw] mx-auto">
      {countes.map((count, idx) => (
        <Counter counter={count} key={idx} />
      ))}
    </div>
  );
}

export default Statics;
