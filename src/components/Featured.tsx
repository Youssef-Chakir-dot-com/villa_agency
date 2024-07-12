import React from "react";
import { feature } from "../../utils/infos";
import Image from "next/image";
import Accordion from "./Accordion";
function Featured() {
  return (
    <div className="w-[80vw] flex gap-x-5 mb-[100px] mx-auto">
      <div className="w-1/3">
        <Image
          src={feature[0].src}
          width={355}
          height={490}
          alt="Featured image"
          className="w-[875px] h-[400px] relative"
        />
        <div className="-mt-10 -ml-9 absolute bg-primary rounded-full flex justify-center items-center w-[100px] h-[100px]">
          <Image
            src="/featured-icon.png"
            alt="featured icon"
            width={56}
            height={60}
          />
        </div>
      </div>
      <div className="flex flex-col w-1/2 ">
        <h1 className="uppercase font-[900] text-color4  border-color4 border-l-[3px] pl-1">
          featured
        </h1>
        <p className="mt-10 w-[250px] font-[800] text-[30px]">
          {feature[0].title}
        </p>
        <div className="mt-16">
          {feature[0].questions.map((question) => (
            <Accordion key={question.id} item={question} />
          ))}
        </div>
      </div>
      <div className="shadow-2xl p-6 flex flex-col gap-y-6 max-h-[490px] max-w-[300px]">
        <div className="flex justify-center items-center gap-x-5 border-b-2 border-b-color2 pb-7">
          <Image
            className="w-[52px] h-[52px]"
            alt="space image"
            src="/info-icon-01.png"
            width={52}
            height={52}
          />
          <div>
            <p className="font-bold">{feature[0].dimention[0]}</p>
            <p>{feature[0].dimention[1]}</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-5 border-b-2 border-b-color2 pb-7">
          <Image
            className="w-[52px] h-[52px]"
            alt="space image"
            src="/info-icon-02.png"
            width={52}
            height={52}
          />
          <div>
            <p className="font-bold">{feature[0].contract[0]}</p>
            <p>{feature[0].contract[1]}</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-5 border-b-2 border-b-color2 pb-7">
          <Image
            className="w-[52px] h-[52px]"
            alt="space image"
            src="/info-icon-03.png"
            width={52}
            height={52}
          />
          <div>
            <p className="font-bold">{feature[0].payement[0]}</p>
            <p>{feature[0].payement[1]}</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-5 border-b-2 border-b-color2 pb-7">
          <Image
            className="w-[52px] h-[44px]"
            alt="space image"
            src="/info-icon-04.png"
            width={52}
            height={44}
          />
          <div>
            <p className="font-bold">{feature[0].safety[0]}</p>
            <p>{feature[0].safety[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
