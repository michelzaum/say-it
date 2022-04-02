
import { TextContainer, Text, LinkTo } from './styles';

import { TextWithLinkProps } from './types';

export const TextWithLink: React.FC<TextWithLinkProps> = ({ text, linkTo, textLink }) => {
  return (
    <TextContainer>
      <Text>{text}
        <LinkTo to={linkTo}>{` ${textLink}`}</LinkTo>
      </Text>
    </TextContainer>
  );
};