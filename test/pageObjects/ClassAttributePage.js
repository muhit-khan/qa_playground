import Browser from '../../framework/browser/Browser.js';
import BasePage from '../../framework/page/BasePage.js';
import { Dialog } from '../../framework/browser/entities/Dialog.js';
import { Button, Label } from '../../framework/elements/index.js';
import { PreciseTextLocator, PartialClassLocator } from "../../framework/utils/locatorHelper";

class ClassAttributePage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Class Attribute'), 'Class Attribute Page Title'), 'Class Attribute Page');
        this.classAttributeButton = new Button(PartialClassLocator("btn-primary"), `Class Attribute Button`);
    }

    async clickClassAttributeButton() {
        await this.classAttributeButton.click();
    }

    async isAlertDisplayed() {
        return Browser.Dialog.isDialogOpened();
    }

    async getAlertText() {
        return Browser.Dialog.getDialogText();
    }

    async acceptJSAlert() {
        await Browser.Dialog.acceptDialog();
    }
}

export default new ClassAttributePage();