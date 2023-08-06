import { Content } from './styles';
import { NewPostContentProps } from './types';

export const NewPostContent: React.FC<NewPostContentProps> = ({ contentRef }) => {
  return (
    <Content ref={contentRef} />
  )
};
