# Test info

- Name: Update User Settings
- Location: C:\Users\afsar\TestabilityProject\tests\userSettings.test.spec.ts:6:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://qa.realworld.io/
Call log:
  - navigating to "https://qa.realworld.io/", waiting until "load"

    at loginViaSession (C:\Users\afsar\TestabilityProject\utils\session.ts:11:14)
    at SettingsPage.loginViaSession (C:\Users\afsar\TestabilityProject\pages\settings.page.ts:16:5)
    at C:\Users\afsar\TestabilityProject\tests\userSettings.test.spec.ts:8:3
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
     |              ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://qa.realworld.io/
  12 | }
  13 |
```