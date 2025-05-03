import {test, expect} from '@playwright/test';
import { generateArticle } from '../utils/testData';
import elementsforCreateArticle from '../locators/createArticle';
class AddArticlePage {
  private page: any;

  constructor(page: any) {
    this.page = page;
  }

  async createArticle(title: string, description: string, body: string, tags: string[]) {
    await this.page.locator(elementsforCreateArticle.createArticleButton).click({force: true});
    await this.page.locator(elementsforCreateArticle.title).fill(title);
    await expect(this.page.locator(elementsforCreateArticle.title)).toHaveValue(title);
    await this.page.locator(elementsforCreateArticle.description).fill(description);
    await expect(this.page.locator(elementsforCreateArticle.description)).toHaveValue(description);
    await this.page.locator(elementsforCreateArticle.body).fill(body);
    await expect(this.page.locator(elementsforCreateArticle.body)).toHaveValue(body);
    await this.page.locator(elementsforCreateArticle.tags).fill(tags.join(','));
    for (const tag of tags) {
      await this.page.locator(elementsforCreateArticle.tags).fill(tag);
      await this.page.keyboard.press('Enter');
    }
    await this.page.locator(elementsforCreateArticle.publishButton).click({force: true});
    await this.page.waitForTimeout(2000);
    
  }

}
export default AddArticlePage

