import BasePage from "../../framework/page/BasePage";
import { Button, Label } from "../../framework/elements/index";
import { PreciseTextLocator, PreciseIdLocator, PreciseClassLocator, PreciseNameLocator, PreciseAttributeLocator, PartialTextLocator, PartialIdLocator, PartialClassLocator, PartialNameLocator, PartialAttributeLocator } from "../../framework/utils/locatorHelper";

const idLocatorForStartButton = "startButton"
const idLocatorForStopButton = "stopButton"
const idLocatorForProgressBar = "progressBar"
const idLocatorForResult = "result"


class ProgressBarPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Progress Bar'), 'Progress Bar Page Title'), 'Progress Bar Page');
        this.startButton = new Button(PreciseIdLocator(idLocatorForStartButton), 'Start Button');
        // this.startButton = new Button("//*[@id='startButton']", 'Start Button');
        this.stopButton = new Button(PreciseIdLocator(idLocatorForStopButton), 'Stop Button');
        // this.stopButton = new Button("//*[@id='stopButton']", 'Stop Button');
        this.progressBar = new Label(PreciseIdLocator(idLocatorForProgressBar), 'Progress Bar');
        this.result = new Label(PreciseIdLocator(idLocatorForResult), 'Result');
    }

    async clickStartButton() {
        await this.startButton.click();
    }

    async getProgressValue() {
        return await this.progressBar.getText();
    }

    async clickStopButton() {
        await this.stopButton.click();
    }

    async waitForProgressAndStop() {
        while (true) {
            const progress = await this.getProgressValue();
            if (progress === '75%') {
                await this.clickStopButton();
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }

    async getResult() {
        const rawResult = await this.result.getText();
        const result = rawResult.split(':')[1].split(',')[0].trim();
        return parseInt(result);
    }
}

export default new ProgressBarPage();