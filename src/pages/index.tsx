import { WalkDirections } from "@/components/WalkDirections";
import Image from "next/image";

export default function ReinoPerdido() {
  return (
    <main className="w-full h-screen">
      <div className="flex justify-center items-center">
        <Image
          src="/floresta_1.jpeg"
          width="500"
          height="500"
          alt=""
          className="border-2 border-black rounded mt-2"
        />
      </div>
      <div className="flex justify-center mt-6">
        <WalkDirections />
      </div>
    </main>
  );
}
