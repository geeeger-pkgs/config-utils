module.exports = {
  globals: {
    skipBabel: true,
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/output/'],
};
