import fetch from "node-fetch";

const urlSum = "http://localhost:8080/sum/3/7";
const urlSubstraction = "http://localhost:8080/substraction/30/8";
const urlMultiplication = "http://localhost:8080/multiplication/3/10";
const urlDivision = "http://localhost:8080/division/6/3";
const urlPow= "http://localhost:8080/pow";
const urlSqrt= "http://localhost:8080/sqrt";
const urlRound = "http://localhost:8080/round";

fetch(urlSum)
  .then((body) => body.json())
  .then((json) => console.log(json));

fetch(urlSubstraction)
  .then((body) => body.json())
  .then((json) => console.log(json));

fetch(urlMultiplication)
  .then((body) => body.json())
  .then((json) => console.log(json));

fetch(urlDivision)
  .then((body) => body.json())
  .then((json) => console.log(json));

  const pow = new URLSearchParams();
pow.set("firstNumber", "3");
pow.set("secondNumber", "5");
fetch(urlPow, {
  method: "POST",
  body: pow,
})
  .then((res) => res.json())
  .then((json) => console.log(json));

  const sqrt = new URLSearchParams();
sqrt.set("firstNumber", "3");
sqrt.set("secondNumber", "5");
fetch(urlSqrt, {
  method: "POST",
  body: sqrt,
})
  .then((res) => res.json())
  .then((json) => console.log(json));