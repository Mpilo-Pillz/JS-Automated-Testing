let {
    getFirstLine,
    readChar,
    writeCharacter,
    copy,
} = require("./characterCopy");

const phrase = "Always bet on JavaScript. Well TypeScript";
const multilinePhrase = `Any application that can be written in JavaScript will be.
    Then migrated to TypeScript.
`;
let destination = '';

describe("Test the main function mocking out the other ones.", () => {
    copy = jest.fn();
    test("Call copy function", () => {
        copy(multilinePhrase, destination);
        expect(copy).toHaveBeenCalledWith(multilinePhrase, destination);
    })
});

describe("Individually test the functions that make the application", () => {
    test("Joins words in an array", () => {
        expect(
            writeCharacter(["M", "P", "I", "L", "O", " ", "P", "I", "L", "L", "Z"])
        ).toBe("MPILO PILLZ");
    });

    test("It should take the first line and ignore the rest", () => {
        expect(getFirstLine(multilinePhrase)).toBe(
            "Any application that can be written in JavaScript will be."
        );
    });

    test("Converts a sentence into an array", () => {
        expect(readChar(phrase)).toEqual([
            "A",
            "l",
            "w",
            "a",
            "y",
            "s",
            " ",
            "b",
            "e",
            "t",
            " ",
            "o",
            "n",
            " ",
            "J",
            "a",
            "v",
            "a",
            "S",
            "c",
            "r",
            "i",
            "p",
            "t",
            ".",
            " ",
            "W",
            "e",
            "l",
            "l",
            " ",
            "T",
            "y",
            "p",
            "e",
            "S",
            "c",
            "r",
            "i",
            "p",
            "t",
        ]);
    });

})

