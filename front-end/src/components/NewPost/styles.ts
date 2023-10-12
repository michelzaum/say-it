import styled from "styled-components";
import { colors } from "../../constants/colors";

export const NewPostContainer = styled.div`
  margin-top: 2rem;
  height: 100%;
  width: 100%;
  max-width: 700px;
  background-color: ${colors.white};
  box-shadow: ${colors.gray} 1px 1px 10px 1px;
  /* border: 1px solid ${colors.gray}; */
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
