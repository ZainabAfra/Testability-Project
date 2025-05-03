import elementforLoginPage from '../locators/loginPage';
export class LoginPage {
    [x: string]: any;
    readonly page;
    readonly emailInput;
    readonly passwordInput;
    readonly loginButton;
  
    constructor(page) {
      this.page = page;
      this.emailInput = page.locator(elementforLoginPage.emailInput);
      this.passwordInput = page.locator(elementforLoginPage.passwordInput);
      this.loginButton = page.locator(elementforLoginPage.loginButton);
    }
  
    async loginToApplication(email: string, password: string) {
      await this.page.goto('https://conduit.bondaracademy.com/login');
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
       
    }
  }
  
  export default LoginPage;