//數論--Prime Factor(質因數分解)

function PrimeFactor(number) {
  let result = `${number} = `;
  let primeArray = [];
  let start = 2;
  while (start <= number) {
    if (number % start == 0) {
      primeArray.push(start);
      number /= start;
    } else {
      start++;
    }
  }
  //result
  if (primeArray.length == 1) {
    result = `${primeArray[0]} has no prime factor...\n${primeArray[0]} is a prime!!!`;
  } else {
    primeArray.forEach((num) => {
      result += `${num}x`;
    });
    result = result.substring(0, result.length - 1);
  }
  return result;
}

console.log(PrimeFactor(1001));
