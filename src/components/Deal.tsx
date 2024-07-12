"use client";
import React, { useState } from "react";
import { Button2 } from "./Buttons";
import Image from "next/image";
import DealDesc from "./DealDesc";
import { deals } from "../../utils/infos";
function Deal() {
  const [activeTab, setActiveTab] = useState("Appartment");

  const renderContent = () => {
    switch (activeTab) {
      case "Appartment":
        return (
          <div>
            <DealDesc details={deals.appartment} />
          </div>
        );
      case "Villa House":
        return (
          <div>
            <DealDesc details={deals.villa} />
          </div>
        );
      case "Penthouse":
        return (
          <div>
            <DealDesc details={deals.penthouse} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-color1 p-20 ">
      <div className="flex justify-around items-end ">
        <div className="flex flex-col gap-y-5">
          <p className="text-color4 border-l-4 pl-1 border-l-color4 font-[1000] uppercase">
            Best Deal
          </p>
          <h1 className="font-[1000] text-[40px] w-[320px]">
            Find Your Best Deal Right Now!
          </h1>
        </div>
        <div className="flex gap-x-10 mb-10">
          <div onClick={() => setActiveTab("Appartment")}>
            <button
              className={
                activeTab == "Appartment"
                  ? "bg-primary p-2 text-white hover:bg-primary font-bold rounded-md w-[150px] h-[50px]"
                  : "bg-black p-2 text-white hover:bg-primary font-bold rounded-md w-[150px] h-[50px]"
              }
            >
              Appartment
            </button>
          </div>
          <div onClick={() => setActiveTab("Villa House")}>
            <button
              className={
                activeTab == "Villa House"
                  ? "bg-primary p-2 text-white hover:bg-primary font-bold rounded-md w-[150px] h-[50px]"
                  : "bg-black p-2 text-white hover:bg-primary font-bold rounded-md w-[150px] h-[50px]"
              }
            >
              Villa House
            </button>
          </div>
          <div onClick={() => setActiveTab("Penthouse")}>
            <button
              className={
                activeTab == "Penthouse"
                  ? "bg-primary p-2 text-white hover:bg-primary font-bold rounded-md w-[150px] h-[50px]"
                  : "bg-black p-2 text-white hover:bg-primary font-bold rounded-md w-[150px] h-[50px]"
              }
            >
              Penthouse
            </button>
          </div>
        </div>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
}

export default Deal;
