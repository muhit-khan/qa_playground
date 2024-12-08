import BasePage from "../../framework/page/BasePage";
import { Button, Label, Input } from "../../framework/elements/index";
import { PreciseTextLocator, PreciseIdLocator, PreciseClassLocator, PreciseNameLocator, PreciseAttributeLocator, PartialTextLocator, PartialIdLocator, PartialClassLocator, PartialNameLocator, PartialAttributeLocator } from "../../framework/utils/locatorHelper";

const idLocatorForInputField = "newButtonName"
const idLocatorForInputButton = "updatingButton"

class DynamicTablePage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Dynamic Table'), 'Dynamic Table Page Title'), 'Dynamic Table Page');
        this.inputField = new Input(PreciseIdLocator(idLocatorForInputField), 'Input Field');
        this.inputButton = new Button(PreciseIdLocator(idLocatorForInputButton), 'Input Button');
    }

    async typeInputField(text) {
        await this.inputField.typeText(text);
    }

    async clickInputButton() {
        await this.inputButton.click();
    }

    async getButtonLabel() {
        return this.inputButton.getText();
    }
}

export default new DynamicTablePage();