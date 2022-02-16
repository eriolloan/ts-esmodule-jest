import nearley from 'nearley'
import grammar from './grammar'



const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))



export { parser }