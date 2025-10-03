import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AntdConfigProvider } from './config/antd-locale.config.tsx';

createRoot(document.getElementById('root')!).render(
  <AntdConfigProvider locale="vi">
    <App />
  </AntdConfigProvider>
);
