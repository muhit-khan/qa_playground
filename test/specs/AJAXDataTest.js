import { baseUrl } from '../../framework/configs/main.wdio.conf.js'
import { assert } from 'chai'
import Browser from '../../framework/browser/Browser.js'
import MainPage from '../pageObjects/MainPage.js'
import AJAXDataPage from '../pageObjects/AJAXDataPage.js'


const navToAJAXPage = 'AJAX Data'

describe('AJAX Data Test', function () {
    before('should Open the main page', async function () {
        Browser.openUrl(baseUrl);
    });
    it('should verify that the successful message is displayed', async function () {
        await MainPage.clickNavigationLink(navToAJAXPage);
        await AJAXDataPage.clickTriggerButton();
        assert.isTrue(await AJAXDataPage.isSuccessMessageDisplayed(), 'Successful Message is Not Displayed');
    });
})