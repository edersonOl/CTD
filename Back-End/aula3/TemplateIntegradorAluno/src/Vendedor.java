
//validação que usa propriedades de subclasse apenas!!
//Classe abstrata Vendedor - aqui vai o Template Method
public abstract class Vendedor {

    protected String nome;
    protected int vendas = 0;
    protected int PONTOS_POR_VENDA;

    public void vender(int qtdVendas){
        this.vendas += qtdVendas;
        System.out.println(this.nome +" realizou "+ qtdVendas + " vendas.");
    }

    /*Método que calcula os pontos do Vendedor de acordo com seus aspectos
    a serem considerados*/
    public abstract int calcularPontos();

    /*TEMPLATE METHOD - recebe o total de pontos calculados a partir
    da subclasse e valida cada item para retornar a categoria*/
    public String mostrarCategoria() {
        int totalDePontos = calcularPontos();
        if (totalDePontos < 20) {
            return this.nome + ": Vendedor novato";
        } else if (totalDePontos < 31) {
            return this.nome + ": Vendedor aprendiz";
        } else if (totalDePontos < 41) {
            return this.nome + ": Vendedor bom";
        } else {
            return this.nome + ": Vendedor mestre";
        }
    }
}





