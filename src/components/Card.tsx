import React from "react";
import { Details } from "../../utils/types";
import { Button3 } from "./Buttons";
import Image from "next/image";
function Card({ details }: { details: Details }) {
  return (
    <div className="bg-color1 p-4 rounded-xl gap-y-3 flex flex-col">
      <div>
        <Image
          className="w-[300px] h-[200] rounded-2xl"
          src={details.src}
          alt=""
          width={350}
          height={260}
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="bg-color3 rounded-lg p-2">{details.type}</p>
        <p className="font-extrabold text-primary">{details.payment.price}</p>
      </div>
      <h1 className="font-[1000]">{details.address}</h1>
      <div className="pb-5 border-b-2 border-b-color2 grid grid-cols-2 gap-3">
        <p >
          Bedrooms: <span className="font-bold">{details.rooms.bedrooms}</span>
        </p>
        <p >
          Bathrooms: <span className="font-bold">{details.rooms.bathrooms}</span>
        </p>
        <p>
          Area: <span className="font-bold">{details.space.value}</span>
        </p>
        <p>
          Floor: <span className="font-bold">{details.floor.value}</span>
        </p>
        <p>
          Parking: <span className="font-bold">{details.parking.much}</span>
        </p>
      </div>
      <div className="mx-auto"><Button3  text="Schedule a visit" /></div>
    </div>
  );
}

export default Card;
