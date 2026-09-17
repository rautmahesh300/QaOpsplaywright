import{test,expect} from '@playwright/test'

import loginData from '../test_data/loginData.json'

for(let d of loginData)
{
    test(`login with ${d.userEmail}`, async ({page})=>{
        await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

        await page.locator('#userEmail').fill(d.userEmail)
        await page.locator('#userPassword').fill(d.userPassword)
    })
}