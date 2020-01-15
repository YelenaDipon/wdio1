// const assert = require('assert');
const {expect} = require('chai');
const firstName = 'Yelena';
const lastName = 'Dipon';
const email = Math.random() + 'diponyelena@gmail.com';
const password = "Kotya67"
describe('Register page', () => {
    before(()=>{
        browser.url('https://stage.pasv.us/user/register')
    });
    it('should have the right title', () => {
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor';
        expect(actualTitle).equal(expectedTitle);
    });

it('should have a correct title', ()=> {
   const actualH1Text = $('h1').getText();
   const  expectedH1Text ='User Register';
   expect(actualH1Text).equal(expectedH1Text);
});
    it('should have a correct description', ()=> {
        const actualDescription = $('p').getText();
        const  expectedDescription ='Profiles with fictitious or dummy data will be deleted.';
        expect(actualDescription).equal(expectedDescription);
});
    it('should have a correct submit button text', ()=> {
        const actual = $('form button').getText();
        console.log(actual);
        const  expected ='Submit';
        expect(actual).equal(expected);
    });
    it('should fill first name field', ()=> {
        const element = $('form input[name="firstName"]');
        element.setValue(firstName);
           });
    it('should fill last name field', ()=> {
        const element = $('form input[name="lastName"]');
        element.setValue(lastName);
          });
    it('should fill number field', ()=> {
        const element = $('form input[name="phone"]');
        element.setValue('19169902185');
    });
    it('should fill email field', ()=> {
        const element = $('form input[name="email"]');
        element.setValue(email);
    });
    it('should fill password field', ()=> {
        const element = $('form input[name="password"]');
        element.setValue(password);
    });
    it('should fill about field', ()=> {
        const element = $('form textarea[name="about"]');
        element.setValue('About section');
    });
    it('should fill goals field', ()=> {
        const element = $('form textarea[name="goals"]');
        element.setValue('Goals section');

    });
    it('should fill goals field', ()=> {
        const element = $('form textarea[name="goals"]');
        element.setValue('Goals section');
        // const  expected ='Submit';
        // expect(element).equal(expected);
    });
    it('should fill English level field', ()=> {
        const element = $('form select[name="englishLevel"]');
        element.selectByIndex(1);
    });
    it('should click button', ()=> {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(10000)
    });
it('should have a correct title in LogIn Screen', ()=> {
    const actualH1Text = $('h1').getText();
    const  expectedH1Text ='User Login';
    expect(actualH1Text).equal(expectedH1Text);
});

    it('should fill email field in LogIn Screen', ()=> {
        const element = $('form input[name="email"]');
        element.setValue(email);
    });
    it('should fill password field in LogIn Screen', ()=> {
        const element = $('form input[name="password"]');
        element.setValue(password);
    });
    it('should click button in LogIn Screen', ()=> {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(5000)
    });
    it('should have a "You are a new user" title in Logged In Screen', ()=> {
        const actualH1Text = $('h1').getText();
        const  expectedH1Text ='You are a new user';
        expect(actualH1Text).equal(expectedH1Text);
        browser.pause(10000)
    });
});