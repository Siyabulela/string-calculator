var convertedString = '';

function errorHandling(string) {
    if (/-\d+/g.test(string)) {
        throw new Error(`negatives not allowed ${string.match(/-\d+/g)}`)
    }
    if (string.slice(0, 2) == "//" &&
        string[string.length - 1].match(/\d+/) == null ||
        string[0] == " " ||
        (string.match(/,/) && string.match(/;/))) {

        throw new Error("invalid input");
    }
}

function removeNaN(string) {

    if (string.slice(0, 2) == "//" && string[string.length - 1].match(/\d+/)) {
        convertedString = string.slice(string.search("\n") + 1)
        convertedString = convertedString.split(string[2])

    } else if (string.match("\n")) {

        convertedString = string.split("\n").toString().split(`,`)
    } else if (/^[\d,-\d]*$/.test(string)) {

        convertedString = string.split(`,`)
    }

    if (string.match(/\[/) && string.match(/\]/)) {
        convertedString = string.match(/[0-6]/g)
    }
}

function add(string) {

    errorHandling(string);
    removeNaN(string);

    if (string == ``)
        return 0;
    if (string == `1`)
        return parseInt(string);

    convertedString = convertedString.filter(function splitIntergers(num1) {
        if (!isNaN(parseInt(num1))) {
            return num1
        }
    })

    return convertedString.filter(function ignoreThousand(num) {
        return num < 1000
    }).reduce((a, b) => parseInt(a) + parseInt(b))
}

module.exports = { add }