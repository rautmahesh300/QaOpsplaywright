 import { test, expect } from "@playwright/test";
// //const{test,expect} = require('@playwright/test');

// test("automation", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");
//   let title = await page.title();
//   console.log(title);

//   await expect (page).toHaveTitle('Automation Testing Practice')

//   await page.getByRole("textbox", { name: "Enter Name" }).fill("activity");
//   await page.getByRole("checkbox", { name: "wednesday" }).click();
//   await page
//     .getByRole("textbox", { name: "Enter Phone" })
//     .fill("+91 998877878");
//   await page.getByRole("button", { name: "Confirmation Alert" }).click();

//   //getbytext
//   await page.getByText('Saturday').check();
//   await page.getByText("Sunday").click();
//   await page.getByText("Monday").click();

//   //getbylabel
//   await page.getByLabel("Address").fill("gfhdjkjfhg");
//   await page.getByLabel("Country:").selectOption("china");
//   await page.getByLabel("Colors:").selectOption("Yellow");
//   await page.getByLabel('Address:').fill('987654567')

//   //getbyplaceholder
//   await page
//     .getByPlaceholder("Enter EMail")
//     .fill("mraut@boroondara.vic.gov.au");
//   await page.getByPlaceholder("Enter Name").fill("ghanshyam");

//   await page.pause();

//   await page.locator('#name').fill('mahesh')
//     await page.locator('.form-control').nth(1).fill('ruutja')
//     await page.fill('[placeholder="Enter Phone"]', '8530223232')

//     let p=await page.locator('[class="title"]').nth(16).textContent();
//     console.log(p)

//     await expect(page.locator('[itemprop="name"]').last()).toContainText('Data Entry')
//     await expect(page.locator('[class="description"]')).toHaveText('For Selenium, Cypress & Playwright')
//     let ti=await page.locator('[class="description"]').textContent();
//     console.log(ti)

//     let js=await page.getByRole('link', {name : 'PlaywrightPractice'}).textContent();
//     console.log(js)

//     await expect(page.getByText('PlaywrightPractice')).toContainText('Playw')

//     console.log(await page.title());

//     await expect(page).toHaveTitle('Automation Testing Practice')

//     await expect(page.locator('[for="textbox"]').first()).toHaveText('Name:');
//     await expect(page.locator('[for="textbox"]').first()).toContainText('Nam')

//     let t=await page.locator('[class="title"]').allTextContents();
//     console.log(t);

//     const un = page.getByRole('textbox', {name: 'Enter Name'});
//     await un.fill('this is my email id')
// });
// // dom is api interface provided by browser
// // getbyrole
// // getbytext
// // getbyaltext
// // getByPlaceholder
// // getByLabel
// // getbyTestid
// // getbytitle

// test('blink', async ({browser})=>{
 
//   const context = await browser.newContext()
//   const page = await context.newPage();

//   await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
//   await expect(page.getByText('Register to sign in with your personal account')).toHaveAttribute('class','blink_me')

 

// })


// test('rahul', async ({browser})=>{
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
//   let visible = await page.locator('[for="radio1"]').isVisible();
//   console.log(visible)

//   let hidden = await page.locator('[for="radio1"]').isHidden();
//   console.log(hidden)

//   let enabled = await page.locator('#autocomplete').first().isEnabled();
//   console.log(enabled)

//   let disabled = await page.locator('#autocomplete').first().isDisabled()
//   console.log(disabled)

//   let editable = await page.locator('#autocomplete').first().isEditable()
//   console.log(editable)

//   await page.locator('#checkBoxOption1').check();
//   await page.locator('#checkBoxOption1').press('Tab')
//   await page.locator('[class="inputs ui-autocomplete-input"]').focus()
//   await page.pause()

 



















// await page.pause()
// })


// test('autom',async ({browser})=>{

//     const context = await browser.newContext();
//     const page    = await context.newPage();
//     await page.goto('https://testautomationpractice.blogspot.com/');

//     const name =page.getByRole('textbox', {name : 'Enter Name'})
//     const ph = page.locator('[class="form-check-label"]').first();
//     const email = page.locator('#email');
//     const mon = page.getByRole('checkbox', {name : 'Monday'});
//     const sun = page.getByRole('checkbox', {name : 'Sunday'});
//     const coun = page.getByLabel('Country:');

//     //await name.fill('mahesh raut');
//     await email.fill('mraut@boroondara.vic.gov.au')
//     await ph.click()
//     await mon.check()
//     await sun.check()
//     await coun.selectOption('japan')
//     await coun.selectOption('India')

//     await expect(page.getByRole('checkbox', {name : 'Sunday'})).toBeChecked();
//     let ys=await page.getByRole('checkbox', {name : 'Monday'}).isChecked()
//     console.log(ys)

