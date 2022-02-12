class CalcStatic {
  static #sum = (numbersParams) => {
    const result = numbersParams.reduce((total, num) => {
      return total + num;
    });
    console.log(result);
  };

  static #sub = (numbersParams) => {
    const result = numbersParams.reduce((total, num) => {
      return total - num;
    });
    console.log(result);
  };

  static #mult = (numbersParams) => {
    const result = numbersParams.reduce((total, num) => {
      return total * num;
    });
    console.log(result);
  };

  static #div = (numbersParams) => {
    const result = numbersParams.reduce((total, num) => {
      return total / num;
    });
    console.log(result);
  };

  static #actionHandler = (operator, numbers) => {
    switch (operator) {
      case "sum":
        this.#sum(numbers);
        break;

      case "sub":
        this.#sub(numbers);
        break;

      case "mult":
        this.#mult(numbers);
        break;

      case "div":
        this.#div(numbers);
        break;
      default:
        console.log("unknown operation type");
    }
  };

  static init = (operator, numbers) => {
    // console.log(this);
    this.#actionHandler(operator, numbers);
  };
}

module.exports = CalcStatic;
