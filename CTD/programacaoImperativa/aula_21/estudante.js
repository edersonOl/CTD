function Estudante (nome, faltas, notas){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function(){
        let media = ( this.notas[0] + this.notas[1] + this.notas[2] + this.notas[3] ) / 4;
        return media ;
    }

    this.ausente = function(){
        this.faltas++;
    }
}

//let estudante1 = new Estudante("Marcelo", 1, [7,8,9,10]);

//console.log(estudante1);

module.exports = Estudante;