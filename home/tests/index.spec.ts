import { test, expect, type Locator } from '@playwright/test';

test('タイトルにnmemoto.devが表示されていること', async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/nmemoto.dev/);
});

test('ヘッダーにnmemoto.devが表示されていること', async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole('heading')).toHaveText('nmemoto.dev');
});

test('各種リンクが表示されていること', async ({ page }) => {
  await page.goto("/");
  const list = await page.getByRole('listitem').all()
  await expect(list[0]).toHaveText('GitHub');
  await expect(list[1]).toHaveText('X(Twitter)');
  await expect(list[2]).toHaveText('bluesky');
  await expect(list[3]).toHaveText('Zenn');
  await expect(list[4]).toHaveText('しずかなインターネット');
  await expect(list[5]).toHaveText('Speaker Deck');
});