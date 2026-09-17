import {test, expect} from '@playwright/test';
import { loginPage } from '../page/loginPage';
import { addtocart } from '../page/addtocart';

test('pom', async ({page})=>{
    let login = new loginPage(page);
    let cart  = new addtocart(page);
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await login.loginApk('rautmahesh300@gmail.com', 'HPpavillion59K#')


    console.log(await page.title());

    await cart.openitems()
    await cart.addcart()
    await cart.openCart()
    await cart.assert()
})


// rautmahesh300@gmail.com
// HPpavillion59K#