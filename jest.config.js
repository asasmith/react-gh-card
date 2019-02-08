// expand default options
// const { defaults } = require('jest-config');

module.exports = {
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(css)$': 'jest-css-modules',
  },
  setupFilesAfterEnv: ['<rootDir>/src/config/setupTests.js'],
};