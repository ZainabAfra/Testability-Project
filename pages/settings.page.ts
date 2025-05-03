import { Page, Locator } from '@playwright/test';
import elementsforSettings from '../locators/settings';

class SettingsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;

  }
  async navigateToSettings(image: string,username: string, bio:string, email: string, newPassword: string) {
   await this.page.locator(elementsforSettings.settingsButton).click({force: true});
   await this.page.waitForTimeout(2000);
   const profilePicture = await this.page.waitForSelector(elementsforSettings.profilePicture);
   await profilePicture.fill(image);
   await this.page.locator(elementsforSettings.username).fill(username);
   await this.page.locator(elementsforSettings.shorBio).fill(bio);
   await this.page.locator(elementsforSettings.email).fill(email);
   await this.page.locator(elementsforSettings.newPassword).fill(newPassword);
   await this.page.locator(elementsforSettings.updateSettingsButton).click({force: true});
  }
}
export default SettingsPage;