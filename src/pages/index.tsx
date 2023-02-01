import Image from "next/image";

export default function ReinoPerdido() {
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center items-center h-screen">
        <Image
          src="/floresta_1.jpeg"
          width="500"
          height="500"
          alt=""
          className="border-2 border-black rounded"
        />
      </div>
    </div>
  );
}
