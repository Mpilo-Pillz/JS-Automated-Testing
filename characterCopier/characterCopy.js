const sourceWord =
    `Simply Easy Learning!
With Sfiso
`
let destination;

const getFirstLine = (word) => word.split("\n")[0];

const readChar = (sentence) => getFirstLine(sentence).split("").map((character) => character)

const writeCharacter = (copiedCharacters) => copiedCharacters.join("");

const copy = (source, destination) => destination = writeCharacter(readChar(source))

destination = copy(sourceWord, destination)

console.log(`The sentence copied before a new line is is: ${destination}`)