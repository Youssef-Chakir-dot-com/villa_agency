import Image from "next/image";
import React from "react";
import Video from "next-video";
import villaView from "@/../videos/villa-view2.mp4";
function VedioView() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="relative">
          <Image
            className="h-[600px] w-[98vw] mx-auto"
            src="/video-bg.jpg"
            alt="video-bg"
            width={550}
            height={1600}
          />
        </div>
        <div className="absolute mt-[15%]  flex flex-col gap-y-10  justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-color4 font-bold border-l-4 pl-1 border-l-color4">
              VIDEO VIEW
            </h1>
            <h1 className="font-[1000] text-white text-[40px] max-w-[350px] text-center">
              Get Closer View & Different Feeling
            </h1>
          </div>
          <div className="max-w-[800px]">
            <Video src={villaView} width={700} />
          </div>
        </div>
      </div>
    </>
  );
}

export default VedioView;
