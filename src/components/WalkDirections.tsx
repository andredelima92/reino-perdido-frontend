import { cursors } from "@/helpers/cursor";
import { api } from "@/services/api";
import Image from "next/image";
import { useEffect, useState } from "react";

type WalkDirectionsProps = {
  updateImageField: (field: string) => void;
};

export type Maps = {
  position: number;
  image: string;
  near_positions: NearPositions;
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
  const [fields, setFields] = useState<Maps[]>([]);

  useEffect(() => {
    const currentField = fields.find((item) => item.position === currentPosition);
    if (!currentField) return;

    setNextPositions(currentField.near_positions);
    updateImageField(currentField.image);
  }, [currentPosition, updateImageField, fields]);

  async function getMaps() {
    try {
      const { data } = await api.get("/");
      setFields(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMaps();
  }, []);

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
