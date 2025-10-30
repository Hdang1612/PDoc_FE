import React, { useState } from 'react';
import { Button, Flex, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface TableBaseProps<T extends { key: React.Key }> {
  columns: TableColumnsType<T>;
  data: T[];
  onDelete?: (deletedKeys: React.Key[]) => void;
}

function TableBase<T extends { key: React.Key }>({ columns, data, onDelete }: TableBaseProps<T>) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [tableData, setTableData] = useState<T[]>(data);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<T> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleDelete = () => {
    const newData = tableData.filter((item) => !selectedRowKeys.includes(item.key));
    setTableData(newData);
    onDelete?.(selectedRowKeys); // callback ra ngoài nếu cần
    setSelectedRowKeys([]);
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <Flex gap="middle" vertical>
      <Flex align="center" gap="middle">
        <Button type="primary" danger onClick={handleDelete} disabled={!hasSelected}>
          Delete Selected
        </Button>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </Flex>
      <Table<T> rowSelection={rowSelection} columns={columns} dataSource={tableData} />
    </Flex>
  );
}

export default TableBase;
