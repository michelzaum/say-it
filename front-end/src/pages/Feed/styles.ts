import styled from "styled-components";

export const FeedContainer = styled.div`
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const PostsList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  max-width: 700px;
`;

export const Title = styled.span`
  font-size: 2rem;
  margin: 1.5rem 0;
  align-self: self-start;
`;
