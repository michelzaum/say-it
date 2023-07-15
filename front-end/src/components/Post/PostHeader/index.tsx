import {
  HeaderContainer,
  PostDetails,
  PostTime,
  UserImage,
  UserInfo,
  UserName,
  UserLocationContainer,
  UserLocation
} from './styles';

import { Location } from '../../Icons/location';
import { PostHeaderProps } from './types';

export const PostHeader: React.FC<PostHeaderProps> = ({ userInfo, time }) => {
  return (
    <HeaderContainer>
    <PostDetails>
     <UserImage />
     <UserInfo>
       <UserName>{ userInfo.name }</UserName>
       <UserLocationContainer>
         { <Location /> }
         <UserLocation>
           { userInfo.location }
         </UserLocation>
       </UserLocationContainer>
     </UserInfo>
     <PostTime>{ time }</PostTime>
    </PostDetails>
    </HeaderContainer>
  )
}
