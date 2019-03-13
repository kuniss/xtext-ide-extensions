import { BaseLanguageClientContribution, LanguageClientFactory, Languages, Workspace } from '@theia/languages/lib/browser';
import { inject, injectable } from 'inversify';
import { XTEXT_LANGUAGE_SERVER_ID, XTEXT_LANGUAGE_SERVER_NAME, XTEXT_LANGUAGE_FILE_EXTENSION } from '../common';

@injectable()
export class XtextLanguageClientContribution extends BaseLanguageClientContribution {

    readonly id = XTEXT_LANGUAGE_SERVER_ID;
    readonly name = XTEXT_LANGUAGE_SERVER_NAME;

    constructor(
        @inject(Workspace) protected readonly workspace: Workspace,
        @inject(Languages) protected readonly languages: Languages,
        @inject(LanguageClientFactory) protected readonly languageClientFactory: LanguageClientFactory
    ) {
        super(workspace, languages, languageClientFactory);
    }

    protected get globPatterns(): string[] {
        return [
            '**/*' + XTEXT_LANGUAGE_FILE_EXTENSION,
        ];
    }

    protected get documentSelector(): string[] {
        return [
            XTEXT_LANGUAGE_SERVER_ID
        ];
    }
}
