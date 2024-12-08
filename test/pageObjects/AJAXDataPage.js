import BasePage from "../../framework/page/BasePage";
import { Button, Label } from "../../framework/elements/index";
import { PreciseTextLocator, PreciseIdLocator, PreciseClassLocator, PreciseNameLocator, PreciseAttributeLocator, PartialTextLocator, PartialIdLocator, PartialClassLocator, PartialNameLocator, PartialAttributeLocator } from "../../framework/utils/locatorHelper";

const idLocatorForTriggerButton = "ajaxButton"
const successMessageLabel = "bg-success"


class AJAXDataPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('AJAX Data'), 'AJAX Data Page Title'), 'AJAX Page')
        this.triggerButton = new Button(PreciseIdLocator(idLocatorForTriggerButton), 'AJAX Trigger Button')
        this.successMessage = new Label(PreciseClassLocator(successMessageLabel), 'Success Message Label')
    }

    async clickTriggerButton() {
        await this.triggerButton.click();
    }

    async isSuccessMessageDisplayed() {
        await this.successMessage.state().waitForExist({ timeout: 20000 });
        return this.successMessage.state().isDisplayed();
    }
}

export default new AJAXDataPage();