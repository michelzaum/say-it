import styled from "styled-components";
import { colors } from "../../../../constants/colors";
import { measures } from "../../../../constants/measures";

export const LabelComponent = styled.label`
  font-size: ${measures['spacing-medium']}px;
  font-weight: 500;
  color: ${colors.dark};
`;