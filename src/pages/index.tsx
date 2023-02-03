import { WalkDirections } from "@/components/WalkDirections";
import Image from "next/image";
import { useState } from "react";

export default function ReinoPerdido() {
  const [imageField, setImageField] = useState<string>("floresta_1");

  return (
    <main className="w-full h-screen">
      <div className="flex justify-center items-center">
        <Image
          src={`/${imageField}.jpeg`}
          width="500"
          height="500"
          alt=""
          className="border-2 border-black rounded mt-2"
        />
      </div>
      <div className="flex justify-center mt-6">
        <WalkDirections updateImageField={setImageField} />
      </div>
    </main>
  );
}
