import fetch from "node-fetch";

const urlSum = "http://localhost:8080/sum/3/7";
const urlSubstraction = "http://localhost:8080/substraction/30/8";
const urlMultiplication = "http://localhost:8080/multiplication/3/10";
const urlDivision = "http://localhost:8080/division/6/3";

fetch(urlSum)
  .then((body) => body.json())
  .then((json) => console.log("The sum is ") + json);

fetch(urlSubstraction)
  .then((body) => body.json())
  .then((json) => console.log("The resulf of substraction is ") + json);

fetch(urlMultiplication)
  .then((body) => body.json())
  .then((json) => console.log("The result of multiplication is ") + json);

fetch(urlDivision)
  .then((body) => body.json())
  .then((json) => console.log("The result of division is ") + json);