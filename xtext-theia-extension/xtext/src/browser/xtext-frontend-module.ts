/**
 * Generated using theia-extension-generator
 */

import { XtextCommandContribution, XtextMenuContribution } from './xtext-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(CommandContribution).to(XtextCommandContribution);
    bind(MenuContribution).to(XtextMenuContribution);
    
});