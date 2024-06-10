const {msedge, chromium} = require('playwright');

async function firstAttempt(){

    //Loading commands
    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    //Locators initial credentials
    const creds_raw = await page.locator('.text-center > b > i').allTextContents();
    const credentials={username: creds_raw[0], password: creds_raw[1]};

    //Locator actions login
    await page.locator("[id='username']").fill(credentials.username);
    await page.locator("[id='password']").fill(credentials.password);
    await page.getByRole('checkbox',{name: 'terms'}).check();
    await page.locator('[id="signInBtn"]').click();
    

    await page.waitForURL("https://rahulshettyacademy.com/angularpractice/shop");
    const title = await page.getByText('Shop Name').allTextContents();
    const buttons = await page.getByText('Add ').allTextContents();
    console.log(buttons, title);

    await page.pause();
    await browser.close();
}

firstAttempt();