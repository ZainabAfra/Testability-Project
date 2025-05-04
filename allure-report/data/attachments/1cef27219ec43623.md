# Test info

- Name: Article Operations >> Edit Article
- Location: C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:24:7

# Error details

```
Error: page.goto: NS_ERROR_UNKNOWN_HOST
Call log:
  - navigating to "https://qa.realworld.io/", waiting until "load"

    at loginViaSession (C:\Users\afsar\TestabilityProject\utils\session.ts:11:14)
    at ArticlePage.loginViaSession (C:\Users\afsar\TestabilityProject\pages\article.page.ts:17:5)
    at C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:13:5
```

# Page snapshot

```yaml
- heading "Hmm. We’re having trouble finding that site." [level=1]
- paragraph: We can’t connect to the server at qa.realworld.io.
- paragraph
- strong: "If you entered the right address, you can:"
- list:
  - listitem: Try again later
  - listitem: Check your network connection
  - listitem: Check that Nightly has permission to access the web (you might be connected but behind a firewall)
- button "Try Again"
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
     |              ^ Error: page.goto: NS_ERROR_UNKNOWN_HOST
  12 | }
  13 |
```