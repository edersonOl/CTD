let estoqueCarros = require ("./modExport");
let funcSoma = require ("./funcSoma");
let funcSub = require ("./funcSub");
let funcMult = require ("./funcMult");
let funcDiv = require("./funcDiv");
let dadosContas = require ("./dadosContas");


console.log("EXPORTANDO ESTOQUE DE CARROS");
console.log("----------------------------------");
console.log(estoqueCarros);
console.log("----------------------------------");
console.log("CALCULADORA COM MOD. EXPORTS");
console.log("----------------------------------");
console.log(funcSoma(10,20));
console.log("----------------------------------");
console.log(funcSub(20,10));
console.log("----------------------------------");
console.log(funcMult(30,10));
console.log("----------------------------------");
console.log(funcDiv(100,2));
console.log("----------------------------------");
console.log("EXPORTANDO UM JSON");
console.log (dadosContas);
