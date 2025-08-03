import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',              
    setupFiles: './src/setupTests.ts', 
    globals: true, 
    coverage: {
      enabled: true,
      provider: 'istanbul',
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        'src/**/*.test.{js,jsx,ts,tsx}',
        'src/**/*.spec.{js,jsx,ts,tsx}',
        'src/index.{js,jsx,ts,tsx}',
        'src/setupTests.{js,ts}',
        'src/**/*.d.ts',
      ],
      reporter: ['text', 'html'],
      thresholds: {
        global: {
          statements: 80,
          branches: 50,
          functions: 50,
          lines: 50,
        },
      },
    },
  },
});
