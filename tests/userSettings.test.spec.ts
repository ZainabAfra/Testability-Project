
import { test, expect } from '@playwright/test';
import { SettingsPage } from '../pages/settings.page';
import { generateUserProfile } from '../utils/testData';

test('Update User Settings', async ({ page }) => {
  const settingsPage = new SettingsPage(page);
  await settingsPage.loginViaSession();
  await settingsPage.goto();

  const newBio = generateUserProfile().bio;
  await settingsPage.updateBio(newBio);
  await settingsPage.goto();
  await expect(settingsPage.bioInput).toHaveValue(newBio);
});

test('Negative - Update bio with empty value shows error', async ({ page }) => {
  const settingsPage = new SettingsPage(page);
  await settingsPage.loginViaSession();
  await settingsPage.goto();

  await settingsPage.updateBio('');
  await expect(page.locator('.error-messages')).toContainText("Bio can't be blank");
});
