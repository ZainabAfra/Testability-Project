import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to login page
  await page.goto('https://conduit.bondaracademy.com/login');

  // Fill in login form
  await page.fill('input[formcontrolname="email"]', 'TestQA10@gmail.com');
  await page.fill('input[formcontrolname="password"]', 'password123');

  // Click sign in
  await page.click('button[type="submit"]');
  await page.waitForURL('**/');

  // Save session to a file
  await context.storageState({ path: 'playwright/.auth/state.json' });

  await browser.close();
})();
