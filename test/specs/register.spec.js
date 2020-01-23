// const assert = require('assert');
const {URL_REGISTER, URL_LOGIN, user,pageRegistration,pageLogin,pageConfirmation,pageRegisterSelectors} = require('./register_data');
const {expect} = require('chai');

describe('Register page', () => {
    browser.url(URL_REGISTER);
    it('should have a correct title', () => {
        const actualTitle = browser.getTitle();
        const expectedTitle = pageRegistration.title;
        expect(actualTitle).equal(expectedTitle);
    });
it('should have a correct header', ()=> {
   const actualH1Text = $(pageRegisterSelectors.h1).getText();
   const  expectedH1Text = pageRegistration.h1;
   expect(actualH1Text).equal(expectedH1Text);
});
    it('should have a correct description', ()=> {
        const actualDescription = $(pageRegisterSelectors.description).getText();
        const  expectedDescription = pageRegistration.description;
        expect(actualDescription).equal(expectedDescription);
});
    it('should have a correct submit button text', ()=> {
        const actual = $(pageRegisterSelectors.submitButton).getText();
        const  expected = pageRegistration.submitButton;
        expect(actual).equal(expected);
    });
    it('should fill first name field', ()=> {
        const element = $(pageRegisterSelectors.firstNameInput);
        element.setValue(user.firstName);
           });
    it('should fill last name field', ()=> {
        const element = $(pageRegisterSelectors.lastNameInput);
        element.setValue(user.lastName);
    });
    it('should fill number field', ()=> {
        const element = $(pageRegisterSelectors.phoneInput);
        element.setValue(user.phone);
    });
    it('should fill email field', ()=> {
        const element = $(pageRegisterSelectors.emailInput);
        element.setValue(user.email);
    });
    it('should fill password field', ()=> {
        const element = $(pageRegisterSelectors.passwordInput);
        element.setValue(user.password);
    });
    it('should fill about field', ()=> {
        const element = $(pageRegisterSelectors.about);
        element.setValue(user.about);
    });
    it('should fill goals field', ()=> {
        const element = $(pageRegisterSelectors.goals);
        element.setValue(user.goal);
    });
    it('should fill English level field', ()=> {
        const element = $(pageRegisterSelectors.language);
        element.selectByIndex(1);
    });
    it('should click Submit button', ()=> {
        const element = $(pageRegisterSelectors.submitButton);
        element.click();
        browser.pause(5000)
    });
});
    describe('Log In page', () => {
        before(()=>{
            browser.url(URL_LOGIN);
        });
it('should have a correct title in', ()=> {
    const actualH1Text = $(pageRegisterSelectors.h1).getText();
    const  expectedH1Text = pageLogin.h1;
    expect(actualH1Text).equal(expectedH1Text);
});

    it('should fill email field ', ()=> {
        const element = $(pageRegisterSelectors.emailInput);
        element.setValue(user.email);
    });
    it('should fill password field', ()=> {
        const element = $(pageRegisterSelectors.passwordInput);
        element.setValue(user.password);
    });
    it('should click LogIn button', ()=> {
        const element = $(pageRegisterSelectors.submitButton);
        element.click();
        browser.pause(5000)
    });
    });
        describe('Confirmation register page', () => {
    it('should have a correct title', ()=> {
        const actualH1Text = $(pageRegisterSelectors.h1).getText();
        const  expectedH1Text = pageConfirmation.h1;
        expect(actualH1Text).equal(expectedH1Text);
        browser.pause(5000)
});
        });