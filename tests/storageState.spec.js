import { test, expect, request } from "@playwright/test";
let webContext;
test.beforeAll(async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/");
  await page.fill("#userEmail", "rautmahesh300@gmail.com");
  await page.fill("#userPassword", "HPpavillion59K#");
  await page.click('[id="login"]');
  await page.waitForLoadState("networkidle");

  await context.storageState({path: 'state.json'});
  webContext = await browser.newContext({storageState : 'state.json'});
  
});

test("auto", async ({}) => {

    let page = await webContext.newPage(); 
    await page.goto('https://rahulshettyacademy.com/client/');
    console.log(await page.title())
});

test('click on adidas', async ({})=>{

    const page = await webContext.newPage();
    await page.goto('https://rahulshettyacademy.com/client/');
        console.log(await page.title())
})