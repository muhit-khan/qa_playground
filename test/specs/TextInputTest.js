import { baseUrl } from '../../framework/configs/main.wdio.conf.js'
import { assert } from 'chai'
import Browser from '../../framework/browser/Browser.js';
import MainPage from '../pageObjects/MainPage.js';
import TextInputPage from '../pageObjects/TextInputPage.js';

const navToTextInputPage = 'Text Input';
const textToInput = 'Muhit is Testing';


describe('Text Input Test', function () {
    before('should Open the main page', async function () {
        Browser.openUrl(baseUrl);
    });
    it('should verify that the Text is inputted Properly', async function () {
        await MainPage.clickNavigationLink(navToTextInputPage);

        await TextInputPage.typeInputField(textToInput);
        await TextInputPage.clickInputButton();
        const fetchedButtonLabel = await TextInputPage.getButtonLabel();

        assert.equal(textToInput, fetchedButtonLabel, 'The Text is not inputted properly');
    });
})