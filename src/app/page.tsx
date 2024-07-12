import Counter from "@/components/Counter";
import Deal from "@/components/Deal";
import Featured from "@/components/Featured";
import Properties from "@/components/Properties";
import Slider from "@/components/Slider";
import Statics from "@/components/Statics";
import VedioView from "@/components/VedioView";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="mt-20">
        <Featured />
      </div>

      <div className="mb-10">
        <VedioView />
      </div>

      <div>
        <Statics />
      </div>
      <div>
        <Deal />
      </div>
      <div>
        <Properties />
      </div>
    </div>
  );
}
