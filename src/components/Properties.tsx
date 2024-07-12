import React from "react";
import Card from "./Card";
import { properties } from "../../utils/infos";
function Properties() {
  return (
    <div className="mt-[60px] flex flex-col justify-center items-center max-w-[80wv]">
      <div className="flex flex-col justify-center items-center gap-y-4">
        <h1 className="uppercase font-extrabold text-color4 border-l-4 border-l-color4 pl-1">
          Properties
        </h1>
        <p className="font-bold text-center text-[40px]">
          We Provide The <br />
          Best Property <br /> You Like
        </p>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-y-9 gap-x-9">
        <Card details={properties[0]} />
        <Card details={properties[0]} />
        <Card details={properties[0]} />
        <Card details={properties[0]} />
        <Card details={properties[0]} />
        <Card details={properties[0]} />
      </div>
    </div>
  );
}

export default Properties;
