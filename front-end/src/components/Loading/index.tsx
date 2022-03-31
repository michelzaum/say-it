import { LoadingBackground, LoadingContainer, Spinner, LoadingText } from './styles';

export const LoadingComponent = () => {
  return (
    <LoadingBackground>
      <LoadingContainer>
        <Spinner />
        <LoadingText>Carregando...</LoadingText>
      </LoadingContainer>
    </LoadingBackground>
  );
};