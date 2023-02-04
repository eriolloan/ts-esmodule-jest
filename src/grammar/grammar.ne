@preprocessor esmodule

@{%
import {lexer} from '../lexer'
%}

@lexer lexer



# source_file -> statement:* | %comment:*
# 		{%
# 			(data) => [...data[0]]
# 		%}


statement
	-> var_assign 	{% id %}
	 | fragment 	{% id %}
	 | paragraph 	{% id %}


var_assign
	-> %word _ %assign _ expr
		{%
			(data) => {
				return {
					type: 'var_assign',
					var_name: data[0],
					value: data[4]
				}
			}
		%}


fragment
	-> fragment_id  (fragment_item %newline:*):*
		{%
			(data) => {
				return {
					type: 'fragment',
					id: data[0],
					content: data[1][0]
				}
			}
		%}


fragment_id
	-> %fragmentSign _ %span:? _ %newline:+
		{%
			(data) => data[2].value
		%}


fragment_item
	-> paragraph # add others later (ie. side-effects)
		{%
			(data) => data[0]
		%}

paragraph
	-> %span
		{%
			(data) => {
				return {
					type: 'paragraph',
					value: [data[0].value]
				}
			}
		%}
	 | paragraph (_ | %newline:?) %span
		{%
			(data) => {
				return {
					type: 'paragraph',
					value: [...data[0].value, data[2].value]
				}
			}
		%}


expr
	-> %number	{% id %}
	 | %string	{% id %}


# 0 or more spaces (== optional spaces)
_ -> %whitespace:*

# 1 or more spaces (== mandatory spaces)
__ -> %whitespace:+

