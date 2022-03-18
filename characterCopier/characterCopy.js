const sourceWord =
    `It is tough when it is not easy.
It is difficult when it is hard
`
let destination = '';

const getFirstLine = (word) => word.split("\n")[0];

const readChar = (sentence) => getFirstLine(sentence).split("").map((character) => character)

const writeCharacter = (copiedCharacters) => copiedCharacters.join("");

const copy = (source, destination) => destination += writeCharacter(readChar(source))

const copiedOutPut = copy(sourceWord, destination)

console.log(`The sentence copied before a new line is is: ${copiedOutPut}`)

module.exports = { getFirstLine, readChar, writeCharacter, copy };