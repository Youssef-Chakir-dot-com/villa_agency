import React from "react";
type Counte={
    number:String ,
    title:String ,
}
function Counter({counter}:{counter:Counte} ) {
  return (
    <div>
      <div className="relative flex justify-center items-center gap-x-5 bg-color3 p-8 rounded-xl">
        <span className="font-[1000] text-[20px] text-primary">{counter.number}</span>
        <p className="font-bold">{counter.title}</p>
        <div className="-mt-[80px] -mr-[275px] absolute bg-primary w-10 h-10 rounded-full"></div>
      </div>
      
    </div>
  );
}

export default Counter;
