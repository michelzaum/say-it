import { Button } from '../Button';
import { ModalContainer, ModalInfo, ModalTitle, ModalContent } from './styles';

import { ModalProps } from './types';

export const Modal: React.FC<ModalProps> = ({ title, content, show, onClick }) => {
  return (
    <ModalContainer show={show}>
      <ModalInfo>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>{content}</ModalContent>
        <Button text="Fechar" onClick={onClick} />
      </ModalInfo>
    </ModalContainer>
  );
};