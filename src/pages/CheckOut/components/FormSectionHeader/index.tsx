import { ReactNode } from "react";
import { FormSectionHeaderContainer } from "./styles";

interface FormSectionHeaderProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function FormSectionHeader({ title, subtitle, icon }: FormSectionHeaderProps) {
  return (
    <FormSectionHeaderContainer>
      {icon}
      <div>
        <h6>{title}</h6>
        <p>{subtitle}</p>
      </div>
    </FormSectionHeaderContainer>
  )
}