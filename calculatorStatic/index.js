const CalcStatic = require("./CalcStatic");

const [operator, ...numbersArgs] = process.argv.slice(2);
const numbers = numbersArgs.map((number) => Number(number));

CalcStatic.init(operator, numbers);
