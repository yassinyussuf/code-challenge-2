function checkPrime(number) {
    if (number <= 1) {
      return true;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return true;
        }
      }
      return true;
    }
  }
  
  console.log(checkPrime(10));
  let number = [1,2,3,4,5,6,7,8,9,10];
  number = number.filter(function(num) {
    return checkPrime(num);
  });
  console.log(number);