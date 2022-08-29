public class Estagiario extends Vendedor {

    public Estagiario(String nome){
        super.nome = nome;
        super.PONTOS_POR_VENDA = 5;
    }

    /*IMPLEMENTAÇÃO DO MÉTODO ABSTRATO*/
    @Override
    public int calcularPontos() {
        return 5 * vendas;
    }

    @Override
    public String mostrarCategoria(){
        if (calcularPontos() < 20) {
            return "Estagiária(o) " + this.nome + " tem um total de " + calcularPontos() + " pontos e categoriza como estagiária(o) novata(o).";
        }else {
            return "Estagiária(o) " + this.nome + " tem um total de " + calcularPontos() + " pontos e categoriza como estagiária(o) experiente.";
        }
    }
}
