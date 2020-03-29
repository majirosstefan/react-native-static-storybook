module.exports = {
  stories: ['../storybook/stories/index.js'],
  webpackFinal: async config => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
      '@storybook/react-native': '@storybook/react',
      'react-native-svg': 'react-native-svg/lib/commonjs/ReactNativeSVG.web',
    };

    // handle svg support
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-react-loader',
    });

    console.log(config.module.rules);

    config.module.rules[0].use[0].options.plugins.push([
      'react-native-web',
      {commonjs: true},
    ]);

    return config;
  },
};
// https://stackoverflow.com/questions/60696774/how-can-i-build-my-react-native-storybook-to-web
