import moo from 'moo'

const lexer = moo.compile({
	whitespace: /[ \t]+/,
	fragmentSign: '#',
	comment: /\/\/.*?$/,
	number: /[0-9]+/,
	span: /(?:\\["\\]|[^\n"\\])+/,
	keyword: /[A-Z][A-Z]+/,
	string: /"(?:\\["\\]|[^\n"\\])*"/,
	condition: /==/,
	outcome: /=>/,
	sideEffect: /::/,
	set: ':',
	assign: '=',
	lparen: '(',
	rparen: ')',
	lbrace: '{',
	rbrace: '}',
	lsqbrace: '[',
	rsqbrace: ']',
	newline: { match: /\n/, lineBreaks: true },
})


export { lexer }