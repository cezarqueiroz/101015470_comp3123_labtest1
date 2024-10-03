const fs = require('fs');

var logDirectory = './Logs';

function removeFiles() {
    if (fs.existsSync(logDirectory)) {
        const files = fs.readdirSync(logDirectory);

        for (let i = 0; i < files.length; i++) {
            console.log('Delete files...', files[i]);
            fs.unlinkSync(logDirectory + '/' +files[i]);
        }
        fs.rmdirSync(logDirectory);
    } else {
        console.log('Directory does not exist.');
    }
};

function createFiles() {
    if (!fs.existsSync(logDirectory)) {
        fs.mkdirSync(logDirectory);
    }
    process.chdir(logDirectory);

    for (let i = 0; i < 10; i++) {
        const fileName = 'log' + i + '.txt';
        fs.writeFileSync(fileName, 'Some text example' + i);
        console.log(fileName);
    }
};

removeFiles();
createFiles();
