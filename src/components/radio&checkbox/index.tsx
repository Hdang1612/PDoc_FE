import { Radio, Checkbox } from "antd";

export interface OptionType {
  label: string;
  value: string | number;
}

interface RadioCheckboxGroupProps {
  label?: string;
  value?: string | number | (string | number)[];
  options: OptionType[];
  onChange: (value: any) => void;
  mode?: "radio" | "checkbox";
  className?: string;
}

const RadioCheckboxGroup: React.FC<RadioCheckboxGroupProps> = ({
  label,
  value,
  options,
  onChange,
  mode = "radio",
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm font-medium">{label}</label>}

      {mode === "radio" ? (
        <Radio.Group value={value} onChange={(e) => onChange(e.target.value)}>
          {options.map((opt) => (
            <Radio key={opt.value} value={opt.value}>
              {opt.label}
            </Radio>
          ))}
        </Radio.Group>
      ) : (
        <Checkbox.Group
          value={value as (string | number)[]}
          onChange={(checkedValues) => onChange(checkedValues)}
          options={options}
        />
      )}
    </div>
  );
};

export default RadioCheckboxGroup;
