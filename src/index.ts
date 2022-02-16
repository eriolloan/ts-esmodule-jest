// import { lexer } from "./lexer"
import { parser } from "./parser"

// parse something
parser.feed(`# Coucou
Voila un paragraphe.
Une autre ligne dans le même paragraphe.

Et ça, c'est un nouveau paragraphe.`)

console.log(JSON.stringify(parser.results, null, '    '))

// const sample = `This page title // Text link

// CHARACTER
// GLOBAL


// ==  IN Location
//     AND AFTER Chapter1

// =>	CharacterA.variableX = trueparser.results
// =>	NEXT the flow should move to the next part in the current axis after the page is read

// ::	PALETTE Palette_02
// ::	LAYOUT Two_Columns




// #01

// "Coucou, c'est mon texte."
// "Puis mon autre texte."

// #02

// "Un autre praragraphe."
// `


// lexer.reset(sample)


// while (true) {
// 	const token = lexer.next()

// 	if (!token) break

// 	console.log(token)
// }