//     // expect(await page.getByRole('checkbox', {name : 'Saturday'}).isChecked()).toBeFalsy();
    
//     // //switch to new tab
//     // let [newpage] = await Promise.all([
//     //   page.context().waitForEvent('page'),
//     //   page.locator('[onclick="myFunction()"]').click()
//     // ])
    
//     // console.log(await newpage.title())
//     // let text = await newpage.locator('.post-title').first().textContent();
//     // console.log(text)

//     // let text2 = await page.getByRole('textbox', {name : 'Enter Name'}).inputValue();
//     // console.log('text in the textbox is :-' ,text2)

//     // let emailv = await page.getByRole('textbox', {name : 'Enter EMail'}).inputValue();
//     // console.log(emailv);

//     // let count = await page.locator('h2').count();
//     // console.log(count);


     
//   await name.pressSequentially('lg TV', {delay : 500});

//   await expect(name).toHaveValue('lg TV');
//   await expect(page.getByText('Labels And Links')).toHaveText('Labels And Links')

//   await expect(page.getByText('Labels And Links')).toContainText('Labels')

//   let h1 = await page.locator('[for="textbox"]').first();
//   let inn= await h1.innerText(); console.log(inn)

//   let yes = await name.inputValue(); 
//   console.log(yes)

//   await expect(page.getByText('Sunday')).toBeVisible();



// })


// test('automs',async ({browser})=>{

//     const context = await browser.newContext();
//     const page    = await context.newPage();
//     await page.goto('https://testautomationpractice.blogspot.com/');

//     // let date = await page.locator('.date-picker-box');
//     // let submit = await date.getByRole('button', {name:'Submit'});
//     // await submit.click();

//     // let statement = await page.locator('.result');
//     // await expect(statement).toContainText('both start and end dates.')


//     // let table = await page.locator('#HTML8');
//     // let div = await table.locator('#productTable');
//     // await div.locator('[type="checkbox"]').first().click();

//     // let table2 = await page.locator('#HTML8');
//     // let div2 = await table2.locator('#productTable');
//     // await div2.locator('[type="checkbox"]').nth(1).check();

//     // let [newpage] = await Promise.all([

//     //   page.context().waitForEvent('page'),
//     //   page.locator('[onclick="myFunction()"]').click()
//     // ])
//     // console.log(newpage.title());

//     //locator chaining
//     // let html = await page.locator('[class="columns-cell"]');
//     // let task = await html.locator('[class="widget-content"]');
//     // let input = await task.locator('[type="text"]').first();
//     // await input.fill('This is shadow dom')

//     // let adr = await page.locator('.form-group').filter({hasText : 'Address'}).locator('.form-control');
//     // await adr.fill('behind panchyat samiti');

//     // const table22 = await page.locator('.form-group').first();
//     // let fil = table22.filter({hasText : 'Name'}).locator('#name');
//     // await fil.fill('npx playwright show-report')
    
//     // await page.getByText('Udemy Courses').click();
//     // await page.goBack();
//     // await page.goForward();
    
    
//     await page.waitForTimeout(6000);
//     await page.on("dialog", dialog => dialog.accept());
//     await page.waitForTimeout(6000);
//     await page.getByText('Simple Alert').click();
// await page.pause();
// });

// test('mobile',async ({browser})=>{
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   await page.goto('https://demoqa.com/alerts');
  
//   await page.on('dialog' , dialog=> dialog.accept("Click Button to see alert"))
//   await page.locator('#promtButton').click()


// })

// test('autonomus',async ({browser})=>{

//     const context = await browser.newContext();
//     const page    = await context.newPage();
//     await page.goto('https://testautomationpractice.blogspot.com/');

//    await page.locator('[class="dropbtn"]').hover();
//    await page.locator('#name').focus();

//    await page.on('dialog', dialog=> dialog.accept('he was a good man'));
//    await page.locator('#promptBtn').first().click()

//    await page.pause()
// });

test('autonom',async ({browser})=>{

    const context = await browser.newContext();
    const page    = await context.newPage();
    // await page.goto('https://testautomationpractice.blogspot.com/');

    // let lo1 = await page.locator('[class="form-group"]').first().filter({hasText :'Enter Name' });
    // let p1  = await lo1.getByPlaceholder('Enter Name');
    // p1.fill('ganesh gay')

    // await page.goForward()

    // await page.on('dialog', dialog => dialog.accept('table no 21'))
    // await page.locator('#promptBtn').click();

    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.frameLocator('#singleframe').locator('[type="text"]').first().fill('automationtesting.in/Frames.html')


    await page.click('.analystic');

    await page.pause();


});