const { expect } = require('chai');
const { URL_LOGIN } = require('./register_data');

describe('CREATE DAY REPORT', () => {
        before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $('form input[name="email"]').setValue('yelenadipon@yahoo.com');
        $('form input[name="password"]').setValue('Zdkfr22.');
        $('form button[type="submit"]').click();
        browser.pause(10000)
    });
    it('should have the right title', () => {
        browser.url('https://stage.pasv.us/diary/create');
        browser.pause(10000);

    });
});

