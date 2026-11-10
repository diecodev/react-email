import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '#load-prettier': new URL(
        './src/shared/utils/load-prettier.ts',
        import.meta.url,
      ).pathname,
    },
  },
  test: {
    globals: true,
    exclude: ['**/e2e/**', '**/node_modules/**'],
  },
});
