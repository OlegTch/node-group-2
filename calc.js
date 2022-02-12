// console.log("Hello CALC");
// const sum, sub, mult, div
// console.log(process.argv);

const [operator, ...numbersArgs] = process.argv.slice(2);
// console.log(operator);
// console.log(numbersArgs);

const numbers = numbersArgs.map((number) => Number(number));
console.log(numbers);

// if ("sum" === operator) {
//   const result = numbers.reduce((total, num) => {
//     return total + num;
//   });
//   console.log(result);
// }

// if ("sub" === operator) {
//   const result = numbers.reduce((total, num) => {
//     return total - num;
//   });
//   console.log(result);
// }

// if ("mult" === operator) {
//   const result = numbers.reduce((total, num) => {
//     return total * num;
//   });
//   console.log(result);
// }

// if ("div" === operator) {
//   const result = numbers.reduce((total, num) => {
//     return total / num;
//   });
//   console.log(result);
// }

const sum = (numbersParams) => {
  const result = numbersParams.reduce((total, num) => {
    return total + num;
  });
  console.log(result);
};

const sub = (numbersParams) => {
  const result = numbersParams.reduce((total, num) => {
    return total - num;
  });
  console.log(result);
};

const mult = (numbersParams) => {
  const result = numbersParams.reduce((total, num) => {
    return total * num;
  });
  console.log(result);
};

const div = (numbersParams) => {
  const result = numbersParams.reduce((total, num) => {
    return total / num;
  });
  console.log(result);
};

switch (operator) {
  case "sum":
    sum(numbers);
    break;

  case "sub":
    sub(numbers);
    break;

  case "mult":
    mult(numbers);
    break;

  case "div":
    div(numbers);
    break;

  default:
    console.log("unknown operation type");
}
