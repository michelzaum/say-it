import { TextContainer, Text, Link } from './styles';

import { TextWithLinkProps } from './types';

export const TextWithLink: React.FC<TextWithLinkProps> = ({ text, linkTo, textLink }) => {
  return (
    <TextContainer>
      <Text>{text}
        <Link href={linkTo}>{` ${textLink}`}</Link>
      </Text>
    </TextContainer>
  );
};