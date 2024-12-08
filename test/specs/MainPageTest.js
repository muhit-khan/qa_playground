import { baseUrl } from '../../framework/configs/main.wdio.conf.js'
import { assert } from 'chai'
import Browser from '../../framework/browser/Browser.js'
import MainPage from '../pageObjects/MainPage.js'


describe('Main Page Test', function () {
    before('should Open the main page', async function () {
        Browser.openUrl(baseUrl);
    });
    it('should verify that the Main Page is Opened', async function () {
        assert.isTrue(await MainPage.isPageOpened(), 'Main Page is not opened');
    });
})