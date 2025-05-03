import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login.page';
import LoginHelper from '../utils/loginHelper';
import EditArticlePage from '../pages/editArticle.page';
import { generateArticle } from '../utils/testData';



test.describe('Article Operations', () => {
    let loginPage: LoginPage;
    let loginHelper: LoginHelper;
    let editarticle: EditArticlePage;
  
    test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page);
      loginHelper = new LoginHelper(page);
      await loginHelper.loginToTheApp();
      editarticle = new EditArticlePage(page);
      
    });

    test("Edit Article", async ({ page }) => {
        const editArticle = generateArticle();
        await editarticle.editArticle(editArticle.editbody);
      
    });
});