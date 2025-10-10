import React from 'react';
import { Dropdown, MenuProps, Tooltip } from 'antd';

export interface DropdownItem {
  key: string;
  label: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
  disabled?: boolean;
}

interface CommonDropdownProps {
  /** Phần tử kích hoạt dropdown (Button, Icon, Text, ...) */
  triggerElement: React.ReactNode;
  /** Danh sách item trong menu */
  menuItems: DropdownItem[];
  /** Vị trí hiển thị menu */
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight' | 'bottom';
  /** Kiểu trigger: click, hover, hoặc cả hai */
  triggerType?: ('click' | 'hover')[];
  tooltip?: string;
}

/**
 * Dropdown dùng chung, có thể tái sử dụng ở nhiều nơi.
 */
const CommonDropdown: React.FC<CommonDropdownProps> = ({
  triggerElement,
  menuItems,
  placement = 'bottomLeft',
  triggerType = ['click'],
  tooltip,
}) => {
  const items: MenuProps['items'] = menuItems.map((item) => ({
    key: item.key,
    label: (
      <span
        onClick={(e) => {
          e.stopPropagation();
          item.onClick?.();
        }}
      >
        {item.label}
      </span>
    ),
    danger: item.danger,
    disabled: item.disabled,
  }));

  return (
    <Dropdown menu={{ items }} placement={placement} trigger={triggerType} arrow>
      <Tooltip title={tooltip}>
        <span>{triggerElement}</span>
      </Tooltip>
    </Dropdown>
  );
};

export default CommonDropdown;
