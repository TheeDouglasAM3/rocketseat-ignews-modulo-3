module.exports = {
  testIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/.slicemachine/',
    '/customtypes/',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  transforms: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  testEnvironment: 'jsdom',
}
