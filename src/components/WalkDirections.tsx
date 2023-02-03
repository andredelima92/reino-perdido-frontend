import { cursors } from "@/helpers/cursor";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import fields from "../helpers/map.json";

type WalkDirectionsProps = {
  updateImageField: (field: string) => void;
};

type NearPositions = {
  up: number | null;
  left: number | null;
  right: number | null;
  down: number | null;
};

export const WalkDirections: React.FC<WalkDirectionsProps> = ({ updateImageField }) => {
  const [currentPosition, setCurrentPosition] = useState(1);
  const [nextPositions, setNextPositions] = useState<NearPositions>({} as NearPositions);

  useEffect(() => {
    const currentField = fields.maps.find((item) => item.position === currentPosition);
    if (!currentField) return;

    setNextPositions(currentField.near_positions);
    updateImageField(currentField.image);
  }, [currentPosition, updateImageField]);

  function move(direction: number | null) {
    setCurrentPosition(direction as number);
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {cursors.map((item) => {
        const command = item.command as "up" | "down" | "left" | "right";
        const nextField = nextPositions[command];

        if (nextField) {
          return (
            <div className={item.class} key={item.command}>
              <Image
                src={item.src}
                width="40"
                height="40"
                alt={item.alt}
                className="cursor-pointer"
                onClick={() => move(nextPositions[command])}
              />
            </div>
          );
        }
      })}
    </div>
  );
};
