"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let startTime = new Date().getTime();
console.time();
//reading
fs_1.default.readFile("./Numbers.csv", "utf8", (err, data) => {
    let rows = data.split("\n");
    let finalConvertedNumbers = [];
    let numbersToBeConverted = [];
    for (let row = 1; row < rows.length - 1; row++) {
        numbersToBeConverted = rows[row].split(",");
        finalConvertedNumbers.push(converting(parseInt(numbersToBeConverted[0]), parseInt(numbersToBeConverted[1]), parseInt(numbersToBeConverted[2])));
    }
    //writing
    let writeStream = fs_1.default.createWriteStream("ConvertedNumbers.csv");
    writeStream.write(finalConvertedNumbers.toString());
});
//parsing
function converting(generalNumber, fromBase, toBase) {
    let numbers = parseInt(generalNumber.toString(), fromBase);
    return numbers.toString(toBase);
}
let endTime = new Date().getTime();
console.log("Execution time is = " + `${endTime - startTime}`);
//# sourceMappingURL=index.js.map