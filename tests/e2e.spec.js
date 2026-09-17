import { test, expect } from "@playwright/test";
test("end to end", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.fill("#userEmail", "rautmahesh300@gmail.com");
  await page.fill("#userPassword", "HPpavillion59K#");
  await page.click('[id="login"]');

  await page.waitForLoadState("networkidle");
  let ds = await page.locator('[class="card-body"]').allTextContents();
  console.log(ds);

  //await page.locator('.card-body').filter({hasText : 'iphone 13 pro'}).getByRole("button",{name:'Add To Cart'}).click();


  //find product name and save
  let product = await page
    .locator('[style="text-transform: uppercase;"]')
    .nth(1)
    .textContent();
  console.log(product);

  //add to cart
  await page.locator('[class="btn w-10 rounded"]').nth(1).click();

  await page.waitForTimeout(3000);
  //open cart
  await page.locator('[routerlink="/dashboard/cart"]').click();

  //check if it is same product in cart that we added
  await expect(page.locator("body")).toContainText(product);
  await page.waitForTimeout(3000);
  //checkout
  await page.locator('[class="btn btn-primary"]').nth(1).click();

  await page.waitForTimeout(3000);
  //cvv
  await page.locator('[type="text"]').nth(1).fill("345");

  //name on card
  await page.locator('[class="input txt"]').nth(1).fill("mahesh");

  //enter coupon
  await page.locator('[name="coupon"]').fill("rahulshettyacademy");

  //check coupan
  await page.click('[type="submit"]');
  await page.waitForTimeout(5000);

  //chek if coupon is applied
  await expect(page.locator('[style="color: green;"]')).toContainText(
    "Coupon Applied",
  );

  //enter country
  await page.locator(' input[placeholder="Select Country"]').pressSequentially('United States');
  await page.waitForTimeout(1000);
  await page.locator('button[type="button"]').first().click();

  await page.waitForTimeout(2000);
  //place order
  await page.click('[class="btnn action__submit ng-star-inserted"]');

  //grab order id
  let orderid = await page.locator('[class="em-spacer-1"]').nth(3).textContent();
  console.log("Order ID is : ", orderid)
  await page.waitForTimeout(2000);
  //click on order
  await page.locator('[class="btn btn-custom"]').nth(1).click();
  await page.waitForTimeout(2000);

  // //grab order id from orders page
  // let myorder = await page.locator('th[scope="row"]').first().textContent();
  // console.log(myorder)

  // if(orderid.includes(myorder))
  // {
  //   console.log('Placed order has been shown in my orders')
  // }

  let th= await page.locator('tbody tr').allTextContents();
  console.log(th)

  
  await page.pause();
});
