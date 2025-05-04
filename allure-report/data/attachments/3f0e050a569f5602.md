# Test info

- Name: Negative - Update bio with empty value shows error
- Location: C:\Users\afsar\TestabilityProject\tests\userSettings.test.spec.ts:17:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "load"

    at loginViaSession (C:\Users\afsar\TestabilityProject\utils\session.ts:11:14)
    at SettingsPage.loginViaSession (C:\Users\afsar\TestabilityProject\pages\settings.page.ts:16:5)
    at C:\Users\afsar\TestabilityProject\tests\userSettings.test.spec.ts:19:3
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
     |              ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  12 | }
  13 |
```