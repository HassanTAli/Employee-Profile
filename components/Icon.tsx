import React from "react";
import { Icon } from "@iconify/react";

interface IconProps {
  icon: string;
  width?: string | number;
  height?: string | number;
  color?: string;
}

const IconComponent: React.FC<IconProps> = ({
  icon,
  width = 24,
  height = 24,
  color = "currentColor",
}) => {
  return <Icon icon={icon} width={width} height={height} color={color} />;
};

export default IconComponent;
