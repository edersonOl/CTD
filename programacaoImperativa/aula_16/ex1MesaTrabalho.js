let printNum = (num1,num2) => {
    for (let i = 1; i <= 100; i++) {
      if (((i % num1) == 0) && ((i % num2) != 0)) {
        console.log("Fizz")
      } 
      if (((i % num2) == 0) && ((i % num1) != 0)) {
        console.log ("Buzz")    
      } 
      if (((i % num1) == 0) && ((i % num2) == 0)) {
        console.log("FizzBuzz");     
      }
      else {
        console.log(i + " - Esse número não múltiplo de " +num1 + " e também não é múltiplo de " + num2);
      }   
    }
}

printNum (2,3);