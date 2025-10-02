import { DatePicker } from 'antd';
import { Dayjs } from 'dayjs';

interface DateInputProps {
  label?: string;
  value?: Dayjs | [Dayjs, Dayjs];
  onChange: (value: any) => void;
  mode?: 'single' | 'range'; // single = DatePicker, range = RangePicker
  className?: string;
}

const DateInput: React.FC<DateInputProps> = ({
  label,
  value,
  onChange,
  mode = 'single',
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm font-medium">{label}</label>}

      {mode === 'single' ? (
        <DatePicker value={value as Dayjs} onChange={(date) => onChange(date)} className="w-full" />
      ) : (
        <DatePicker.RangePicker
          value={value as [Dayjs, Dayjs]}
          onChange={(dates) => onChange(dates)}
          className="w-full"
        />
      )}
    </div>
  );
};

export default DateInput;
