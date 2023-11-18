// jest.config.ts
import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['./jest.setup.ts'],
    moduleNameMapper: {
        '\\.css$': '<rootDir>/mocks/styleMock.js',
    },
};

export default config;
