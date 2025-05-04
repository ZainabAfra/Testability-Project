import { test, expect } from '@playwright/test';
import ArticlePage from '../pages/article.page';
import {LoginPage} from '../pages/login.page';
import LoginHelper from '../utils/loginHelper';
import AddArticlePage from '../pages/article.page';
import { generateArticle } from '../utils/testData';


test.describe('Article Operations', () => {
  let loginPage: LoginPage;
  let addArticlePage: ArticlePage;
  let loginHelper: LoginHelper;
  

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    loginHelper = new LoginHelper(page);
    await loginHelper.loginToTheApp();
    addArticlePage = new AddArticlePage(page);
    
  });

  test('Create New Article', async ({ page }) => {
    const article = generateArticle();
    await addArticlePage.createArticle(article.title, article.description, article.body, article.tags);
  });
  
 // Negative test cases
  test('Negative - Create article without title shows error', async ({ page }) => {
    await addArticlePage.createArticle('', 'Desc', 'Body', ['tag']);
    await expect(page.locator('.error-messages')).toContainText("title can't be blank");
  });
});

