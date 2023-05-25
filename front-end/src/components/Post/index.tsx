import React from 'react';

import { Comment } from '../Icons/comment';
import { Like } from '../Icons/like';
import { Interaction } from '../Interaction';

import {
  InteractionList,
  PostContainer,
  PostContent,
  PostDetails,
  PostInfoContainer,
  PostTime,
  UserImage,
  UserInfo,
  UserLocation,
  UserName
} from './styles';

type User = {
  name: string
  location: string
}

type Interactions = {
  likes: number
  comments: number
}

type PostProps = {
  userInfo: User
  time: string
  content: string
  interactions: Interactions
}

export const Post: React.FC<PostProps> = ({
  content,
  time,
  userInfo,
  interactions,
}) => {
  return (
    <PostContainer>
      <PostInfoContainer>
         <PostDetails>
          <UserImage />
          <UserInfo>
            <UserName>{ userInfo.name }</UserName>
            <UserLocation>{ userInfo.location }</UserLocation>
          </UserInfo>
          <PostTime>{ time }</PostTime>
        </PostDetails>
      </PostInfoContainer>
      <PostContent>
        { content }
      </PostContent>
      <InteractionList>
        <Interaction count={ interactions.likes } icon={<Like />}/>
        <Interaction count={ interactions.comments } icon={<Comment />} />
      </InteractionList>
    </PostContainer>
  );
};
