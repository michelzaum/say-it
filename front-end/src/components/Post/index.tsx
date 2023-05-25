import { Comment } from '../Icons/comment';
import { Like } from '../Icons/like';

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

import { Interaction } from '../Interaction';

export const Post = () => {
  return (
    <PostContainer>
      <PostInfoContainer>
         <PostDetails>
          <UserImage />
          <UserInfo>
            <UserName>Michel de Oliveira</UserName>
            <UserLocation>São Paulo, Brazil</UserLocation>
          </UserInfo>
          <PostTime>3 hours ago</PostTime>
        </PostDetails>
      </PostInfoContainer>
      <PostContent>
        Muito legal essa rede social. Adorei a ideia. SImples, objetiva e bem bonita! :) gostei mesmo, bastante
      </PostContent>
      <InteractionList>
        <Interaction count={12} icon={<Like />}/>
        <Interaction count={4} icon={<Comment />} />
      </InteractionList>
    </PostContainer>
  );
};
