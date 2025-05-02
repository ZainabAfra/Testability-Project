import { Page } from '@playwright/test';
import { generateUserProfile } from '../utils/testData';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        if (!page) {
            throw new Error('Page instance is required');
        }
        this.page = page;
    }

    async navigateToLoginPage() {
        await this.page.goto('https://conduit.bondaracademy.com/login');
    }

    async enterEmail(email: string) {
        await this.page.fill('input[placeholder="Email"]', email);
    }

    async enterPassword(password: string) {
        await this.page.fill('input[placeholder="Password"]', password);
    }

    async clickSignInButton() {
        await this.page.click('button[type="submit"]');
    }

    async login(email: string, password: string) {
        await this.navigateToLoginPage();
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickSignInButton();
    }

    async isErrorMessageVisible(): Promise<boolean> {
        return this.page.isVisible('.error-messages');
    }
}
export default LoginPage;