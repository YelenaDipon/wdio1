import Page from '../Page';

class LoginPage extends Page {
    get email() {
        return $('//input[@name="email"]');
    }

    get password() {
        return $('//input[@name="password"]');
    }

    get submitBtn() {
        return browser.$('//button[@type="submit"]');
    }

    get h1() {
        return browser.$('//h1');
    }

    login() {
        this.open();
        this.email.setValue('yelenadipon@yahoo.com');
        this.password.setValue('Zdkfr22.');
        this.submitBtn.click();
        browser.pause(3000);
    }

    open() {
        super.open('https://stage.pasv.us/user/login');
    }
}

export default new LoginPage();