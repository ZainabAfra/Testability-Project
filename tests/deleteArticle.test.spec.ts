import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login.page';
import LoginHelper from '../utils/loginHelper';
import DeleteArticlePage from '../pages/deleteArticle.page';
import { generateArticle } from '../utils/testData';




test.describe('Article Operations', () => {
    let loginPage: LoginPage;
    let loginHelper: LoginHelper;
    let deleteArticle: DeleteArticlePage;
  
    test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page);
      loginHelper = new LoginHelper(page);
      await loginHelper.loginToTheApp();
      deleteArticle = new DeleteArticlePage(page);
      
      
    });

    test("Delete Article", async ({ page }) => {
        const article = generateArticle(); 
        await deleteArticle.deleteArticle();
      
    }
    );
})