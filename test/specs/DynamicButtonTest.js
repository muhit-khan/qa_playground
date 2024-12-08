import { baseUrl } from '../../framework/configs/main.wdio.conf.js'
import { assert } from 'chai'
import Browser from '../../framework/browser/Browser.js';
import MainPage from '../pageObjects/MainPage.js';
import DynamicIDPage from '../pageObjects/DynamicIDPage.js'

const dynamicIdPageButton = 'Dynamic ID';


describe('Dynamic Button Test', function () {
    before('should Open the main page', async function () {
        Browser.openUrl(baseUrl);
    });
    it('should verify that the button click is recorded and ID is not used for button identification', async function () {
        await MainPage.clickNavigationLink(dynamicIdPageButton);

        assert.isTrue(await DynamicIDPage.isDynamicButtonDisplayed(), 'Dynamic Button is not displayed');
    });
})