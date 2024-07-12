import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Button1() {
  return (
    <div className="flex justify-center items-center cursor-pointer">
      <span className="absolute -ml-32  bg-primary w-[30px] h-[29px] rounded-full flex justify-center items-center ">
        {" "}
        <FontAwesomeIcon
          icon={faCalendar}
          className="text-secondary size-3"
        />{" "}
      </span>
      <span className=" bg-black text-secondary rounded-2xl  pl-8 px-3 py-1 flex justify-center items-center">
        <h5 className="text-[14px] hover:text-primary ">Schedule a visit</h5>
      </span>
    </div>
  );
}

export function Button2({ text }: { text: string }) {
  return (
    <button className="bg-black p-2 text-white hover:bg-primary font-bold rounded-md w-[150px] h-[50px]">
      {" "}
      {text}{" "}
    </button>
  );
}

export function Button3({ text }: { text: string }) {
  return (
    <button className="w-[200px] rounded-3xl px-3 py-2 bg-black text-white font-bold">
      {text}
    </button>
  );
}

export default Button1;
