
import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login.page';
import LoginHelper from '../utils/loginHelper';
import SettingsPage from '../pages/settings.page';
import { settings } from '../utils/testData';  


test.describe("User Settings", () => {
  let loginPage: LoginPage;
  let loginHelper: LoginHelper;
  let settingsPage: SettingsPage;


  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
        loginHelper = new LoginHelper(page);
        await loginHelper.loginToTheApp();
        settingsPage = new SettingsPage(page);
  });

  test('Update user settings', async ({ page }) => {
    const setting = settings()
    await settingsPage.navigateToSettings(setting.image, setting.username, setting.bio, setting.email, setting.newPassword);
});

// There are no negative test for this scenario, if was the code should be like this.
// Negative test cases
/*test('Negative - Update bio with empty value shows error', async ({ page }) => {
  const invalidEmail = "invalidEmail";
  const invalidPassword = "invalidPassword";
  const setting = settings()
  await settingsPage.navigateToSettings(setting.image, setting.username, setting.bio, setting.email, setting.newPassword);
  await expect(page.locator('.error-messages')).toContainText("Bio can't be blank");
});*/
})