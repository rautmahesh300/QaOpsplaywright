import {test, expect} from '@playwright/test';

test('yield', async({page})=>{

   await page.goto('https://demo.automationtesting.in/Frames.html')
   let frame = page.frameLocator('#singleframe');
    await frame.locator('[type="text"]').fill('ssssssssssssssss')

    await page.pause()

})