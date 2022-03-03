import React from "react";

export const GalleryItem: React.FC = () => {
  return (
    <div className="relative rounded-lg shadow-lg overflow-hidden w-full h-full">
      <img
        src="https://picsum.photos/id/10/1920/1080"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};
