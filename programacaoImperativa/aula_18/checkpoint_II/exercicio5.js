/*5.	String.split()
Você deve criar uma função chamada split que receba uma string e simule o comportamento da função split original. Se você não sabe como funciona, o Google pode ajudá-lo.
Importante: Você não pode usar o String.split()

Exemplo: 
split(“olá”) deve retornar [”o”,”l”,”á”]
split(“tchau”) deve retornar [“t”,“c”,”h”,”a”,”u”]*/

function split(texto) {  
    let arr = [];
    for(let i = 0; i < texto.length; i++) {
        arr.push(texto[i]);
    }
    return arr;
};

console.log(split("olá mundo"));