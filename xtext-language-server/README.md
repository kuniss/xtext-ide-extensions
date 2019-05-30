# Xtext Language Server
This is a quite simple Xtext Language Server implementation for supporting the VS Code extension in this project.
It has been built with the Xtext framwork itself and utilizing the [original Xtext grammar](https://github.com/eclipse/xtext-core/blob/master/org.eclipse.xtext/src/org/eclipse/xtext/Xtext.xtext).

The only change made on the originally wizard-generated project sources is a specific `ILinkingDiagnosticMessageProvider` implementation in `de.grammarcraft.xtext.ls.custom.DeactivatableLinkingDiagnosticMessageProvider` to allow linking errors be disabled by a system property as otherwise those are littering the grammar source code. The errors appear as resolving cross references from external model imports and inherited grammars are not supported by this simple implementation.
