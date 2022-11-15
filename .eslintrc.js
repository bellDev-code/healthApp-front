module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: 'babel-parser',
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
