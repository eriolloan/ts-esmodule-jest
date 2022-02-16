@preprocessor esmodule

@{%
import {lexer} from '../lexer'
%}

@lexer lexer





statement
	-> var_assign

var_assign
	-> %identifier _ %assign _ expr

expr
	-> %number


# 0 or more spaces (== optional spaces)
_ -> %whitespace:*
# 1 or more spaces (== mandatory spaces)
__ -> %whitespace:+