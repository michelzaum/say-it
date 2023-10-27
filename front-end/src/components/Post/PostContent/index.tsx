import { ContentContainer, ContenteText } from './styles';
import { PostContentProps } from './types';

export const PostContent: React.FC<PostContentProps> = ({ content }) => {
  return (
    <ContentContainer>
      <ContenteText>
        { content }
      </ContenteText>
    </ContentContainer>
  )
}
