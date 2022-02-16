// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
function id(x) { return x[0]; }

import {lexer} from '../lexer'
let Lexer = lexer;
let ParserRules = [
    {"name": "statement", "symbols": ["var_assign"], "postprocess": id},
    {"name": "statement", "symbols": ["fragment"], "postprocess": id},
    {"name": "statement", "symbols": ["paragraph"], "postprocess": id},
    {"name": "var_assign", "symbols": [(lexer.has("word") ? {type: "word"} : word), "_", (lexer.has("assign") ? {type: "assign"} : assign), "_", "expr"], "postprocess": 
        (data) => {
        	return {
        		type: 'var_assign',
        		var_name: data[0],
        		value: data[4]
        	}
        }
        		},
    {"name": "fragment$ebnf$1", "symbols": []},
    {"name": "fragment$ebnf$1", "symbols": ["fragment$ebnf$1", "paragraph"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "fragment", "symbols": ["fragment_id", "fragment$ebnf$1"], "postprocess": 
        (data) => {
        	return {
        		type: 'fragment',
        		id: data[0],
        		content: data[1]
        	}
        }
        		},
    {"name": "fragment_id$ebnf$1", "symbols": [(lexer.has("span") ? {type: "span"} : span)], "postprocess": id},
    {"name": "fragment_id$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "fragment_id$ebnf$2", "symbols": [(lexer.has("newline") ? {type: "newline"} : newline)]},
    {"name": "fragment_id$ebnf$2", "symbols": ["fragment_id$ebnf$2", (lexer.has("newline") ? {type: "newline"} : newline)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "fragment_id", "symbols": [(lexer.has("fragmentSign") ? {type: "fragmentSign"} : fragmentSign), "_", "fragment_id$ebnf$1", "_", "fragment_id$ebnf$2"], "postprocess": 
        (data) => data[2].value
        		},
    {"name": "paragraph", "symbols": [(lexer.has("span") ? {type: "span"} : span)], "postprocess": 
        (data) => {
        	return {
        		type: 'paragraph',
        		value: [data[0].value]
        	}
        }
        		},
    {"name": "paragraph$subexpression$1", "symbols": ["_"]},
    {"name": "paragraph$subexpression$1$ebnf$1", "symbols": []},
    {"name": "paragraph$subexpression$1$ebnf$1", "symbols": ["paragraph$subexpression$1$ebnf$1", (lexer.has("newline") ? {type: "newline"} : newline)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "paragraph$subexpression$1", "symbols": ["paragraph$subexpression$1$ebnf$1"]},
    {"name": "paragraph", "symbols": ["paragraph", "paragraph$subexpression$1", (lexer.has("span") ? {type: "span"} : span)], "postprocess": 
        (data) => {
        	return {
        		type: 'paragraph',
        		value: [...data[0].value, data[2].value]
        	}
        }
        		},
    {"name": "expr", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "expr", "symbols": [(lexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("whitespace") ? {type: "whitespace"} : whitespace)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "__$ebnf$1", "symbols": [(lexer.has("whitespace") ? {type: "whitespace"} : whitespace)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (lexer.has("whitespace") ? {type: "whitespace"} : whitespace)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]}
];
let ParserStart = "statement";
export default { Lexer, ParserRules, ParserStart };
