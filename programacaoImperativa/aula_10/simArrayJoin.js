var array1 = ["O", "L", "A"];
var array2 = ["O", "L", "A", " ", "P", "E", "S", "S", "O", "A", "L"];
console.log(joinSemMetodo(array1))
console.log(joinComFor(array2))

function joinSemMetodo (array) {
    let texto = (array[0] + " / " + array[1] + " / " + array[2] + " / ");
    return texto
}

function joinComFor (arr) {                  // Função JoinComFor - Recebe um parâmetro "arr", cujo é a array2
    let join = "";                       
    for (let i = 0; i < arr.length; i++) {   // Laço for - Repete a condição até o final da array
         join += arr[i] + " / ";             // "=+" é o mesmo que utilizar > let join = join + arr[i] + "/" 
    }
    return join
}