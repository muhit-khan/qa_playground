import BasePage from "../../framework/page/BasePage";
import { Button, Label } from "../../framework/elements/index";
import { PreciseTextLocator, PreciseIdLocator, PreciseClassLocator, PreciseNameLocator, PreciseAttributeLocator, PartialTextLocator, PartialIdLocator, PartialClassLocator, PartialNameLocator, PartialAttributeLocator } from "../../framework/utils/locatorHelper";

const classLocatorForDelaysButton = "btn btn-primary"

class LoadDelaysPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Load Delays'), 'Load Delays Page Title'), 'Load Delays Page');
        this.delaysButton = new Button(PreciseClassLocator(classLocatorForDelaysButton), 'Delayed Button');
    }

    async isDelaysButtonDisplayed() {
        await this.delaysButton.state().waitForExist();
        return this.delaysButton.state().isDisplayed();
    }
}

export default new LoadDelaysPage();