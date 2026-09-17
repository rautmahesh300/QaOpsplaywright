const{expect, test} = require('@playwright/test')

test('rah',async({page})=>{

await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

const username = page.locator('[name="username"]');
const pass = page.locator('[id="password"]');
const title = page.locator('.card-title a');

await username.fill('rahulshettyacademy');
await pass.fill('Learning@830$3mK2');
await page.locator('[type="submit"]').click();

// await expect(page.locator('[style="display: none;"]')).toContainText('Incorrect');

// let ys= await page.locator('[style="display: none;"]').textContent();
// console.log('error shown on webpage is ===>>>', ys)

console.log(await page.title());

console.log(await page.locator('.card-title a').nth(0).textContent());
console.log(await page.locator('.card-title a').nth(1).textContent());

console.log(await page.locator('.card-title a').nth(2).textContent());
console.log(await page.locator('.card-title a').nth(3).textContent());



})