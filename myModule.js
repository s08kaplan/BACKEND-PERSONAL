const date = new Date().toLocaleDateString();
let result;
const calculation = (x, y, operation) => {
  switch (operation) {
    case "+":
      result = Number(x) + Number(y);
      return result;
    case "-":
      result = x - y;
      return result;
    case "*":
      result = x * y;
      return result;
    case "/":
      result = y === 0 ? "a number cannot be divided by 0" : `${x / y}`;
      return result;

    default:
      result = " enter a valid operation";
      return result;
  }
};
module.exports = { date, calculation }
