// https://rahulshettyacademy.com/api/ecom/auth/login

//  {userEmail: "rautmahesh300@gmail.com", userPassword: "HPpavillion59K#"}
//     https://rahulshettyacademy.com/client/#/dashboard/dash
// ADIDAS ORIGINAL

import { test, expect, request } from "@playwright/test";
let token;
let searchOrders;
test.beforeAll(async () => {
  let req = await request.newContext();
  let api = await req.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
    data: {
      userEmail: "rautmahesh300@gmail.com",
      userPassword: "HPpavillion59K#",
    },
  });
  
  expect (api.ok()).toBeTruthy(); 
  let json = await api.json();
  token = await json.token;
  console.log(token);


  let order = await req.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
    {
        data : {orders: [{country: "Antarctica", productOrderedId: "6960ea76c941646b7a8b3dd5"}]},
        headers : {'Authorization' : token ,
            'content-type' : 'application/json',
        },
    })

    let json2 = await order.json();
    //console.log(json2);
    searchOrders = json2.orders;
    console.log(searchOrders)
});
test('api',async({page})=>{
    page.addInitScript(value =>{
        window.localStorage.setItem('token', value);       
    }, token)

    await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash');
    await expect(page.getByText('ADIDAS ORIGINAL')).toBeVisible();

    await page.getByRole('button', {name : 'ORDERS'}).click();

    await expect(page.locator('body')).toContainText(searchOrders);


    await page.pause();
});