import { defineConfig } from 'tsdown';

export default defineConfig([
  {
    dts: true,
    entry: {
      index: './src/node/index.ts',
      core: './src/node/core.ts',
    },
    outDir: './dist/node',
    format: ['cjs', 'esm'],
  },
  {
    dts: true,
    entry: {
      index: './src/browser/index.ts',
      core: './src/browser/core.ts',
    },
    outDir: './dist/browser',
    format: ['cjs', 'esm'],
  },
  {
    dts: true,
    entry: {
      index: './src/edge/index.ts',
      core: './src/edge/core.ts',
    },
    outDir: './dist/edge',
    format: ['cjs', 'esm'],
  },
]);
