import { Page } from 'playwright';
import elementsforCreateArticle from '../locators/createArticle';
class DeleteArticlePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async deleteArticle() {
    await this.page.locator(elementsforCreateArticle.articleTitle).first().click({force: true});
    await this.page.waitForTimeout(7000);
    await this.page.locator(elementsforCreateArticle.deleteButton).click({force: true});
    ;
  }

  
}

export default DeleteArticlePage