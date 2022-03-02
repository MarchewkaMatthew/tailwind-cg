const path = require("path");
const glob = require("glob");

const globalAssets = glob.sync(
  path.resolve(__dirname, "../src/**/*.+(ico|png|css)")
);

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    config.entry = [...config.entry, ...globalAssets];

    return config;
  },
};
