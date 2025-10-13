import React from 'react';
import { Modal } from 'antd';

interface CommonModalProps {
  /** Hiển thị modal hay không */
  open: boolean;
  /** Tiêu đề modal */
  title?: React.ReactNode;
  /** Callback khi nhấn OK */
  onOk?: () => void;
  /** Callback khi nhấn Cancel hoặc đóng modal */
  onCancel?: () => void;
  /** Nội dung bên trong modal */
  children?: React.ReactNode;
  /** Loading khi đang xử lý */
  confirmLoading?: boolean;
  /** Có ẩn nút footer hay không */
  footer?: React.ReactNode | null;
  /** Cho phép tùy chỉnh độ rộng modal */
  width?: number | string;
  /** Có cho phép đóng bằng click ra ngoài không */
  maskClosable?: boolean;
  /** Có cho phép bấm ESC để đóng không */
  keyboard?: boolean;
  /** ClassName tùy chỉnh */
  className?: string;
}

/**
 * CommonModal - Component modal dùng chung
 */
const CommonModal: React.FC<CommonModalProps> = ({
  open,
  title,
  onOk,
  onCancel,
  children,
  confirmLoading = false,
  footer,
  width = 520,
  maskClosable = true,
  keyboard = true,
  className,
}) => {
  return (
    <Modal
      open={open}
      title={title}
      onOk={onOk}
      onCancel={onCancel}
      confirmLoading={confirmLoading}
      footer={footer !== undefined ? footer : undefined}
      width={width}
      maskClosable={maskClosable}
      keyboard={keyboard}
      className={className}
      centered
      destroyOnClose
    >
      {children}
    </Modal>
  );
};

export default CommonModal;
