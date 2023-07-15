import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
`;

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserImage = styled.img``;

export const UserName = styled.span`
  font-weight: 500;
`;

export const PostTime = styled.span`
  font-size: 0.7rem;
`;

export const UserLocationContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const UserLocation = styled.span`
  font-size: 0.8rem;
  color: ${colors['gray-darker']};
`;