module.exports = function getZerosCount(number, base) {
  let numberSystem = base;
  let result = null;

  for (let divider = 2; divider <= base; divider++) {
    if (numberSystem % divider === 0) {
      let numberFactorial = number;
      let countMultiplierFactorial = 0;
      while (numberFactorial / divider > 0) {
        countMultiplierFactorial = countMultiplierFactorial + Math.floor(numberFactorial / divider);
        numberFactorial = Math.floor(numberFactorial / divider);
      }

      let countMultiplierNumberSystem = 0;
      while (numberSystem % divider === 0) {
        numberSystem = Math.floor(numberSystem / divider);
        countMultiplierNumberSystem++;
      }

      if (result === null || Math.floor(countMultiplierFactorial / countMultiplierNumberSystem) < result) {
        result = Math.floor(countMultiplierFactorial / countMultiplierNumberSystem);
      }
    }
  }
  return result;
}