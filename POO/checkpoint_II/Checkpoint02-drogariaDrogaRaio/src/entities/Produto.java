package entities;

public class Produto {

    private int id;
    private String nomeProduto;
    private int quantidade;

    //Construtor

    public Produto(int id, String nomeProduto, int quantidade) {
        this.id = id;
        this.nomeProduto = nomeProduto;
        this.quantidade = quantidade;
    }

    //Getter e Setter

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomeProduto() {
        return nomeProduto;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    //Método toString()

    @Override
    public String toString() {
        return "Produto{" +
                "id=" + id +
                ", nomeProduto='" + nomeProduto + '\'' +
                ", quantidade=" + quantidade +
                '}';
    }
}
