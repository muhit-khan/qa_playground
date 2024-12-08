import BasePage from "../../framework/page/BasePage";
import { Button, Label } from "../../framework/elements/index";
import { PreciseTextLocator, PreciseIdLocator, PreciseClassLocator, PreciseNameLocator, PreciseAttributeLocator, PartialTextLocator, PartialIdLocator, PartialClassLocator, PartialNameLocator, PartialAttributeLocator } from "../../framework/utils/locatorHelper";

const idLocatorForClickButton = "badButton"

class ClickPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Click'), 'Click Page Title'), 'Click Page');
        this.clickButton = new Button(PreciseIdLocator(idLocatorForClickButton), 'Click Button');
    }

    async clickTheButton() {
        await this.clickButton.click();
    }

    async isButtonClickable() {
        return this.clickButton.state().isClickable();
    }
}

export default new ClickPage();