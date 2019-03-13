import { LanguageGrammarDefinitionContribution, TextmateRegistry } from '@theia/monaco/lib/browser/textmate';
import { injectable } from 'inversify';
import { XTEXT_LANGUAGE_FILE_EXTENSION, XTEXT_LANGUAGE_SERVER_ID, XTEXT_LANGUAGE_SERVER_NAME } from '../common';

@injectable()
export class XtextGrammarContribution implements LanguageGrammarDefinitionContribution {

    registerTextmateLanguage(registry: TextmateRegistry) {
        monaco.languages.register({
            id: XTEXT_LANGUAGE_SERVER_ID,
            aliases: [
                XTEXT_LANGUAGE_SERVER_NAME, XTEXT_LANGUAGE_SERVER_ID
            ],
            extensions: [
                XTEXT_LANGUAGE_FILE_EXTENSION,
            ],
            mimetypes: [
                'text/xtext'
            ]
        });
        monaco.languages.setLanguageConfiguration(XTEXT_LANGUAGE_SERVER_ID, this.configuration);

        const xtextGrammar = require('../../syntaxes/Xtext.tmLanguage.json');
        registry.registerTextmateGrammarScope('source.Xtext', {
            async getGrammarDefinition() {
                return {
                    format: 'json',
                    content: xtextGrammar,
                };
            }
        });
        registry.mapLanguageIdToTextmateGrammar(XTEXT_LANGUAGE_SERVER_ID, 'source.Xtext');
    }

    protected configuration: monaco.languages.LanguageConfiguration = {
        'comments': {
            'lineComment': '//',
            'blockComment': ['/*', '*/']
        },
        'brackets': [
            ['{', '}'],
            ['[', ']'],
            ['(', ')']
        ],
        'autoClosingPairs': [
            { 'open': '{', 'close': '}' },
            { 'open': '[', 'close': ']' },
            { 'open': '(', 'close': ')' },
            { 'open': "'", 'close': "'", 'notIn': ['string', 'comment'] },
            { 'open': '"', 'close': '"', 'notIn': ['string'] },
            { 'open': '/**', 'close': ' */', 'notIn': ['string'] }
        ],
        'surroundingPairs': [
            { 'open': '{', 'close': '}' },
            { 'open': '[', 'close': ']' },
            { 'open': '(', 'close': ')' },
            { 'open': "'", 'close': "'" },
            { 'open': '"', 'close': '"' },
            { 'open': '`', 'close': '`' }
        ],
        'folding': {
            'markers': {
                'start': new RegExp('^\\s*.:\\b'),
                'end': new RegExp('^\\s*;\\b')
            }
        }
    };
}