/*
* To try in Ace editor, copy and paste into the mode creator
* here : http://ace.c9.io/tool/mode_creator.html
*/

define(function(require, exports, module) {
   "use strict";
   var oop = require("../lib/oop");
   var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
   /* --------------------- START ----------------------------- */
   var XtextHighlightRules = function() {
   this.$rules = {
   "start" : [
      {
         "token" : "comment.block",
         "regex" : "(/\\*)",
         "push" : "multi_line_comment__1"
      },
      {
         "token" : "comment.line.double-slash",
         "regex" : "(//.*)"
      },
      {
         "token" : "keyword.control",
         "regex" : "(\\bgrammar\\b)|(\\bwith\\b)|(\\bhidden\\b)|(\\bgenerate\\b)|(\\bas\\b)|(\\bimport\\b)|(\\bfragment\\b)|(\\breturns\\b)|(\\btrue\\b)(\\bfalse\\b)|(\\bterminal\\b)|(\\bfragment\\b)|(\\breturns\\b)|(\\bEOF\\b)|(\\benum\\b)|(\\beturns\\b)"
      },
      {
         "token" : "keyword.operator",
         "regex" : "(\\*|&|\\?|\\*|\\+|\\||&|!|(=>)|(\\.\\.)|(\\->)|\\[|\\])"
      },
      {
         "token" : "punctuation",
         "regex" : "(,|\\,|:|;|<|>|\\(|\\))"
      },
      {
         "token" : ["punctuation", "entity.name", "whitespace", "keyword.operator", "whitespace", "keyword.control", "punctuation"],
         "regex" : "({)((?:\\w+::)?\\^?\\w+\\.?\\w*)(\\s*)(\\+?=?)(\\s*)((?:current)?)(})"
      },
      {
         "token" : ["entity.name", "whitespace", "keyword.operator"],
         "regex" : "(\\^?\\w+)(\\s*)((?:[\\+\\?]=)|(?:=))"
      },
      {
         "token" : "entity.name",
         "regex" : "(\\^?(?:\\w+::)?\\b\\w+(\\.|\\$\\w+)*\\b)"
      },
      {
         "token" : "entity.name",
         "regex" : "(\\^\\w+)"
      },
      {
         "token" : "support.type",
         "regex" : "(@\\w+)"
      },
      {
         "token" : "string.quoted.double",
         "regex" : "(\\\")",
         "push" : "STRING__1"
      },
      {
         "token" : "string.quoted.single",
         "regex" : "(\\')",
         "push" : "STRING__2"
      },
      {
         "token" : "invalid",
         "regex" : "([^\\s])"
      },
      {
         defaultToken : "text",
      }
   ], 
   "STRING__1" : [
      {
         "token" : "string.quoted.double",
         "regex" : "(\\\")",
         "next" : "pop"
      },
      {
         defaultToken : "string.quoted.double",
      }
   ], 
   "STRING__2" : [
      {
         "token" : "string.quoted.single",
         "regex" : "(\\')",
         "next" : "pop"
      },
      {
         defaultToken : "string.quoted.single",
      }
   ], 
   "multi_line_comment__1" : [
      {
         "token" : "comment.block",
         "regex" : "(\\*/)",
         "next" : "pop"
      },
      {
         defaultToken : "comment.block",
      }
   ]
   };
   this.normalizeRules();
   };
   /* ------------------------ END ------------------------------ */
   oop.inherits(XtextHighlightRules, TextHighlightRules);
   exports.XtextHighlightRules = XtextHighlightRules;
   });
   