// // const { createDefaultPreset } = require("ts-jest");
// import { createDefaultPreset } from 'ts-jest'
// const tsJestTransformCfg = createDefaultPreset().transform;

// /** @type {import("jest").Config} **/
// export default {
//   testEnvironment: "node",
//   transform: {
//     ...tsJestTransformCfg,
//   },
// };

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest/presets/default-esm', // Tells Jest to handle TS + ES Modules
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }], // Forces ts-jest to process files as ESM
  },
  moduleNameMapper: {
    '^(\\.\\.?/.*)\\.js$': '$1', // Resolves your '../index.js' import back to '.ts'
  },
};