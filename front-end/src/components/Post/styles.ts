import styled from "styled-components";
import { colors } from '../../constants/colors';

export const PostContainer = styled.div`
  max-width: 700px;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray};
  border-radius: 0.5rem;
  padding: 2rem;
`;

export const PostInfoContainer = styled.div`
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

export const UserLocation = styled.span`
  font-size: 0.7rem;
`;

export const PostContent = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid ${colors.gray};
`;

export const InteractionList = styled.div`
  display: flex;
  justify-content: start;
  padding-top: 1rem;
  gap: 1rem;
`;
