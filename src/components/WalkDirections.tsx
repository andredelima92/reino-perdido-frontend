import Image from "next/image";

export const WalkDirections: React.FC = () => {
  function move(direction: string) {
    alert(direction);
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-3 flex justify-center">
        <Image
          src="arrow-up.svg"
          width="40"
          height="40"
          alt="arrow up"
          className="cursor-pointer"
          onClick={() => move("up")}
        />
      </div>
      <div className="col-span-2 flex justify-start">
        <Image
          src="arrow-left.svg"
          width="40"
          height="40"
          alt="arrow left"
          className="cursor-pointer"
          onClick={() => move("left")}
        />
      </div>
      <div className="flex justify-end">
        <Image
          src="arrow-right.svg"
          width="40"
          height="40"
          alt="arrow right"
          className="cursor-pointer"
          onClick={() => move("right")}
        />
      </div>
      <div className="col-span-3 flex justify-center">
        <Image
          src="arrow-down.svg"
          width="40"
          height="40"
          alt="arrow down"
          className="cursor-pointer"
          onClick={() => move("down")}
        />
      </div>
    </div>
  );
};
