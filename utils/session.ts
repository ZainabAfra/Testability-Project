import { Page } from '@playwright/test';

export async function loginViaSession(page: Page) {
  await page.addInitScript(([token]) => {
    if (token) {
      window.localStorage.setItem('jwtToken', token);
    } else {
      console.error('AUTH_TOKEN is undefined');
    }
  }, [process.env.AUTH_TOKEN || '']);
  await page.goto('/');
}
