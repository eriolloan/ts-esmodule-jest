import moo from 'moo'

const lexer = moo.compile({
	whitespace: /[ \t]+/,
	comment: /\/\/.*?$/,
	number: /[0-9]+/,
	boolean: [ 'true', 'false' ],
	identifier: /[a-zA-Z][a-z_.]*/,
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
	fragmentSign: '#',
	newline: { match: /\n/, lineBreaks: true },
})


export { lexer }