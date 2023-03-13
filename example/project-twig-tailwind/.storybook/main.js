const path = require("path");

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.twig\.?/,
      use: "twigjs-loader",
    });

    // config.resolve.alias = {
    //   templates: path.resolve(__dirname, "../templates"),
    //   assets: path.resolve(__dirname, "../assets"),
    // };

    return config;
  },
};
