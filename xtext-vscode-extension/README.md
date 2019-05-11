# Xtext Syntax Highlighting Support for VS Code

This is a language extension for the Xtext grammar specifcation language.

## Features

Currrently the following features are supported:
* syntax highlighting 
* folding
* auto bracket closing and insertion
* snippets
* for file local definitions only:
  * hover information
  * auto completion
  * jumpt to defintion
  * error checking

## Known Issues

* resolving definitions from `import` statements and `with` statements (grammar inheritance) are not supported and result in errors 

## Release Notes

beta; not for production use yet

## Development Hints
This extension was initially created using [VS Code's Yeoman templates](https://code.visualstudio.com/api/get-started/your-first-extension), running `yo code` and selecting the `New Language` option.

The Textmate "grammar" was developed using the syntax highlighting grammer edior [*Iro*](https://eeyo.io/iro/) and the .plist/.json transformation tool http://json2plist.sinaapp.com/.

For working on the TextMate "grammar" please consider using the *Iro* specifcaton file ../Xtext.iro.

The language server is created using the Xtext language creation framework itself. The Xtext grammar for that was taken from the [eclipse/xtext-core](https://github.com/eclipse/xtext-core) project. Only the grammar name was adapted to avoid bootstrapping compilation problems.