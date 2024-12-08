import { baseUrl } from '../../framework/configs/main.wdio.conf.js'
import { assert } from 'chai'
import Browser from '../../framework/browser/Browser.js';
import MainPage from '../pageObjects/MainPage.js';
import ClassAttributePage from '../pageObjects/ClassAttributePage.js';

const classAttributePageButton = 'Class Attribute';
const messageToBeDisplayed = 'Primary button pressed';


describe('Class Attribute Button Test', function () {
    before('should Open the main page', async function () {
        Browser.openUrl(baseUrl);
    });
    it('should verify that the Class Attribute button clicked  and message displayed', async function () {
        await MainPage.clickNavigationLink(classAttributePageButton);

        await ClassAttributePage.clickClassAttributeButton();
        await ClassAttributePage.isAlertDisplayed();
        const messageDisplayed = ClassAttributePage.getAlertText();
        assert.equal(messageDisplayed, messageToBeDisplayed, 'Alert message is not displayed');
        await ClassAttributePage.acceptJSAlert();
    });
})