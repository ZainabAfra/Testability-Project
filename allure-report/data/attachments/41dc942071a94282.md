# Test info

- Name: Article Operations >> Negative - Create article without title shows error
- Location: C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:42:8

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button[type="submit"]')
    - locator resolved to <button type="submit" class="btn btn-lg btn-primary pull-xs-right"> Sign in </button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

    at LoginPage.loginToApplication (C:\Users\afsar\TestabilityProject\pages\login.page.ts:20:30)
    at LoginHelper.loginToTheApp (C:\Users\afsar\TestabilityProject\utils\loginHelper.ts:15:9)
    at C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:19:5
```

# Page snapshot

```yaml
- navigation:
  - link "conduit":
    - /url: /
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "Sign in":
        - /url: /login
    - listitem:
      - link "Sign up":
        - /url: /register
- heading "Sign in" [level=1]
- paragraph:
  - link "Need an account?":
    - /url: /register
- list
- group:
  - group
  - group:
    - textbox "Email": Afsarfk012@gmail.com
  - group:
    - textbox "Password": password123
  - button "Sign in"
- contentinfo:
  - link "conduit":
    - /url: /
  - text: © 2025. An interactive learning project from
  - link "RealWorld OSS Project":
    - /url: https://github.com/gothinkster/realworld
  - text: . Code licensed under MIT. Hosted by
  - link "Bondar Academy":
    - /url: https://www.bondaracademy.com
  - text: .
```

# Test source

```ts
   1 | import elementforLoginPage from '../locators/loginPage';
   2 | export class LoginPage {
   3 |     [x: string]: any;
   4 |     readonly page;
   5 |     readonly emailInput;
   6 |     readonly passwordInput;
   7 |     readonly loginButton;
   8 |   
   9 |     constructor(page) {
  10 |       this.page = page;
  11 |       this.emailInput = page.locator(elementforLoginPage.emailInput);
  12 |       this.passwordInput = page.locator(elementforLoginPage.passwordInput);
  13 |       this.loginButton = page.locator(elementforLoginPage.loginButton);
  14 |     }
  15 |   
  16 |     async loginToApplication(email: string, password: string) {
  17 |       await this.page.goto('https://conduit.bondaracademy.com/login');
  18 |       await this.emailInput.fill(email);
  19 |       await this.passwordInput.fill(password);
> 20 |       await this.loginButton.click();
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  21 |        
  22 |     }
  23 |   }
  24 |   
  25 |   export default LoginPage;
```