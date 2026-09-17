const { test, expect } = require("@playwright/test");

test("click on signup & sign up the user", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  //click on register here
  await page.locator('[class="text-reset"]').click();
  await page.locator("#firstName").fill("mahesh");
  await page.locator("#lastName").fill("raut");
  await page.locator("#userEmail").fill("rautmahesh300@gmail.com");
  await page.locator("#userMobile").fill("9561843333");
  await page.locator("#userPassword").fill("HPpavillion59K#");
  await page.locator("#confirmPassword").fill("HPpavillion59K#");
  await page.locator('[class="col-md-1"]').click();

  await page.locator('[type="submit"]');

  //expect account created sucessfully
  await expect(
    page.locator("body").textContent("Account Created Successfully"),
  );
  //click on login
  await page.locator('[tabindex="0"]').click();

  //now login page
  await page.locator("#userEmail").fill("rautmahesh300@gmail.com");
  await page.locator("#userPassword").fill("HPpavillion59K#");
  await page.locator('[name="login"]').click();

  //await page.waitForTimeout(7000);

  await page.waitForLoadState('networkidle');
  //read 1st item name
  console.log(await page.locator('[style="text-transform: uppercase;"]').allTextContents());

  await expect(page.locator('[target="_blank"]')).toHaveAttribute('class','blinkingText');
  await page.waitForTimeout(6000);
});
