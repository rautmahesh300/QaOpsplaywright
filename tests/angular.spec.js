import {test, expect} from '@playwright/test'

test('autom', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveTitle('Automation Testing Practice')
    
    
    await page.getByRole('radio', {name: 'Male'}).first().check()
    await page.getByRole('link', {name : 'Udemy Courses'}).click()
    await page.getByRole('textbox', {name :'Name'}).fill('hti sis jakhuoe')

    console.log(await page.title())

    await page.pause()
})