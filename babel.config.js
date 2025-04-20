module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    'nativewind/babel',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@core/config': './src/core/config/index',
          '@core/component': './src/core/components/index',
          '@core/hook': './src/core/hooks/index',
          '@core/util': './src/core/utils/index',
          '@core/provider': './src/core/providers/index',
          '@module/transaction': './src/modules/transaction/index',
        },
      },
    ],
  ],
};
