# Test info

- Name: Article Operations >> Filter Articles by Tag
- Location: C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:39:7

# Error details

```
Error: page.goto: Could not resolve hostname
Call log:
  - navigating to "https://qa.realworld.io/", waiting until "load"

    at loginViaSession (C:\Users\afsar\TestabilityProject\utils\session.ts:11:14)
    at ArticlePage.loginViaSession (C:\Users\afsar\TestabilityProject\pages\article.page.ts:17:5)
    at C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:13:5
```

# Test source

```ts
   1 | import { Page } from '@playwright/test';
   2 |
   3 | export async function loginViaSession(page: Page) {
   4 |   await page.addInitScript(([token]) => {
   5 |     if (token) {
   6 |       window.localStorage.setItem('jwtToken', token);
   7 |     } else {
   8 |       console.error('AUTH_TOKEN is undefined');
   9 |     }
  10 |   }, [process.env.AUTH_TOKEN || '']);
> 11 |   await page.goto('/');
     |              ^ Error: page.goto: Could not resolve hostname
  12 | }
  13 |
```