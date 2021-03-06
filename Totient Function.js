//數論--Totient Fuction (找到n以內和n互質個數)

function TotientFuntion(number) {
  let temp = number;
  let primeArray = [];
  let start = 2;
  while (start <= number) {
    if (number % start == 0) {
      number /= start;
      if (!primeArray.some((x) => x == start)) {
        primeArray.push(start);
      }
    } else {
      start++;
    }
  }

  let v1 = 1;
  let v2 = 1;
  primeArray.forEach((num) => {
    v1 *= num - 1;
    v2 *= num;
  });
  return (temp * v1) / v2;
}

let input = 133848;
console.log(`phi of ${input} is : ` + TotientFuntion(input));
