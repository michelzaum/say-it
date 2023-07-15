import { Content } from './styles';
import { NewPostContentProps } from './types';

export const NewPostContent: React.FC<NewPostContentProps> = ({ content }) => {
  return (
    <Content>{content}</Content>
  )
};
