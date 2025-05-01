
import { test, expect } from '@playwright/test';
import { ArticlePage } from '../pages/article.page';
import { createArticleViaAPI } from '../utils/apiHelpers';
import { generateArticle } from '../utils/testData';

test.describe('Article Operations', () => {
  let articlePage: ArticlePage;
  let slug: string;

  test.beforeEach(async ({ page }) => {
    articlePage = new ArticlePage(page);
    await articlePage.loginViaSession();
  });

  test('Create New Article', async ({ page }) => {
    const article = generateArticle();
    await articlePage.goToEditor();
    await articlePage.createArticle(article.title, article.description, article.body, article.tags);
    await expect(articlePage.titleHeader).toHaveText(article.title);
    await expect(page).toHaveURL(/article\/.+/);
  });

  test('Edit Article', async ({ page }) => {
    slug = await createArticleViaAPI();
    await articlePage.goToArticle(slug);
    const newTitle = 'Updated Title';
    await articlePage.editArticle(newTitle);
    await expect(articlePage.titleHeader).toHaveText(newTitle);
  });

  test('Delete Article', async ({ page }) => {
    slug = await createArticleViaAPI();
    await articlePage.goToArticle(slug);
    await articlePage.deleteArticle();
    await expect(page).toHaveURL('/');
  });

  test('Filter Articles by Tag', async ({ page }) => {
    await page.goto('/');
    await page.click('text=test');
    await expect(page.locator('.article-preview')).toContainText('test');
  });

  // Negative test cases
  test('Negative - Create article without title shows error', async ({ page }) => {
    await articlePage.goToEditor();
    await articlePage.createArticle('', 'Desc', 'Body', ['tag']);
    await expect(page.locator('.error-messages')).toContainText("title can't be blank");
  });
});
