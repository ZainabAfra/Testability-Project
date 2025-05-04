# Test info

- Name: Article Operations >> Edit Article
- Location: C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:30:8

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//h1[contains(text(),\'Quality Assurance Testing: Ensuring Excellence in Software Development\')]')

    at AddArticlePage.editArticle (C:\Users\afsar\TestabilityProject\pages\article.page.ts:24:68)
    at C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:35:26
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test';
   2 | import { generateArticle } from '../utils/testData';
   3 | import { de } from '@faker-js/faker';
   4 | import elementsforCreateArticle from '../locators/createArticle';
   5 | class AddArticlePage {
   6 |   private page: any;
   7 |
   8 |   constructor(page: any) {
   9 |     this.page = page;
  10 |   }
  11 |
  12 |   async createArticle(title: string, description: string, body: string, tags: string[]) {
  13 |     await this.page.locator(elementsforCreateArticle.createArticleButton).click({force: true});
  14 |     await this.page.locator(elementsforCreateArticle.title).fill(title);
  15 |     await this.page.locator(elementsforCreateArticle.description).fill(description);
  16 |     await this.page.locator(elementsforCreateArticle.body).fill(body);
  17 |     await this.page.locator(elementsforCreateArticle.tags).fill(tags.join(','));
  18 |     await this.page.locator(elementsforCreateArticle.publishButton).click({force: true});
  19 |     await this.page.waitForTimeout(2000);
  20 |     
  21 |   }
  22 |
  23 |   async editArticle(title: string) {
> 24 |     await this.page.locator(elementsforCreateArticle.articleTitle).click({force: true});
     |                                                                    ^ Error: locator.click: Target page, context or browser has been closed
  25 |     //await this.page.locator(elementsforCreateArticle.publishButton).click({force: true});
  26 |     await this.page.waitForTimeout(2000);
  27 |   }
  28 | }
  29 | export default AddArticlePage;
```