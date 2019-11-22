module.exports = {
  preset: '@testing-library/react-native',
  verbose: true,
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  testMatch: ['**/__tests__/**/*'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  modulePathIgnorePatterns: ['__snapshots__'],
  moduleDirectories: ['node_modules', __dirname],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/?!(cavy)'],
  setupFilesAfterEnv: ['@testing-library/react-native/cleanup-after-each'],
}
