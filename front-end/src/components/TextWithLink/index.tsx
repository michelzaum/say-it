import { Text, Link } from './styles';

export const TextWithLink = () => {
  return (
      <Text>Possui cadastro?
        <Link href="/"> Faça login</Link>
      </Text>
  );
};