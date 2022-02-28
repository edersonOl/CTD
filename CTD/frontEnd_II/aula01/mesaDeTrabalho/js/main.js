let arr = [1, 2, 3, 4, 5];
let arr2 = [10, 20, 30, 40, 50]


function somarElementos(numero) {
    let soma = 0;
    numero.forEach(i => {
        soma += i
        console.log(soma)
    })
};

somarElementos(arr2);
