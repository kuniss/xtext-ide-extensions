import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

export const XtextCommand = {
    id: 'Xtext.command',
    label: "Shows a message"
};

@injectable()
export class XtextCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(XtextCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class XtextMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: XtextCommand.id,
            label: 'Say Hello'
        });
    }
}