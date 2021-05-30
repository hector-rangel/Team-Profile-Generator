const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the promise and sen the error to the promise's `/catchh()` method
            if (err) {
                reject(err);
                // return out of the function here ot make sure the promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Stylesheet Created!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };