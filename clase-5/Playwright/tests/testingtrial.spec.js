const { test, expect } = require('@playwright/test');
const LoginPage = require('../pageObjects/login.page');

test.describe('login test', () => {

    test.beforeEach('page setup', async({page}) => {
        
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    })

    test('login positive', async ({page}) => {
        //Locators initial credentials
        const loginPage = new LoginPage(page);
        const creds_raw = await loginPage.credentials();
        const credentials={username: creds_raw[0], password: creds_raw[1]};

        //Locator actions login
        await loginPage.username.fill(credentials.username);
        await loginPage.password.fill(credentials.password);
        await loginPage.terms.check();
        await loginPage.signInBtn.click();
        

        await page.waitForURL("https://rahulshettyacademy.com/angularpractice/shop");
        
        for (const buttons of await page.getByText('Add ').all())
            await buttons.click();
        
        const cart = await page.locator('.nav-link.btn.btn-primary').allTextContents();
        console.assert(cart[0] === ' Checkout ( 4 )\n            (current)\n          ', 'incorrect');

        await page.close();
    })

    test.only('login failed', async({page}) => {
        const loginPage = new LoginPage(page);


        await loginPage.username.fill('silly');
        await loginPage.password.fill('goose');
        await loginPage.terms.check();
        await loginPage.signInBtn.click();

        await expect(page.url()).toEqual('https://rahulshettyacademy.com/loginpagePractise/');
    })


})