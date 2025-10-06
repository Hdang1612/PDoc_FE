import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search...', onSearch }) => {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(value); // sau này bạn gọi API ở đây
    } else {
      console.log('Search query:', value);
    }
  };

  return (
    <div className="flex w-full max-w-md items-center">
      <Input
        size="large"
        placeholder={placeholder}
        prefix={<SearchOutlined className="text-gray-400" />}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onPressEnter={handleSearch}
        className="rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
      <button
        onClick={handleSearch}
        className="bg-orange hover:bg-yellow ml-2 cursor-pointer rounded-xl px-4 py-2 text-white shadow transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
