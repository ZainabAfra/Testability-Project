# Test info

- Name: Article Operations >> Create New Article
- Location: C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:24:8

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//a[@routerlink=\'/editor\']')

    at AddArticlePage.createArticle (C:\Users\afsar\TestabilityProject\pages\article.page.ts:12:75)
    at C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:26:26
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test';
   2 | import { generateArticle } from '../utils/testData';
   3 | import elementsforCreateArticle from '../locators/createArticle';
   4 | class AddArticlePage {
   5 |   private page: any;
   6 |
   7 |   constructor(page: any) {
   8 |     this.page = page;
   9 |   }
  10 |
  11 |   async createArticle(title: string, description: string, body: string, tags: string[]) {
> 12 |     await this.page.locator(elementsforCreateArticle.createArticleButton).click({force: true});
     |                                                                           ^ Error: locator.click: Target page, context or browser has been closed
  13 |     await this.page.locator(elementsforCreateArticle.title).fill(title);
  14 |     await expect(this.page.locator(elementsforCreateArticle.title)).toHaveValue(title);
  15 |     await this.page.locator(elementsforCreateArticle.description).fill(description);
  16 |     await expect(this.page.locator(elementsforCreateArticle.description)).toHaveValue(description);
  17 |     await this.page.locator(elementsforCreateArticle.body).fill(body);
  18 |     await expect(this.page.locator(elementsforCreateArticle.body)).toHaveValue(body);
  19 |     await this.page.locator(elementsforCreateArticle.tags).fill(tags.join(','));
  20 |     await expect(this.page.locator(elementsforCreateArticle.tags)).toHaveValue(tags.join(','));
  21 |     await this.page.locator(elementsforCreateArticle.publishButton).click({force: true});
  22 |     await this.page.waitForTimeout(2000);
  23 |     
  24 |   }
  25 |
  26 |   async editArticle(editbody: string) {
  27 |     await this.page.locator(elementsforCreateArticle.articleTitle).first().click({force: true});
  28 |     await this.page.locator(elementsforCreateArticle.editButton).click({force: true});
  29 |     await this.page.locator(elementsforCreateArticle.editbody).fill(editbody);
  30 |     await expect(this.page.locator(elementsforCreateArticle.editbody)).toHaveValue(editbody);
  31 |     await this.page.locator(elementsforCreateArticle.publishButton).click({force: true});
  32 |     await this.page.waitForTimeout(2000);
  33 |   }
  34 |
  35 |   async deleteArticle() {
  36 |     await this.page.locator(elementsforCreateArticle.articleTitle).click({force: true});
  37 |     await this.page.locator(elementsforCreateArticle.deleteButton).click({force: true});
  38 |   
  39 |     await this.page.waitForTimeout(2000);
  40 |   }
  41 | }
  42 | export default AddArticlePage
  43 |
  44 |
```