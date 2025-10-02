import { Table } from 'antd';
import type { TableProps } from 'antd';

interface TableBaseProps<RecordType> extends TableProps<RecordType> {
  className?: string;
}

const TableBase = <RecordType extends object>({
  className = '',
  ...rest
}: TableBaseProps<RecordType>) => {
  return (
    <Table
      bordered
      size="middle"
      className={`overflow-hidden rounded-lg shadow-sm ${className}`}
      {...rest}
    />
  );
};

export default TableBase;
