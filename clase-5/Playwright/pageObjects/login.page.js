class LoginPage{
    constructor (page){
        this.page = page
    }

    get password(){
        return this.page.locator("[id='password']");
    }

    get username(){
        return this.page.locator("[id='username']");
    }

    get terms(){
        return this.page.getByRole('checkbox',{name: 'terms'});
    }

    get signInBtn(){
        return this.page.locator('[id="signInBtn"]');
    }

    get credentials(){
        return this.page.locator('.text-center > b > i').allTextContents();
    }


}

module.exports = LoginPage;