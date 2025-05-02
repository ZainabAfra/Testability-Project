import { test, expect } from '@playwright/test'; // ✅ correct syntax
import LoginPage from '../pages/login.page';
import { generateUserProfile } from '../utils/testData';

test.describe('Login Tests', () => {
  test('should successfully log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const userProfile = generateUserProfile();

    await loginPage.login(userProfile.email, userProfile.password);

    await expect(page).toHaveURL('https://conduit.bondaracademy.com/');
    await expect(page.locator('text=Your Feed')).toBeVisible();
  });
});
