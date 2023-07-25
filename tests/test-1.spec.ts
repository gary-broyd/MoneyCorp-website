import { test, expect } from '@playwright/test';

test('Question 2', async ({ page }) => {
  
  // 1. Open 'https://www.moneycorp.com/en-gb/' and verify
  await page.goto('https://www.moneycorp.com/en-gb/');
  await expect(page).toHaveURL('https://www.moneycorp.com/en-gb/');
  await expect(page).toHaveTitle("Moneycorp | Global Payments");

  // 2. Change language/region to en-us and verify
  await page.getByRole('button', { name: 'English' }).click();
  await page.getByLabel('USA English').click();
  await expect(page).toHaveURL('https://www.moneycorp.com/en-us/');

  // 3. Open 'Foreign exchange solutions' and verify  
  await page.locator('article').filter({ hasText: 'Foreign exchange solutions Our expert team provide tailored, efficient and cost-' }).getByLabel('Find out more').click();
  await expect(page).toHaveURL('https://www.moneycorp.com/en-us/business/foreign-exchange-solutions/');

  // 4. Search for 'international payments'
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('international payments');
  await page.getByRole('textbox', { name: 'Search' }).press('Enter');

  // 5. Validate search results page
  await expect(page).toHaveURL('https://www.moneycorp.com/en-us/search/?q=international+payments');


  // 6. Validate articles in list start with 'https://www.moneycorp.com/en-us/'







});