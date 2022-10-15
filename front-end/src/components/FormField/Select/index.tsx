import React from 'react';
import { ListContainer, ListLabel, List, Option } from './styles';

import { SelectProps, SelectOptionProps } from './types';

export const SelectContainer: React.FC<SelectProps> = ({ children, selectName, selectLabel, inputRef }) => {
  return (
    <ListContainer>
      <ListLabel>{selectLabel}</ListLabel>
      <List name={selectName} ref={inputRef}>
        {children}
      </List>
    </ListContainer>
  );
};

export const SelectOptions: React.FC<SelectOptionProps> = ({ optionId, optionName }) => {
  return (
      <Option value={optionId}>{optionName}</Option>
  );
};