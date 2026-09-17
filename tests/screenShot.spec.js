import{test , expect} from '@playwright/test'

test('ss', async ({page})=>{
    await page.goto('https://www.google.com/');

    await page.screenshot({path : 'test.png'});
    expect (await page.screenshot()).toMatchSnapshot('test.png');
})