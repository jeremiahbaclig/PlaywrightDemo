import { test as base } from '@playwright/test';
import { PageFixture } from './utils/PageFixture';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';

export const test = base.extend<PageFixture>({
  loginPage: async ({ page }, use) => {
    // can call login functions here
    await use(new LoginPage(page));
  },

  homePage: async ({ page }, use) => {
    // can call home functions here
    await use(new HomePage(page));
  },
});

export { expect } from '@playwright/test';
