import { baseUrl } from '../../framework/configs/main.wdio.conf.js'
import { assert } from 'chai'
import Browser from '../../framework/browser/Browser.js';
import MainPage from '../pageObjects/MainPage.js';
import ClientSideDelayPage from '../pageObjects/ClientSideDelayPage.js';

const navToClientSIdeDelayPage = 'Client Side Delay';
const messageToBeDisplayed = 'Data calculated on the client side.';


describe('Class Attribute Button Test', function () {
    before('should Open the main page', async function () {
        Browser.openUrl(baseUrl);
    });
    it('should verify that the Trigger Button clicked  and message displayed', async function () {
        await MainPage.clickNavigationLink(navToClientSIdeDelayPage);

        await ClientSideDelayPage.clickTriggerButton();
        assert.isTrue(await ClientSideDelayPage.isSuccessMessageDisplayed(), 'Success Message is not Displayed')

        const displayedMessage = await ClientSideDelayPage.getDisplayedMessage();
        assert.equal(displayedMessage, messageToBeDisplayed, 'Expected Message is Not Displayed')
    });
})