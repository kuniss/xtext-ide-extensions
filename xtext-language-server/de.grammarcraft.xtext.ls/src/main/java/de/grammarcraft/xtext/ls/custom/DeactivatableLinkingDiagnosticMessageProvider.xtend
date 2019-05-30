package de.grammarcraft.xtext.ls.custom

import org.eclipse.xtext.linking.impl.LinkingDiagnosticMessageProvider

/**
 * For disabling 
 */
class DeactivatableLinkingDiagnosticMessageProvider extends LinkingDiagnosticMessageProvider {
    
    static val CONF_DISABLE = 'disableLinkingDiagnosticMessages'
    
    override getUnresolvedProxyMessage(ILinkingDiagnosticContext context) {
        if (Boolean.getBoolean(CONF_DISABLE))
            return null // no cross reference errors will show up
        else
            return super.getUnresolvedProxyMessage(context)
    }

}