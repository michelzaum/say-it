import { ListContainer, List } from './styles';

import { FormField } from '../../Input';

import { SelectProps } from './types';

export const SelectContainer: React.FC<SelectProps> = ({
  children, selectName, selectLabel, inputRef
}) => {
  return (
    <ListContainer>
      <FormField.InputContainer largeInput>
        <FormField.InputLabel label='País' />
        <FormField.InputField list='ice-cream-flavors' id='ice-cream-flavors' name='ice-cream-flavors' />
        <List id="ice-cream-flavors">
          {children}
        </List>
      </FormField.InputContainer>
    </ListContainer>
  );
};
