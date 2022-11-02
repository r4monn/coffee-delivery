import { ReactNode } from "react";
import { IconContainer, ProsBrandContainer } from "./styles";

interface ProsContainerProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg: string;
}

export function ProsBrand({ icon, text, iconBg }: ProsContainerProps) {
  return (
    <ProsBrandContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </ProsBrandContainer>
  )
}