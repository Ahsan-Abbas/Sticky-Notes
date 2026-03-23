import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  framework: "@storybook/react-vite",
  core: {
  },
  typescript: {
    check: true
  },
  features: {
    "storyStoreV7": true
  },
  viteFinal: async (config, {
    configType
  }) => {
    if (config.build) {
      config.build.chunkSizeWarningLimit = 1000;
    }
    return config;
  },
  docs: {
    autodocs: true
  }
};

export default config;
