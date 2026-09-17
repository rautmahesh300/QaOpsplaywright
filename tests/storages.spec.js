import { test, expect, request } from "@playwright/test";
let save;
test.beforeAll(async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/client/");
  await page.fill("#userEmail", "rautmahesh300@gmail.com");
  await page.fill("#userPassword", "HPpavillion59K#");
  await page.click('[id="login"]');
  await page.waitForLoadState("networkidle");

  await context.storageState({path : 'state.json'})
  save = await browser.newContext({storageState : 'state.json'})
});

test('pis', async ({})=>{
    let page = await save.newPage();
    await page.goto('https://rahulshettyacademy.com/client/');
    console.log(await page.title());
})