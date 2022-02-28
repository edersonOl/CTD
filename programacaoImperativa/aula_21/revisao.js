//Crie um objeto estudante que tenha como atributos: nome (string),
//  quantidade de faltas (number) e notas (array de números). 
//  Crie um construtor para ele e importe-o como o módulo estudante

//Nosso objeto estudante terá o método calcularMedia que retorna a 
// média de suas notas. Também terá um método chamado faltas, 
// que simplesmente aumenta o número de faltas em 1.

// let estudante = {
//     nome : "Fulano",
//     faltas : 5,
//     notas : [7,8,6,10]
// }

// console.log(estudante.nome);


let EstudanteModulo = require ("./estudante");
let CursoModulo = require("./curso");

CursoModulo.listaEstudantes.push(new EstudanteModulo("Marcelo", 1, [7,8,9,10]));
CursoModulo.listaEstudantes.push(new EstudanteModulo("Maria", 1, [7,8,9,10]));
CursoModulo.listaEstudantes.push(new EstudanteModulo("Larissa", 1, [7,8,9,10]));

console.log(estudante1.faltas);
console.log(estudante1.ausente());
console.log(estudante1.faltas);
console.log("-------------------------------------");
console.log(CursoModulo);

