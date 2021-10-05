let ObjFilme = {
    titulo: "Vingadores",
    diretor: "Joss Whedon",
    ano: "2010",
    totalDeVotos: 62,
    nota: 9,
    personagens: ["Iron Man", "Hulk", "Capitão Améria", "Thor"],
    addVoto: function () {
        return this.totalDeVotos += 1;
    },
}
console.log("--------------------------------------------------------------")
console.log(ObjFilme);
console.log("------------------  ADICIONA + 1 VOTO  -----------------------")
console.log(ObjFilme.addVoto());
console.log("--------------------------------------------------------------")

function Filme (titulo, diretor, ano, totalDeVotos, nota, personagens){
    this.titulo = titulo;
    this.diretor = diretor;
    this.ano = ano;
    this.totalDeVotos = totalDeVotos;
    this.nota = nota;
    this.personagens = personagens;
    this.addVoto = function(){
        return this.totalDeVotos += 1;
    }
}

let starwars = new Filme("Star Wars","Irvin Kershner", "1985", 45, 8, ["Darth Vader", "Obi-Wan","Luke Skywalker", "Yoda" ]);
let mib = new Filme ("MIB"," Barry Sonnenfeld", "2000", 54, 8, ["Agente K", "Agente J", "Serleena", "Frank"]);
let ligaDaJustica = new Filme ("Liga da Justiça", "Zack Snyder", "2017", 59, 9, ["Batman", "Superman", "Flash", "Arqueiro"]);

console.log("--------------  IMPRIMI TITULOS DOS FILMES  ----------------")
let listaFilmes = [starwars, mib, ligaDaJustica];

function titulosDeFilmes(listaDeFilmes) {    
    listaDeFilmes.forEach(function (elemento) {
        console.log(elemento.titulo) 
    });
};

titulosDeFilmes(listaFilmes);