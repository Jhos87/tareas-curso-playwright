const { test, expect } = require('@playwright/test');

test.describe('login test', () => {

    test.beforeEach('page setup', async({page}) => {
        await page.goto('');
    })

    test('login positive', async ({page}) => {
        //Locators initial credentials
     const creds_raw = await page.locator('.text-center > b > i').allTextContents();
    const credentials={username: creds_raw[0], password: creds_raw[1]};

    //Locator actions login
    await page.locator("[id='username']").fill(credentials.username);
    await page.locator("[id='password']").fill(credentials.password);
    await page.getByRole('checkbox',{name: 'terms'}).check();
    await page.locator('[id="signInBtn"]').click();
    

    await page.waitForURL("https://rahulshettyacademy.com/angularpractice/shop");
    
    for (const buttons of await page.getByText('Add ').all())
        await buttons.click();
    
    const cart = await page.locator('.nav-link.btn.btn-primary').allTextContents();
    console.assert(cart[0] === ' Checkout ( 4 )\n            (current)\n          ', 'incorrect');

    await page.close();
    })

    test.only('login failed', async({page}) => {
        await page.locator("[id='username']").fill('silly');
        await page.locator("[id='password']").fill('goose');
        await page.getByRole('checkbox',{name: 'terms'}).check();
        await page.locator('[id="signInBtn"]').click();

        await expect(page.url()).toEqual('https://rahulshettyacademy.com/loginpagePractise/');
    })


})