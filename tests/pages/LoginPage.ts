import { Locator, Page } from '@playwright/test';
import { BASE_URL, PASS, TEST_ENVIRONMENT, USER } from '../utils/Constants';

export class LoginPage {
  readonly page: Page;
  readonly orgField: Locator;
  readonly continueButton: Locator;
  readonly userField: Locator;
  readonly passwordField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.orgField = page.locator('#organizationName');
    this.continueButton = page.locator('button:has-text("Continue")');
    this.userField = page.locator('#username');
    this.passwordField = page.locator('#password');
  }

  async goToPage() {
    await this.page.goto(BASE_URL);
  }

  async login() {
    await this.orgField.fill(TEST_ENVIRONMENT);
    await this.continueButton.click();
    await this.userField.fill(USER);
    await this.passwordField.fill(PASS);
    await this.continueButton.click();
  }

  async catchToken() {
    const responsePromise = this.page.waitForResponse((response) =>
      response.url().includes('/token')
    );

    const token = await (await responsePromise).json();
    // return token;
  }
}
