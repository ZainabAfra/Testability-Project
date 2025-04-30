import { Page, Locator } from '@playwright/test';
import { loginViaSession } from '../utils/session';

export class SettingsPage {
  readonly page: Page;
  readonly bioInput: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bioInput = page.locator('textarea[placeholder="Short bio about you"]');
    this.saveButton = page.locator('button:has-text("Update Settings")');
  }

  async loginViaSession() {
    await loginViaSession(this.page);
  }

  async goto() {
    await this.page.goto('/settings');
  }

  async updateBio(bio: string) {
    await this.bioInput.fill(bio);
    await this.saveButton.click();
    await this.page.waitForTimeout(1000); 
  }
}
