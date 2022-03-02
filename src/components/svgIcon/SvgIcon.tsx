import classNames from "classnames";
import * as React from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

export const icons = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
};

type SvgIconSize =
  | "small"
  | "medium"
  | "large"
  | "xLarge"
  | "xxLarge"
  | "xxxLarge"
  | "custom";

export type SvgIconName = keyof typeof icons;

interface SvgIconProps {
  iconName: SvgIconName;
  className?: string;
  size?: SvgIconSize;
}

export const SvgIcon: React.FC<SvgIconProps> = ({
  iconName,
  className,
  size = "large",
}) => {
  const Icon = icons[iconName];

  const sizeToPixel: { [key in SvgIconSize]: string | undefined } = {
    small: "8",
    medium: "16",
    large: "24",
    xLarge: "32",
    xxLarge: "48",
    xxxLarge: "80",
    custom: undefined,
  };

  const pixelSize = sizeToPixel[size];

  return (
    <Icon
      size={pixelSize}
      width={pixelSize}
      height={pixelSize}
      className={classNames("SvgIcon", className)}
    />
  );
};
