import styled from "styled-components";
import { colors } from "../../constants/colors";

export const NewPostContainer = styled.div`
  margin-top: 2rem;
  height: 100%;
  width: 700px;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray};
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
