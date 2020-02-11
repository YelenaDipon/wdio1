const { expect } = require('chai');
const { URL_LOGIN } = require('../register_data');

describe('CREATE DAY REPORT', () => {
        before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $('form input[name="email"]').setValue('yelenadipon@yahoo.com');
        $('form input[name="password"]').setValue('Zdkfr22.');
        $('form button[type="submit"]').click();
        browser.pause(1000)
    });
    // after('AFTER', () => {
    //     browser.pause(3000);
    //
    // });
});
//
