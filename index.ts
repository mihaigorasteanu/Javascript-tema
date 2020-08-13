import fs, {write} from "fs";
import { start } from "repl";

let startTime = new Date().getTime();
console.time();

//reading
fs.readFile("./Numbers.csv", "utf8", (err, data) => {
  let rows = data.split("\n");
  let finalConvertedNumbers: Array<string> = [];
  let numbersToBeConverted: Array<string> = [];
for (let row = 1; row < rows.length - 1; row++) {
  numbersToBeConverted = rows[row].split(",");
  finalConvertedNumbers.push(converting(parseInt(numbersToBeConverted[0]), parseInt(numbersToBeConverted[1]), parseInt(numbersToBeConverted[2])));
  }
  //writing
  let writeStream = fs.createWriteStream("ConvertedNumbers.csv");
  writeStream.write(finalConvertedNumbers.toString());
});
  //parsing
 function converting(generalNumber: number, fromBase: number, toBase: number) {
   
    let numbers = parseInt(generalNumber.toString(), fromBase);
    return numbers.toString(toBase);
  }
  
let endTime = new Date().getTime();
console.log(endTime-startTime);
