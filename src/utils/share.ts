// src/services/shareService.ts
type Platform = 'facebook' | 'messenger' | 'zalo';

interface ShareConfig {
  buildUrl: (url: string) => string;
  windowName: string;
  windowFeatures: string;
}

const shareConfigs: Record<Platform, ShareConfig> = {
  facebook: {
    buildUrl: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    windowName: 'fbShare',
    windowFeatures:
      'width=600,height=500,left=200,top=100,toolbar=no,menubar=no,scrollbars=no,resizable=yes',
  },

  messenger: {
    buildUrl: (url: string) =>
      `https://www.facebook.com/dialog/send?link=${encodeURIComponent(url)}&app_id=YOUR_APP_ID&redirect_uri=${encodeURIComponent(
        url
      )}`,
    windowName: 'msgrShare',
    windowFeatures:
      'width=600,height=500,left=220,top=120,toolbar=no,menubar=no,scrollbars=no,resizable=yes',
  },

  zalo: {
    buildUrl: (url: string) =>
      `https://zalo.me/share?url=${encodeURIComponent(url)}`,
    windowName: 'zaloShare',
    windowFeatures:
      'width=550,height=500,left=250,top=120,toolbar=no,menubar=no,scrollbars=no,resizable=yes',
  },
};

export const shareService = {
  openShare(platform: Platform, url: string) {
    const config = shareConfigs[platform];
    if (!config) {
      console.error(`Share config for platform "${platform}" not found`);
      return;
    }
    const finalUrl = config.buildUrl(url);
    window.open(finalUrl, config.windowName, config.windowFeatures);
  },
};
