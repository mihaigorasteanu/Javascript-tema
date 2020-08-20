import express, { response, request } from "express";
import { Agent } from "http";
import bodyParser from "body-parser"
 const app = express();
 const port = 8080;
 app.use(bodyParser.urlencoded({ extended: false }));

app.get("/sum/:firstNumber/:secondNumber", (request, response) => {
	let firstNumber=parseInt(`${request.params.firstNumber}`);
	let secondNumber=parseInt(`${request.params.secondNumber}`);
	let result=firstNumber+secondNumber;
	response.send(`The result of sum is ${result}`);
});

app.get("/substraction/:firstNumber/:secondNumber", (request, response) => {
	let firstNumber=parseInt(request.params.firstNumber);
	let secondNumber=parseInt(request.params.secondNumber);
	let result=firstNumber-secondNumber;
	response.send("The result of substraction is " +result);
});

app.get("/division/:firstNumber/:secondNumber", (request, response) => {
	let firstNumber=parseInt(request.params.firstNumber);
	let secondNumber=parseInt(request.params.secondNumber);
	let result=firstNumber/secondNumber;
	response.send("The result of division is " +result);
});

app.get("/multiplication/:firstNumber/:secondNumber", (request, response) => {
	let firstNumber=parseInt(request.params.firstNumber);
	let secondNumber=parseInt(request.params.secondNumber);
	let result=firstNumber*secondNumber;
	response.send("The result of multiplication is " +result);
});

app.post("/pow", (request, response) => {
	let pow = {
		firstNumber: parseInt(request.body.firstNumber) ? parseInt(request.body.firstNumber) : "N/A",
		secondNumber: parseInt(request.body.secondNumber) ? parseInt(request.body.secondNumber) : "N/A",
		result: Math.pow(parseInt(request.body.firstNumber), parseInt(request.body.secondNumber)),
	};
	response.json(pow);
});

app.post("/sqrt", (request, response) => {
	let sqrt = {
		firstNumber: parseInt(request.body.firstNumber) ? parseInt(request.body.firstNumber) : "N/A",
		secondNumber: parseInt(request.body.secondNumber) ? parseInt(request.body.secondNumber) : "N/A",
		firstSqrt: Math.sqrt(parseInt(request.body.firstNumber)),
		secondSqrt: Math.sqrt(parseInt(request.body.secondNumber)),
	};
	response.json(sqrt);
});

app.post("/round", (request, response) => {
	let sqrt = {
		firstNumber: parseFloat(request.body.firstNumber) ? parseFloat(request.body.firstNumber) : "N/A",
		secondNumber: parseFloat(request.body.secondNumber) ? parseFloat(request.body.secondNumber) : "N/A",
		firstRoundedNumber: Math.round(parseFloat(request.body.firstNumber)),
		secondRoundedNumber: Math.round(parseFloat(request.body.secondNumber)),
	};
	response.json(sqrt);
});


app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
