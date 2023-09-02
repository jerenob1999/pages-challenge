import React from "react";
import { Photo as picture } from "../../models/photo";
import Photo from "./photo";

interface Props {
  photos: picture[];
}

function PhotoContainer({ photos }: Props) {
  return (
    <div
      data-testid="container"
      className="flex justify-start flex-wrap mt-14"
    >
      {photos.map((p) => (
        <Photo key={p.id}  props={p}
        />
      ))}
    </div>
  );
}

export default PhotoContainer;
