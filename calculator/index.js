// const operations = require("./operations");
const actionHandler = require("./actionHandler");
const [operator, ...numbersArgs] = process.argv.slice(2);
const numbers = numbersArgs.map((number) => Number(number));

actionHandler(operator, numbers);
