import React from "react";
import { icons } from 'lucide-react';

type IconsType = {
  [key: string]: React.ElementType;
};


interface IconProps {
  iconName: string;
  color: string;
  size: number;
  context: any;
}

const Icon: React.FC<IconProps> = ({
  iconName,
  color = 'currentColor',
  size = 24,
  context
}) => {

  const OnClickFunction = () => {
    const contextCasted = context as any;
    const events = contextCasted.events;
    if(events["OnClick"]){
      const onClick = events["OnClick"];
      if(onClick){
        onClick();
      }
    }

  }

  const LucideIcon = (icons as IconsType)[iconName];
  if (!LucideIcon) {
    const LucisIcon = icons['Home']
    return <LucisIcon name="Home" size={24} color={"#000000"} />;
  }
  return (
    <div onClick={OnClickFunction}>
      <LucideIcon color={color} size={size} />
    </div>
  )
}

export default Icon;