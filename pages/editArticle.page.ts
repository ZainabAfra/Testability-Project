import {test, expect} from '@playwright/test';
import elementsforCreateArticle from '../locators/createArticle';
class EditArticlePage {
  private page: any;

  constructor(page: any) {
    this.page = page;
  }
  async editArticle(editbody: string) {
    await this.page.locator(elementsforCreateArticle.articleTitle).first().click({force: true});
    await this.page.locator(elementsforCreateArticle.editButton).click({force: true});
    await this.page.locator(elementsforCreateArticle.editbody).fill(editbody);
    await expect(this.page.locator(elementsforCreateArticle.editbody)).toHaveValue(editbody);
    await this.page.locator(elementsforCreateArticle.publishButton).click({force: true});
    await this.page.waitForTimeout(2000);
  }

  
}

export default EditArticlePage