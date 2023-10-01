import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'vkym - valery kerbin yulexis mathias Kerbin Griman' }).click();
  await page.getByText('Name').click();
  await page.getByRole('button', { name: 'Create a new Workflow' }).click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('');
  await page.getByPlaceholder('init Box').click();
  await page.getByPlaceholder('end Box').click();
  await page.getByLabel('Sidebar').click();
});