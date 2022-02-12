const mult = (numbersParams) => {
  const result = numbersParams.reduce((total, num) => {
    return total * num;
  });
  console.log(result);
};

module.exports = mult;
