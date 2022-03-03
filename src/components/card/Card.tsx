import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = (props) => {
  const { children } = props;
  return (
    <div className="bg-white shadow-xl w-full p-32 rounded-lg font-bold">
      {children}
    </div>
  );
};
