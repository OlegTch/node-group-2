class CalcClass {
  constructor(operator, numbers) {
    this.operator = operator;
    this.numbers = numbers;
  }

  sum = (numbersParams) => {
    const result = numbersParams.reduce((total, num) => {
      return total + num;
    });
    console.log(result);
  };

  sub = (numbersParams) => {
    const result = numbersParams.reduce((total, num) => {
      return total - num;
    });
    console.log(result);
  };

  mult = (numbersParams) => {
    const result = numbersParams.reduce((total, num) => {
      return total * num;
    });
    console.log(result);
  };

  div = (numbersParams) => {
    const result = numbersParams.reduce((total, num) => {
      return total / num;
    });
    console.log(result);
  };

  actionHandler = (operator, numbers) => {
    switch (operator) {
      case "sum":
        this.sum(numbers);
        break;

      case "sub":
        this.sub(numbers);
        break;

      case "mult":
        this.mult(numbers);
        break;

      case "div":
        this.div(numbers);
        break;
      default:
        console.log("unknown operation type");
    }
  };

  init = () => {
    this.actionHandler(this.operator, this.numbers);
  };
}

module.exports = CalcClass;
