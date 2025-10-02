import { Select } from 'antd';
import { removeVietnameseTones } from '../../utils/lang';

export interface OptionType {
  label: string;
  value: string | number;
}

interface SelectInputProps {
  label?: string;
  value?: string | number | (string | number)[];
  options: OptionType[];
  placeholder?: string;
  onChange: (value: any) => void;
  mode?: 'single' | 'multiple'; // single = mặc định
  className?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  value,
  options,
  placeholder = 'Chọn...',
  onChange,
  mode = 'single',
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm font-medium">{label}</label>}
      <Select
        mode={mode === 'multiple' ? 'multiple' : undefined}
        value={value}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full"
        filterOption={(input, option) => {
          const label = String(option?.label ?? '');
          return removeVietnameseTones(label).includes(removeVietnameseTones(input));
        }}
      />
    </div>
  );
};

export default SelectInput;
