// Criação de arrow function com no nome de printNum, a mesma tem 5 parâmetros, sendo eles num1, num2, wordNumber1, wordNumber2, wordNumbers.

let printNum = (num1,num2, wordNumber1,wordNumber2, wordNumbers) => {
    for (let i = 1; i <= 100; i++) {
      //Se i for múltiplo de num1, imprimi a palavra da arrow function wordNum1
      if (((i % num1) == 0) && (i % num2) != 0) { 
        console.log(wordNumber1()); 
      } 
      //Se i for múltiplo de num2, imprimi a palavra da arrow function wordNum2
      if (((i % num2) == 0) && ((i % num1) != 0)) {
        console.log(wordNumber2());    
      } 
      //Se i for múltiplo de num1 e num2, imprimi a palavra da arrow function word
      if (((i % num1) && (i % num2)) == 0) {
        console.log(wordNumbers());     
     }
     //Caso não seja múltiplo de ambos, então imprimi a mensagem abaixo
      else {
        console.log(i + " - Esse número não múltiplo de " +num1 + " e também não é múltiplo de " + num2);
      }   
    };
    return
};

// Arrow function wordNum1 para retornar a palavra escolhida na condicional do parâmetro Num1 na arrow function printNum.
let wordNum1 = () => "Agora"; 

// Arrow function wordNum2 para retornar a palavra escolhida na condicional do parâmetro Num2 na arrow function printNum.
let wordNum2 = () => "Vai";  

// Arrow function word para retornar a palavra escolhida na condicional para caso o index for múltiplo de num1 e num2 na arrow function printNum.
let word = () => "Agora vai";  


// Pula uma linha
console.log(); 
console.log("------------------------------------------");
//Chama a arrow function printNum e passa 2 e 3 como parâmetros.
printNum(10,2,wordNum1,wordNum2,word); 
console.log("------------------------------------------");


