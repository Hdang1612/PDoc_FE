export type LocaleKey = keyof typeof locales;

// src/providers/AntdConfigProvider.tsx
import React, { useMemo } from 'react';
import { ConfigProvider, App } from 'antd';
import { antdTheme, locales } from './antd-config';
// import { antdTheme } from '@/config/antd-theme.config';
// import { locales, type LocaleKey } from '@/config/antd-locale.config';

interface AntdConfigProviderProps {
  children: React.ReactNode;
  locale?: LocaleKey;
  direction?: 'ltr' | 'rtl';
}

export const AntdConfigProvider: React.FC<AntdConfigProviderProps> = ({
  children,
  locale = 'vi',
  direction = 'ltr',
}) => {
  // Memoize theme để tránh re-render không cần thiết
  const theme = useMemo(() => antdTheme, []);

  // Memoize locale config
  const localeConfig = useMemo(() => locales[locale], [locale]);

  return (
    <ConfigProvider
      theme={theme}
      locale={localeConfig}
      direction={direction}
      // Component config - áp dụng cho tất cả components
      button={{ autoInsertSpace: false }}
    >
      {/* App component cung cấp message, notification, modal API tĩnh */}
      <App>{children}</App>
    </ConfigProvider>
  );
};
