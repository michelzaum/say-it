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
            <PostTime>3 hours ago</PostTime>
          </UserInfo>
        </PostDetails>
        <UserLocation>São Paulo, Brazil</UserLocation>
      </PostInfoContainer>
      <PostContent>
        Muito legal essa rede social. Adorei a ideia. SImples, objetiva e bem bonita! :) gostei mesmo, bastante
      </PostContent>
      <InteractionsContaincer>
        <Interaction>12 curtidas</Interaction>
        <Interaction>4 comentários</Interaction>
        <Interaction>2 compartilhamentos</Interaction>
      </InteractionsContaincer>
    </PostContainer>
  )
}