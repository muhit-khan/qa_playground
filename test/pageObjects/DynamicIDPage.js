import BasePage from "../../framework/page/BasePage";
import { Button, Label } from "../../framework/elements/index";
import { PreciseTextLocator, PreciseIdLocator, PreciseClassLocator, PreciseNameLocator, PreciseAttributeLocator, PartialTextLocator, PartialIdLocator, PartialClassLocator, PartialNameLocator, PartialAttributeLocator } from "../../framework/utils/locatorHelper";

const classLocatorForDynamicButton = "btn btn-primary"

class DynamicIDPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Dynamic ID'), 'Dynamic ID Page Title'), 'Dynamic ID Page');
        this.dynamicButton = new Button(PreciseClassLocator(classLocatorForDynamicButton), 'Dynamic Button');
    }

    async isDynamicButtonDisplayed(id) {
        await this.dynamicButton.state().waitForExist();
        return this.dynamicButton.state().isDisplayed();
    }
}

export default new DynamicIDPage();