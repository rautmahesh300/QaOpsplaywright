import{test,expect} from '@playwright/test';

test('Alert & hover',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#confirmBtn').click();

    page.on('dialog',dialog=>dialog.dismiss());

    await page.locator('.dropbtn').hover();

    page.on('dialog', dialog=> dialog.accept());
})