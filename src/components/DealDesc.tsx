import React from "react";
import { Details } from "../../utils/types";
import Image from "next/image";
import Button1, { Button3 } from "./Buttons";

function menuItem(title: string, value: string) {
  return (
    <div className=" border-b-2 pb-5 pt-5 flex justify-between ">
      <p className=" text-light-green">{title}</p>
      <p className="font-bold text-[20px]">{value}</p>
    </div>
  );
}

function DealDesc({ details }: { details: Details }) {
  return (
    <div className="mt-10 flex mx-auto w-[85vw] gap-x-20">
      <div className="w-1/4 shadow-2xl p-6 rounded-2xl">
        {menuItem(details.space.title, details.space.value)}
        {menuItem(details.floor.title, details.floor.value)}
        {menuItem(details.rooms.title, details.rooms.value)}
        {menuItem(details.parking.title, details.parking.value)}
        {menuItem(details.payment.title, details.payment.value)}
      </div>
      <div>
        <Image
          className="w-[450px]"
          alt={details.type}
          src={details.src}
          width={520}
          height={395}
        />
      </div>
      <div className="flex flex-col gap-y-6">
        <p className="font-bold"> {details.title}</p>
        <div className="w-[230px] ">{details.desc}</div>
        <Button1 />
      </div>
    </div>
  );
}

export default DealDesc;
