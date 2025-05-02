# Test info

- Name: Article Operations >> Filter Articles by Tag
- Location: C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:39:7

# Error details

```
Error: page.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('text=test')

    at C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:41:16
```

# Test source

```ts
   1 |
   2 | import { test, expect } from '@playwright/test';
   3 | import { ArticlePage } from '../pages/article.page';
   4 | import { createArticleViaAPI } from '../utils/apiHelpers';
   5 | import { generateArticle } from '../utils/testData';
   6 |
   7 | test.describe('Article Operations', () => {
   8 |   let articlePage: ArticlePage;
   9 |   let slug: string;
  10 |
  11 |   test.beforeEach(async ({ page }) => {
  12 |     articlePage = new ArticlePage(page);
  13 |     await articlePage.loginViaSession();
  14 |   });
  15 |
  16 |   test('Create New Article', async ({ page }) => {
  17 |     const article = generateArticle();
  18 |     await articlePage.goToEditor();
  19 |     await articlePage.createArticle(article.title, article.description, article.body, article.tags);
  20 |     await expect(articlePage.titleHeader).toHaveText(article.title);
  21 |     await expect(page).toHaveURL(/article\/.+/);
  22 |   });
  23 |
  24 |   test('Edit Article', async ({ page }) => {
  25 |     slug = await createArticleViaAPI();
  26 |     await articlePage.goToArticle(slug);
  27 |     const newTitle = 'Updated Title';
  28 |     await articlePage.editArticle(newTitle);
  29 |     await expect(articlePage.titleHeader).toHaveText(newTitle);
  30 |   });
  31 |
  32 |   test('Delete Article', async ({ page }) => {
  33 |     slug = await createArticleViaAPI();
  34 |     await articlePage.goToArticle(slug);
  35 |     await articlePage.deleteArticle();
  36 |     await expect(page).toHaveURL('/');
  37 |   });
  38 |
  39 |   test('Filter Articles by Tag', async ({ page }) => {
  40 |     await page.goto('/');
> 41 |     await page.click('text=test');
     |                ^ Error: page.click: Target page, context or browser has been closed
  42 |     await expect(page.locator('.article-preview')).toContainText('test');
  43 |   });
  44 |
  45 |   // Negative test cases
  46 |   test('Negative - Create article without title shows error', async ({ page }) => {
  47 |     await articlePage.goToEditor();
  48 |     await articlePage.createArticle('', 'Desc', 'Body', ['tag']);
  49 |     await expect(page.locator('.error-messages')).toContainText("title can't be blank");
  50 |   });
  51 | });
  52 |
```