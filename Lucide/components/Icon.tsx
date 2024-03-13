import React from "react";
import { icons } from 'lucide-react';

type IconsType = {
    [key: string]: React.ElementType;
};


interface IconProps {
    iconName: string;
    color: string;
    size: number;
  }

  const Icon: React.FC<IconProps> = ({
    iconName,
    color = 'currentColor',
    size = 24
  }) => {
    const LucideIcon = (icons as IconsType)[iconName];
    if (!LucideIcon) {
        const LucisIcon = icons['Home']
        return <LucisIcon name="Home" size={24} color={"#000000"} />;
    }
    return (
        <LucideIcon color={color} size={size} />
    )
  }

  export default Icon;