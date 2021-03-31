const fs = require('fs');
const path = require('path');

class Runner {
    constructor() {
        this.testFiles = [];
    }

    async runTests() {
        for (let file of this.testFiles) {
            const beforeEaches = [];
            global.beforeEach = (fn) => {
                beforeEaches.push(fn);
            }
            global.it = (desc, fn) => {
                beforeEaches.forEach(func => func());
                try {
                    fn();
                    console.log(`OK - ${desc}`);
                } catch (error) {
                    console.log(`X - ${desc}`);
                    console.log('\t', error.message);
                }

            };

            try {
                require(file.name);
            } catch (error) {
                console.log(`X - Error loading file`, file.name);
                console.log('\t', error);
            }

        }
    }

    async collectFiles(targetPath) {
        const files = await fs.promises.readdir(targetPath);

        // return files
        for (let file of files) {
            const filePath = path.join(targetPath, file);
            const stats = await fs.promises.lstat(filePath);

            if (stats.isFile() && file.includes('.test.js')) {
                this.testFiles.push({ name: filePath });
            } else if (stats.isDirectory()) {
                const childFiles = await fs.promises.readdir(filePath);

                files.push(...childFiles.map(f => path.join(file, f)));
            }
        }
    }
}

module.exports = Runner;
