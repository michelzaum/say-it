import { Title } from './styles';
import { NewPostHeaderProps } from './types';

export const NewPostHeader: React.FC<NewPostHeaderProps> = ({ title }) => {
  return (
    <Title>{title}</Title>
  )
};
