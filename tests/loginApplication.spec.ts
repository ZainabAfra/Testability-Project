import { test, expect } from '@playwright/test'; 
import { LoginPage } from '../pages/login.page';

test.describe('Login Tests', () => {
  test('should successfully log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginToApplication('email','password');
    await expect(page).toHaveURL('https://conduit.bondaracademy.com/login');
    await expect(page).toHaveTitle("Conduit | Practice Test Automation")
   
  });
});
