import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { AntdConfigProvider } from './config/antd-locale.config.tsx';
import { store } from './stores/store.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AntdConfigProvider locale="vi">
      <App />
    </AntdConfigProvider>
  </Provider>
);
