import { baseUrl } from '../../framework/configs/main.wdio.conf.js'
import { assert } from 'chai'
import Browser from '../../framework/browser/Browser.js';
import MainPage from '../pageObjects/MainPage.js';
import ProgressBarPage from '../pageObjects/ProgressBarPage.js'

const navToLoadProgressBarPage = 'Progress Bar';
const expectedResult = 0;


describe('Progress Bar Test', function () {
    before('should Open the main page', async function () {
        Browser.openUrl(baseUrl);
    });
    it('should click start and stop progress bar at 75%', async function () {
        await MainPage.clickNavigationLink(navToLoadProgressBarPage);
        await ProgressBarPage.clickStartButton();
        await ProgressBarPage.waitForProgressAndStop();

        const actualResult = parseInt(await ProgressBarPage.getResult());

        assert.approximately(expectedResult, actualResult, 10, 'Progress bar value is not within acceptable range');
    });

})