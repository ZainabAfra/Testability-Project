# Test info

- Name: Update User Settings
- Location: C:\Users\afsar\TestabilityProject\tests\userSettings.test.spec.ts:6:5

# Error details

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('textarea[placeholder=""]')

    at SettingsPage.updateBio (C:\Users\afsar\TestabilityProject\pages\settings.page.ts:24:25)
    at C:\Users\afsar\TestabilityProject\tests\userSettings.test.spec.ts:12:22
```

# Page snapshot

```yaml
- heading "403 Forbidden" [level=1]
- list:
  - listitem: "Code: AccessDenied"
  - listitem: "Message: Access Denied"
  - listitem: "RequestId: S480PV9QFSA5K5T5"
  - listitem: "HostId: CZ7KAjqVfr4l2usdSQhIK8lLyrJZgUAoSIPpRvI37lTyzUb1Oud5O3oMAlHO9ZEOaVp/hDMotgCUNWwzS/dUuX61/5DXhHo47TDSplAMjtQ="
- separator
```

# Test source

```ts
   1 | import { Page, Locator } from '@playwright/test';
   2 | import { loginViaSession } from '../utils/session';
   3 |
   4 | export class SettingsPage {
   5 |   readonly page: Page;
   6 |   readonly bioInput: Locator;
   7 |   readonly saveButton: Locator;
   8 |
   9 |   constructor(page: Page) {
  10 |     this.page = page;
  11 |     this.bioInput = page.locator('textarea[placeholder=""]');
  12 |     this.saveButton = page.locator('button:has-text("Update Settings")');
  13 |   }
  14 |
  15 |   async loginViaSession() {
  16 |     await loginViaSession(this.page);
  17 |   }
  18 |
  19 |   async goto() {
  20 |     await this.page.goto('/settings');
  21 |   }
  22 |
  23 |   async updateBio(bio: string) {
> 24 |     await this.bioInput.fill(bio);
     |                         ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  25 |     await this.saveButton.click();
  26 |     await this.page.waitForTimeout(1000); 
  27 |   }
  28 | }
  29 |
```