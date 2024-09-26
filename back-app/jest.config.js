module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  rootDir: './',
  testMatch: ['<rootDir>/tests/**/*.test.ts'], // Ajustar para a estrutura de pastas de teste
  modulePaths: ['<rootDir>/src'],
};
