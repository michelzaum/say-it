import { InputContainerComponent } from "./styles";
import { InputContainerProps } from "./types";

export const InputContainer: React.FC<InputContainerProps> = ({
  largeInput, children
}) => {
  return (
    <InputContainerComponent largeInput={largeInput}>
      {children}
    </InputContainerComponent>
  )
};