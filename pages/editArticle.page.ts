import { Page } from 'playwright';
import elementsforCreateArticle from '../locators/createArticle';
class EditArticlePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async editArticle(editbody: string) {
    await this.page.locator(elementsforCreateArticle.articleTitle).first().click({force: true});
    await this.page.locator(elementsforCreateArticle.editButton).click({force: true});
    await this.page.waitForTimeout(5000);
    await this.page.locator(elementsforCreateArticle.editbody).click({force: true});
    await this.page.locator(elementsforCreateArticle.editbody).fill(editbody);
    await this.page.locator(elementsforCreateArticle.publishButton).click({force: true});
    await this.page.waitForTimeout(2000);
  }

  
}

export default EditArticlePage