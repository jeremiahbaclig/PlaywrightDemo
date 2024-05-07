import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly welcomeIndicator: Locator;
  readonly searchButton: Locator;
  readonly searchInputBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeIndicator = page.locator('[data-testid="welcome"]');
    this.searchButton = page.locator('button:has-text("Search")');
    this.searchInputBox = page.locator('[placeholder="Search Here"]');
  }

  async assertWelcome() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.welcomeIndicator.waitFor({ timeout: 10000 });
  }
}
