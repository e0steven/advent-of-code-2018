const fs = require("fs");
const chalk = require("chalk");

module.exports.getInput = function(day_puzzle) {
    const path = "./input/" + day_puzzle + ".input";
    try {
        fs.statSync(path);
    } catch(err) {
        console.log(chalk.red(`${path} not found`));
        return null;
    }

    const text = fs
        .readFileSync(path)
        .toString()
        .split("\n")
        .map(s => s.replace(/\r$/, ""))
        .filter(s => s.length > 0);


    return text;
};