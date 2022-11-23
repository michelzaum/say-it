import { ListContainer, List, ListLabel } from './styles';
import { SelectProps } from './types';

export const SelectContainer: React.FC<SelectProps> = ({
  children, selectName, selectLabel, inputRef
}) => {
  return (
    <ListContainer>
      <ListLabel>{selectLabel}</ListLabel>
      <List name={selectName} ref={inputRef}>
        {children}
      </List>
    </ListContainer>
  );
};
