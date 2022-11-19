import { LabelComponent } from "./styles";
import { LabelProps } from "./types";

export const Label: React.FC<LabelProps> = ({ label, required }) => {
  return (
    <LabelComponent htmlFor={`input${label.replace(/\s/g, '')}`}>
      {`${label} ${required ? '*' : ''}`}
    </LabelComponent>
  )
};