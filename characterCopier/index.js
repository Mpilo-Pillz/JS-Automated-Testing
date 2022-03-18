var fs = require("fs");
console.log("Going to write into existing file");
// Open a new file with name input.txt and write Simply Easy Learning! to it.
fs.writeFile('input.txt', 'Simply Easy Learning!', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    // Read the newly written file and print all of its content on the console
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Data-->", data.toString().split());
        console.log("Asynchronous read: " + data.toString());
    });
});

var readable = fs.createReadStream("input.txt", {
    encoding: 'utf8',
    fd: null,
});
readable.on('readable', function () {
    var chunk;
    while (null !== (chunk = readable.read(1) /* here */)) {
        console.log(chunk); // chunk is one byte
    }
});