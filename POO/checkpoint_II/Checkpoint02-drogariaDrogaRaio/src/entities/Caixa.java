package entities.subclasses;

public class Caixa extends Funcionario implements Atendimento{

    private double valor;
    private String formaDePagamento;

    //Constructor
    public Caixa(double valor, String formaDePagamento) {
        this.valor = valor;
        this.formaDePagamento = formaDePagamento;
    }

    //MÉTODO PARA RECEBER PRODUTO
    @Override
    public double buscarProduto() {
        return 0;
    }

    //MÉTODO PARA RECEBER CPF DA INTERFACE
    @Override
    public String buscarCPF(String cpf) {
        return cpf;
    }
}
