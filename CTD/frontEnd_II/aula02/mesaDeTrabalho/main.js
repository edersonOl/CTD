let resultado = "" ;
let pontuacaoMaquina = 0;
let pontuacaoUsuario = 0;

while (pontuacaoMaquina < 2 && pontuacaoUsuario < 2) {

    let maoUsuario = parseInt(prompt("Pedra(1), Papel(2), e tesoura(3)"));
    let random = parseInt(Math.random() * (4 -1) +1 );
    let maoMaquina = random;
    let erromgs = "insira um Valor valido"
    let finalresult = ""
    console.log(maoUsuario);
    console.log(maoMaquina);
    console.log(pontuacaoMaquina);
    console.log(pontuacaoUsuario);
    if (maoUsuario > 3 || maoUsuario < 1) {
        alert(erromgs)
    }    
    else{
  
    switch(maoUsuario) {
        
        case 1:

            switch(maoMaquina) {        
             
                case 1:
                resultado = "Empate! Ambos jogaram Pedra! ";
                break;
        
                case 2:
                resultado = "Derrota! Maquina joga Papel e ganha! ";
                pontuacaoMaquina++ ;
                break;
        
                case 3:
                resultado = "Vitória! Maquina jogou tesoura ";
                pontuacaoUsuario++ ;
                break;
            }
        break;   
        case 2:

            switch(maoMaquina) {
                           
                case 1:
                    resultado = "Vitória! Maquina jogou Pedra ";
                    pontuacaoUsuario++ ;
                    break;
                case 2:
                    resultado = "Empate! Ambos jogaram Papel ";
                    break;
                case 3:
                    resultado = "Derrota! Maquina joga Tesoura e ganha!"
                    pontuacaoMaquina++ ;
                    break;
            }
        break;    
        case 3:

            switch (maoMaquina) {
                            
                case 1:
                    resultado = "Derrota! Maquina joga Pedra e ganha! ";
                    pontuacaoMaquina++ ;
                    break;
                case 2:
                    resultado = "Vitória! Maquina jogou Papel ";
                    pontuacaoUsuario++ ;
                    break;
                case 3:
                    resultado = "Empate! Ambos jogaram Tesoura "
                    
            }
        break

        default:

        alert(erromgs)
   

  
  
   
    }  


alert( resultado + "Maquina " + pontuacaoMaquina + " x " + pontuacaoUsuario + " Usuário")
}

}
if (pontuacaoMaquina>pontuacaoUsuario) {

   finalresult = " Derrota "
}

else {

  finalresult = "Você venceu! "

}

alert( finalresult + "com o placar de  " + "Maquina " + pontuacaoMaquina + " x " + pontuacaoUsuario + " Usuário" );