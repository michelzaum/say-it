import { Comment } from '../Icons/comment';
import { Like } from '../Icons/like';
import {
  Interaction,
  InteractionsContaincer,
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
      <InteractionsContaincer>
        <Interaction>
          <Like />
          12 curtidas
        </Interaction>
        <Interaction>
          <Comment />
          4 comentários
        </Interaction>
      </InteractionsContaincer>
    </PostContainer>
  );
};
