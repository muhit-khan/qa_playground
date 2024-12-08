import BasePage from '../../framework/page/BasePage.js'
import { Button, Label } from '../../framework/elements/index.js'
import { PreciseTextLocator, PreciseIdLocator, PreciseClassLocator, PreciseNameLocator, PreciseAttributeLocator, PartialTextLocator, PartialIdLocator, PartialClassLocator, PartialNameLocator, PartialAttributeLocator } from "../../framework/utils/locatorHelper";


class MainPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('UI Test Automation'), 'Home Page Title'), 'Main Page');
        this.navigationLink = (text) => new Button(PreciseTextLocator(text), `Navigation link: ${text}`);
    }


    async clickNavigationLink(navigationText) {
        await this.navigationLink(navigationText).click();
    }
}

export default new MainPage();