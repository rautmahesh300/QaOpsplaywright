import {test, expect} from '@playwright/test';

import loginData from '../testData/loginData.json';

for ( let data of loginData){

    test(`login with ${data.userName}`, async({page})=>{

        await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

        await page.locator('#userEmail').fill(data.userName);
        await page.locator('#userPassword').fill(data.password);
    })
}