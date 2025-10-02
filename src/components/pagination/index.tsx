import { Pagination } from "antd";

interface PaginationBaseProps {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number, pageSize: number) => void;
  className?: string;
}

const PaginationBase: React.FC<PaginationBaseProps> = ({
  current,
  pageSize,
  total,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex justify-end mt-4 ${className}`}>
      <Pagination
        current={current}
        pageSize={pageSize}
        total={total}
        onChange={onChange}
        showSizeChanger
      />
    </div>
  );
};

export default PaginationBase;
