const fs = require("fs");

const copier = (sourceFile, destinationFile) => {

}

const copy = () => {

}

const readChar = () => {
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
        return data.toString()
    });
}

const writeChar = () => {
    fs.writeFile('input.txt', 'Simply Easy Learning!', function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Data written successfully!");
        console.log("Let's read newly written data");
        // Read the newly written file and print all of its content on the console

    });
}
// Open a new file with name input.txt and write Simply Easy Learning! to it.
