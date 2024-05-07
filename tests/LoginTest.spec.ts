import { test } from './BaseTest';

test('Can login', async ({ loginPage, homePage }) => {
  await loginPage.goToPage();
  await loginPage.login();

  await loginPage.catchToken();
  await homePage.assertWelcome();
});
