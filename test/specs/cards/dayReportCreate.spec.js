// const { expect } = require('chai'); // without Babel
import {expect} from 'chai';    //with Babel
const { URL_LOGIN } = require('../register_data');



describe('CREATE DAY REPORT', () => {
        before('Login as admin', () => {
        browser.url(URL_LOGIN);
        $('form input[name="email"]').setValue('yelenadipon@yahoo.com');
        $('form input[name="password"]').setValue('Zdkfr22.');
        $('form button[type="submit"]').click();
        browser.pause(1000)
    });
    after('AFTER', () => {
        browser.pause(3000);
    });
        it('should click top menu Diary', function () {
                browser.$('//a[@qa="diary-link"]').click()
        });
        it('should have a correct title', function () {
                const actual = browser.$('//h1[@qa="daily-title"]').getText();
                const expected = 'Daily reports';
                expect(actual).to.eq(expected);
        });
        // it('should click on Create day report button', function () {
        //       browser.$('')
        // });


});

