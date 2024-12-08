import BasePage from "../../framework/page/BasePage";
import { Button, Label } from "../../framework/elements/index";
import { PreciseTextLocator, PreciseIdLocator, PreciseClassLocator, PreciseNameLocator, PreciseAttributeLocator, PartialTextLocator, PartialIdLocator, PartialClassLocator, PartialNameLocator, PartialAttributeLocator } from "../../framework/utils/locatorHelper";

const idLocatorForTriggerButton = "ajaxButton"
const classLocatorForSuccessMessage = "bg-success"

class ClientSideDelayPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Client Side Delay'), 'Client Side Delay Page Title'), 'Client Side Delay Page');
        this.triggerButton = new Button(PreciseIdLocator(idLocatorForTriggerButton), 'Client Side Button Triggering Button');
        this.successMessage = new Label(PreciseClassLocator(classLocatorForSuccessMessage), 'Displayed Success Message')
    }

    async clickTriggerButton() {
        await this.triggerButton.click();
    }

    async isSuccessMessageDisplayed() {
        await this.successMessage.state().waitForExist({ timeout: 20000 });
        return this.successMessage.state().isDisplayed();
    }

    async getDisplayedMessage() {
        return this.successMessage.getText();
    }
}

export default new ClientSideDelayPage();