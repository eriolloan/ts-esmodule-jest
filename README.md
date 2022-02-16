# HB Parser

Lexing and parsing for HB Node files.

## Installation

[Verdaccio](https://verdaccio.org/docs/installation/) should be installed.

From this module :
```
	$ cd ./hb-parser
	$ npm link --registry http://localhost:4873/
```

From consuming module:
```
	$ cd ./consumer-project
	$ npm init  // if not already done
	$ npm link --registry http://localhost:4873/ @hb/parser
```

Then you can import :
```
import { [ REPLACE ] } from '@hb/parser'
```

## Scripts in `package.json`

- `npm run build` transpiles TS files found in `./src` to ES2020 JS in `./dist`.
- `npm run dev` executes transpiles to JS before running compiled files.
- `npm run test` executes tests. It will not fail if no tests are written.
- `npm run gen-parser` produces the grammar js file from `grammar.ne`. Note that after generating it, you should remove the file extension in the import statement (it should say : `import { lexer } from '../lexer'`).


Collocation of tests is prefered.