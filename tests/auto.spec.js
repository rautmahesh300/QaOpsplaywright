// 'https://testautomationpractice.blogspot.com/
// [onclick="myFunction()"]

import { test, expect } from "@playwright/test";
test("auto", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  console.log(page.title());

  //new tab
  const [newPage] = await Promise.all([
    page.context().waitForEvent("page"),
    page.locator('[onclick="myFunction()"]').click(),
  ]);

  console.log(await newPage.title());
  let txt = await newPage.locator('[data-start="978"]').textContent();
  //console.log(txt);

  await page.locator("#textarea").fill(txt);

  let inp = await page.locator('#textarea').inputValue();
  console.log(inp)
  await page.waitForTimeout(11000);
});
