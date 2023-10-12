import { test, expect } from '@playwright/test';

test('タイトル表示', async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/nmemoto.dev/);
});