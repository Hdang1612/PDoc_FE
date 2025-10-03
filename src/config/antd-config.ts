import type { ThemeConfig } from 'antd';
import viVN from 'antd/locale/vi_VN';
import enUS from 'antd/locale/en_US';

export const locales = {
  vi: viVN,
  en: enUS,
};
export const antdTheme: ThemeConfig = {
  token: {
    // Primary colors
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',

    // Typography
    fontSize: 14,
    fontFamily: 'Inter, sans-serif',

    // Border
    borderRadius: 6,

    // Layout
    controlHeight: 32,

    // Spacing - có thể tùy chỉnh theo design system của bạn
    marginXS: 8,
    marginSM: 12,
    margin: 16,
    marginMD: 20,
    marginLG: 24,
    marginXL: 32,
  },

  components: {
    Button: {
      controlHeight: 36,
      borderRadius: 6,
      fontWeight: 500,
      defaultHoverBg: '#000',
      defaultBg: '#fff',
    },
    Input: {
      controlHeight: 40,
      borderRadius: 6,
    },
    Select: {
      controlHeight: 40,
    },
    Table: {
      borderRadius: 8,
      headerBg: '#fafafa',
    },
    Card: {
      borderRadiusLG: 12,
    },
    Modal: {
      borderRadiusLG: 12,
    },
  },
};
