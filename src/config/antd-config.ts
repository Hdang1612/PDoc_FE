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
    colorPrimary: '#d7301f',
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
    colorBgLayout: 'rgba(255, 255, 255, 0.3)',

    // Spacing - có thể tùy chỉnh theo design system của bạn
    marginXS: 8,
    marginSM: 12,
    margin: 16,
    marginMD: 20,
    marginLG: 24,
    marginXL: 32,
  },

  components: {
    Layout: {
      headerBg: '#fff',
      siderBg: '#fff',
      footerBg: '#fff',
    },
    Menu: {
      itemBg: '#fff',
      popupBg: '#fff',
      iconSize: 16,
      collapsedIconSize: 16,
    },
    Button: {
      controlHeight: 36,
      borderRadius: 6,
      fontWeight: 500,
      defaultHoverBg: '#fc8d59',
      defaultBg: '#fc8d59',
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
