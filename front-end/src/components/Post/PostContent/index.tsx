import { ContentContainer } from './styles';
import { PostContentProps } from './types';

export const PostContent: React.FC<PostContentProps> = ({ content }) => {
  return (
    <ContentContainer>
      { content }
    </ContentContainer>
  )
}