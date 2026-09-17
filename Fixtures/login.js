import { test as base, expect } from '@playwright/test'

export const test = base.extend({
    driver: async ({ page }, use) => {
        await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        await page.fill("#userEmail", "rautmahesh300@gmail.com");
        await page.fill("#userPassword", "HPpavillion59K#");
        await page.click('[id="login"]');
        await use(page);
    }
})
export {expect}