import React, { useRef, useState } from 'react';
import { Input, Label, FormFieldContainer, Icon } from './styles';
import { FormFieldProps } from './types';
import { InputTypes } from './enums';
import { EyeOff } from '../../Icons/eyeOff';
import { Eye } from '../../Icons/eye';

export const FormField: React.FC<FormFieldProps> = ({
  label, placeholder, largeInput, type, onChange, required, value
}) => {
  const [currentInputType, setCurrentInputType] = useState(InputTypes.PASSWORD);
  const inputRef = useRef<HTMLInputElement>(null);

  function toggleViewPassword() {
    if (currentInputType === InputTypes.PASSWORD) {
      setCurrentInputType(InputTypes.TEXT);
      if (inputRef.current?.type) {
        inputRef.current.type = InputTypes.TEXT;
      };
    } else {
      setCurrentInputType(InputTypes.PASSWORD);
      if (inputRef.current?.type) {
        inputRef.current.type = InputTypes.PASSWORD;
      };
    };
  };

  return (
    <FormFieldContainer largeInput={largeInput}>
      <Label htmlFor={`input${label.replace(/\s/g, '')}`}>
        {`${label} ${required ? '*' : ''}`}
      </Label>
      {
        type === 'password' ? (
          <Icon>
            {
              currentInputType === 'password' ? (
                <EyeOff onClick={toggleViewPassword} />
            ) : (
                <Eye onClick={toggleViewPassword} />
              )
            }
            <Input
              onChange={onChange}
              id={`input${label.replace(/\s/g, '')}`}
              type={type}
              placeholder={placeholder}
              value={value}
              ref={inputRef}
            />
          </Icon>
        ) : (
          <Input
            onChange={onChange}
            id={`input${label.replace(/\s/g, '')}`}
            type={type}
            placeholder={placeholder}
            value={value}
            ref={inputRef}
          />
        )
      }
    </FormFieldContainer>
  );
};