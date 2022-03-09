const glob = require("glob");

/**
 *
 * @param {string} pattern
 * @param {any} [options]
 * @returns
 */
function globAsync(pattern, options) {
    return new Promise((resolve, reject) => {
        glob(pattern, options, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}

module.exports = {
    globAsync,
};
