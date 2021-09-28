/*
Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).
*/

let Estudante = require ("./estudante");

let Curso = {
     nomeDoCurso : "Nome do Curso",
     notaAprov : 7,
     faltasMax : 2,
     listaEstudantes: [
        new Estudante('Maria', 1, [8,8,6,9]),
        new Estudante('João', 3, [9,7,7,9]),
        new Estudante('Sebastião', 1, [2,10,8,9]),
        new Estudante('Larissa', 2, [5,10,9.5,7])
     ]
}

module.exports = Curso;





