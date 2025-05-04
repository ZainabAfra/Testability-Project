# Test info

- Name: Article Operations >> Create New Article
- Location: C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:26:8

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('//a[@routerlink=\'/editor\']')

    at AddArticlePage.articlePage (C:\Users\afsar\TestabilityProject\pages\article.page.ts:10:59)
    at C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:29:26
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test';
   2 | class AddArticlePage {
   3 |   private page: any;
   4 |
   5 |   constructor(page: any) {
   6 |     this.page = page;
   7 |   }
   8 |
   9 |   async articlePage() {
> 10 |     await this.page.locator("//a[@routerlink='/editor']").click({force: true});
     |                                                           ^ Error: locator.click: Test ended.
  11 |   }
  12 | }
  13 | export default AddArticlePage;
```