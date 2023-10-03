const config = {
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: '<rootDir>/coverage',
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/**/*.d.ts', '<rootDir>/src/bfe.dev/'],
    coverageProvider: 'v8',
    coverageReporters: ['text', 'html'],
    preset: 'ts-jest/presets/default-esm',
    reporters: ['default', 'jest-junit'],
    setupFiles: ['<rootDir>/jest.setup.js'],
    setupFilesAfterEnv: ['jest-extended/all'],
    testMatch: ['<rootDir>/src/**/__tests__/**/*.test.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/bfe.dev/'],
    testResultsProcessor: 'jest-junit',
    transform: {
        '^.+\\.ts$': [
            'ts-jest',
            {
                useESM: true,
                tsconfig: './tsconfig.jest.json',
            },
        ],
    },
};

export default config;
