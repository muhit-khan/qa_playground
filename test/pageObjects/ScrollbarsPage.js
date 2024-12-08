import BasePage from "../../framework/page/BasePage";
import { Button, Label, Input } from "../../framework/elements/index";
import { PreciseTextLocator, PreciseIdLocator, PreciseClassLocator, PreciseNameLocator, PreciseAttributeLocator, PartialTextLocator, PartialIdLocator, PartialClassLocator, PartialNameLocator, PartialAttributeLocator } from "../../framework/utils/locatorHelper";

const idLocatorForInputField = "newButtonName"
const locatorForScollingField = "scroll"

class ScrollbarsPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Text Input'), 'Text Input Page Title'), 'Text Input Page');
        this.inputField = new Input(PreciseIdLocator(idLocatorForInputField), 'Input Field');
        this.inputButton = new Button(PreciseIdLocator(idLocatorForInputButton), 'Input Button');
    }


}

export default new ScrollbarsPage();