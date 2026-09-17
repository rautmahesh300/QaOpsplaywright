import { test, expect } from "@playwright/test";

test("calendar", async ({ page }) => {
  await page.goto("https://demoqa.com/date-picker");
  await page.waitForTimeout(2000);
  await page.click("#datePickerMonthYearInput");
  await page.waitForTimeout(2000);
  await page.locator(".react-datepicker__year-select").selectOption("2032");
  await page.waitForTimeout(2000);
  await page.locator(".react-datepicker__month-select").selectOption("November");
  await page.waitForTimeout(2000);

  await page.getByText("10").nth(3).click();
  await page.waitForTimeout(3000);

  await expect(page.locator('[value="11/10/2032"]').isVisible());

  //await page.pause();
});
