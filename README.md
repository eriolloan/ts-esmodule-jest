# TS ESModule Jest

`ts-esmodule-jest` is a boilerplate for kickstarting ESM modules written in TypeScript. Jest and ts-jest are used for testing.

## Installation

[Verdaccio](https://verdaccio.org/docs/installation/) should be installed.

From this module :
```
	$ cd ./[ REPLACE ]
	$ npm link --registry http://localhost:4873/
```

From consuming module:
```
	$ cd ./consumer-project
	$ npm init  // if not already done
	$ npm link --registry http://localhost:4873/ '[ REPLACE ]'
```

Then you can import :
```
import { [ REPLACE ] } from '[ REPLACE ]'
```

## Scripts in `package.json`

- `npm run build` transpiles TS files found in `./src` to ES2020 JS in `./dist`.
- `npm run dev` executes transpiles to JS before running compiled files.
- `npm run test` executes tests. It will not fail if no tests are written.


Collocation of tests is prefered.