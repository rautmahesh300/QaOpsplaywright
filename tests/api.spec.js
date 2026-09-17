import { test, expect, request } from "@playwright/test";
let tok;
let searchOrders;

test.beforeAll(async () => {
  let req = await request.newContext();
  let api = await req.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login",
    {
      data: {
        userEmail: "rautmahesh300@gmail.com",
        userPassword: "HPpavillion59K#",
      },
    },
  );
  expect(api.ok()).toBeTruthy();
  let json = await api.json();
  tok = await json.token;
  console.log(tok);

  let order = await req.post(
    "https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
      data: {
        orders: [
          {
            country: "Antarctica",
            productOrderedId: "6960ea76c941646b7a8b3dd5",
          },
        ],
      },
      headers: {
        Authorization: tok,
        "content-type": "application/json",
      },
    },
  );
  let json2 = await order.json();

  searchOrders = json2.orders;
  console.log(searchOrders);
});

test("autom", async ({ page }) => {
  page.addInitScript(value => {
    window.localStorage.setItem("token", value);
  }, tok);
  await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");

  await page.getByRole("button", { name: "ORDERS" }).click();

  await expect(page.locator("body")).toContainText(searchOrders);
});
