
import { Page, Locator } from '@playwright/test';
import { loginViaSession } from '../utils/session';

export class ArticlePage {
  readonly page: Page;
  readonly titleHeader: Locator;
  readonly bioInput: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleHeader = page.locator('h1');
  }

  async loginViaSession() {
    await loginViaSession(this.page);
  }

  async goToEditor() {
    await this.page.goto('https://conduit.bondaracademy.com/.');
  }

  async createArticle(title: string, desc: string, body: string, tags: string[]) {
    await this.page.locator("//a[@routerlink='/editor']").click();
    await this.page.fill("//input[@placeholder='Article Title']", title);
    await this.page.fill("//input[@placeholder='What's this article about?']", desc);
    await this.page.fill("//textarea[@placeholder='Write your article (in markdown)']", body);
    await this.page.fill("//input[@placeholder='Enter tags']", tags.join(', '));
    await this.page.click("//button[normalize-space()='Publish Article']");
  }

  async goToArticle(slug: string) {
    await this.page.goto(`/article/${slug}`);
  }

  async editArticle(newTitle: string) {
    await this.page.click('text=Edit Article');
    await this.page.fill('[placeholder="Article Title"]', newTitle);
    await this.page.click('button:has-text("Publish Article")');
  }

  async deleteArticle() {
    await this.page.click('button:has-text("Delete Article")');
  }
}

