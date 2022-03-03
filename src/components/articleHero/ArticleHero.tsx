import React from "react";

export const ArticleHero: React.FC = (props) => {
  const {} = props;
  return (
    <div className="relative w-full max-h-300">
      <img
        src="https://picsum.photos/id/10/1920/1080"
        alt=""
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      <div className="container w-full aspect-video" />
    </div>
  );
};
