import { Controller, Control } from "react-hook-form";
import { Input } from "antd";

interface InputFieldProps {
  name: string;
  control: Control<any>;
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  rules?: object;
  [key: string]: any;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  control,
  label,
  type = "text",
  placeholder = "",
  className = "",
  disabled = false,
  rules = {},
  ...rest
}) => {
  const AntInput = type === "password" ? Input.Password : Input;

  return (
    <div className="mb-4">
      {label && <label className="block mb-1 font-medium">{label}</label>}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <AntInput
              {...field}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              className={`border rounded-md ${className}`}
              {...rest}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default InputField;
