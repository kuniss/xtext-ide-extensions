# Change Log

## 0.4.0
  - adjust language server allowing linking errors to be deactivated by system property
  - added configuration property 'crossReferenceErrorsDisabled' applying this new feature of the LS; by default checked
  - both changes from above avoids littering Xtext grammar files with errors from inherited grammars and imported models as importing those for cross reference checks is not supported yet

## 0.3.0
 - added raw language server support \
   Note: this may litter your Xtext grammar with errors for names from inherited grammars and ecore models, use the previous version to avoid this

## 0.2.0
- improved syntax highlighting for VSCode and Gitpod

## 0.1.0
- Initial release
