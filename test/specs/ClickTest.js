import { baseUrl } from '../../framework/configs/main.wdio.conf.js'
import { assert } from 'chai'
import Browser from '../../framework/browser/Browser.js';
import MainPage from '../pageObjects/MainPage.js';
import ClickPage from '../pageObjects/ClickPage.js';

const navToClickPage = 'Click';


describe('Click Test', function () {
    before('should Open the main page', async function () {
        Browser.openUrl(baseUrl);
    });
    it('should verify that the Button is clickable', async function () {
        await MainPage.clickNavigationLink(navToClickPage);

        await ClickPage.clickTheButton();

        assert.isTrue(await ClickPage.isButtonClickable(), 'Button is not clickable');
    });
})