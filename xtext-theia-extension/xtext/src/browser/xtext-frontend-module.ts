/**
 * Generated using theia-extension-generator
 */

import { XtextCommandContribution, XtextMenuContribution } from './xtext-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";

import { LanguageClientContribution } from '@theia/languages/lib/browser';
import { XtextLanguageClientContribution } from './xtext-language-client-contribution';
import { LanguageGrammarDefinitionContribution } from '@theia/monaco/lib/browser/textmate';
import { XtextGrammarContribution } from './xtext-grammar-contribution';

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(CommandContribution).to(XtextCommandContribution);
    bind(MenuContribution).to(XtextMenuContribution);

    bind(LanguageClientContribution).to(XtextLanguageClientContribution).inSingletonScope();
    bind(LanguageGrammarDefinitionContribution).to(XtextGrammarContribution).inSingletonScope();
});