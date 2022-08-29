package entities.subclasses;

public class Farmaceutico extends Funcionario implements Atendimento{

    //MÉTODO PARA RECEBER PRODUTO
    @Override
    public double buscarProduto() {
        return 0;
    }

    //MÉTODO PARA RECEBER CPF DA INTERFACE
    @Override
    public String buscarCPF(String cpf) {
        // MODIFICAR PARA RECEBER CPF
        return cpf;
    }
}
