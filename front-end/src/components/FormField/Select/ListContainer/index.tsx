import { ListContainer, List } from './styles';

import { FormField } from '../../Input';

import { SelectProps } from './types';

export const SelectContainer: React.FC<SelectProps> = ({ children, ListRef, id }) => {
  return (
    <ListContainer>
      <FormField.InputContainer largeInput>
        <FormField.InputLabel label='País' />
        <FormField.InputField
          inputRef={ListRef}
          list={id}
          id={id}
          name={id}
        />
        <List id={id}>
          {children}
        </List>
      </FormField.InputContainer>
    </ListContainer>
  );
};
