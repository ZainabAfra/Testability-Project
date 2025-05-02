# Test info

- Name: Article Operations >> Create New Article
- Location: C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:16:7

# Error details

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[placeholder="Article Title"]')

    at ArticlePage.createArticle (C:\Users\afsar\TestabilityProject\pages\article.page.ts:25:21)
    at C:\Users\afsar\TestabilityProject\tests\article.test.spec.ts:19:23
```

# Page snapshot

```yaml
- heading "403 Forbidden" [level=1]
- list:
  - listitem: "Code: AccessDenied"
  - listitem: "Message: Access Denied"
  - listitem: "RequestId: KG8M1ZZCAZWMGP7X"
  - listitem: "HostId: Jv6Kx+QGudVVFV7MhrspYZ6AyZg92ygmGT8UV67lgoy3e7Dx0QTZ3/cIb+zNCElxT2s2QK/MJwI="
- separator
```

# Test source

```ts
   1 |
   2 | import { Page, Locator } from '@playwright/test';
   3 | import { loginViaSession } from '../utils/session';
   4 |
   5 | export class ArticlePage {
   6 |   readonly page: Page;
   7 |   readonly titleHeader: Locator;
   8 |   readonly bioInput: Locator;
   9 |   readonly saveButton: Locator;
  10 |
  11 |   constructor(page: Page) {
  12 |     this.page = page;
  13 |     this.titleHeader = page.locator('h1');
  14 |   }
  15 |
  16 |   async loginViaSession() {
  17 |     await loginViaSession(this.page);
  18 |   }
  19 |
  20 |   async goToEditor() {
  21 |     await this.page.goto('/editor');
  22 |   }
  23 |
  24 |   async createArticle(title: string, desc: string, body: string, tags: string[]) {
> 25 |     await this.page.fill('[placeholder="Article Title"]', title);
     |                     ^ Error: page.fill: Test timeout of 30000ms exceeded.
  26 |     await this.page.fill('[placeholder="What\'s this article about?"]', desc);
  27 |     await this.page.fill('[placeholder="Write your article (in markdown)"]', body);
  28 |     await this.page.fill('[placeholder="Enter tags"]', tags.join(','));
  29 |     await this.page.click('button:has-text("Publish Article")');
  30 |   }
  31 |
  32 |   async goToArticle(slug: string) {
  33 |     await this.page.goto(`/article/${slug}`);
  34 |   }
  35 |
  36 |   async editArticle(newTitle: string) {
  37 |     await this.page.click('text=Edit Article');
  38 |     await this.page.fill('[placeholder="Article Title"]', newTitle);
  39 |     await this.page.click('button:has-text("Publish Article")');
  40 |   }
  41 |
  42 |   async deleteArticle() {
  43 |     await this.page.click('button:has-text("Delete Article")');
  44 |   }
  45 | }
  46 |
  47 |
```