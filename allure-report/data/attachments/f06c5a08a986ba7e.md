# Test info

- Name: Article Operations >> Create New Article
- Location: C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:26:8

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//a[@routerlink=\'/editor\']')

    at AddArticlePage.articlePage (C:\Users\afsar\TestabilityProject\pages\article.page.ts:10:59)
    at C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:29:26
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
- list:
  - listitem: email or password is invalid
- group:
  - group
  - group:
    - textbox "Email": email
  - group:
    - textbox "Password": password
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
     |                                                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  11 |   }
  12 | }
  13 | export default AddArticlePage;
```