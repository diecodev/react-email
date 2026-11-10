import { defineConfig } from 'tsdown';

export default defineConfig([
  {
    dts: true,
    entry: ['./src/node/index.ts'],
    outDir: './dist/node',
    format: ['cjs', 'esm'],
    deps: { neverBundle: ['#load-prettier'] },
  },
  {
    dts: true,
    entry: ['./src/browser/index.ts'],
    outDir: './dist/browser',
    format: ['cjs', 'esm'],
    deps: { neverBundle: ['#load-prettier'] },
  },
  {
    dts: true,
    entry: ['./src/edge/index.ts'],
    outDir: './dist/edge',
    format: ['cjs', 'esm'],
    deps: { neverBundle: ['#load-prettier'] },
  },
  {
    entry: {
      'load-prettier': './src/shared/utils/load-prettier.ts',
      'load-prettier.stub': './src/shared/utils/load-prettier.stub.ts',
    },
    outDir: './dist/prettier',
    format: ['esm'],
  },
]);
