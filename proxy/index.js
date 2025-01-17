const path = require('path');

const FS_Proxy = require('./lib/FS_Proxy')
const fs = new FS_Proxy(require('fs'));

const txtFile = path.join(__dirname, 'README.txt');
const mdFile = path.join(__dirname, 'README.md');

const result = (error, contents) => {
    if(error) {
        console.log('\x07');
        console.error(error);
        process.exit(0);
    }

    console.log('reading file...');
    console.log(contents);
}

fs.readFile(txtFile, 'utf-8', result)
fs.readFile(mdFile, 'utf-8', result)