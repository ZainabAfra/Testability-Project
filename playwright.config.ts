import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  retries: 1,
  reporter: [
    ['html'],
    ['github'],
    ['allure-playwright']
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://conduit.bondaracademy.com',
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    storageState: 'playwright/.auth/state.json',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        storageState: 'playwright/.auth/state.json',
      },
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        storageState: 'playwright/.auth/state.json',
      },
    },
    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
        storageState: 'playwright/.auth/state.json',
      },
    },
  ],
});
