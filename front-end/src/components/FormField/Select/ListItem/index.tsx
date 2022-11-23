import { Option } from './styles';
import { SelectOptionProps } from './type';

export const SelectOptions: React.FC<SelectOptionProps> = ({ optionId, optionName }) => {
  return (
      <Option value={optionId}>{optionName}</Option>
  );
};