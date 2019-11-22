module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src/',
          __storybook__: './__storybook__',
        },
      },
    ],
  ],
}
